export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe-server";
import { getAdminServices } from "@/lib/firebase-admin";
import Stripe from "stripe";


function isProStatus(status: string | null | undefined) {
  return status === "active" || status === "trialing" || status === "past_due";
}

export async function POST(request: Request) {
  try {
    const { auth: adminAuth, db: adminDb } = getAdminServices();
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }
    const idToken = authHeader.slice("Bearer ".length);
    const decoded = await adminAuth.verifyIdToken(idToken);
    const uid = decoded.uid;
    const email = decoded.email ?? null;

    const userRef = adminDb.collection("users").doc(uid);
    const userSnap = await userRef.get();
    const existingCustomerId = (userSnap.get("stripeCustomerId") as string | undefined) ?? null;

    let customerId: string | null = existingCustomerId;
    if (!customerId && email) {
      const customerList = await stripe.customers.list({ email, limit: 1 });
      customerId = customerList.data[0]?.id ?? null;
    }

    if (!customerId) {
      await userRef.set(
        {
          role: "free",
          pro: false,
          planStatus: "none",
          stripeCustomerId: null,
          stripeSubscriptionId: null,
          cancelAtPeriodEnd: false,
          currentPeriodEndMs: null,
          proUpdatedAtMs: Date.now(),
        },
        { merge: true }
      );
      return NextResponse.json({ role: "free", pro: false, planStatus: "none" });
    }

    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "all",
      limit: 10,
    });

    const best = subscriptions.data.find((sub) => isProStatus(sub.status)) ?? subscriptions.data[0] ?? null;
    if (!best) {
      await userRef.set(
        {
          role: "free",
          pro: false,
          planStatus: "none",
          stripeCustomerId: customerId,
          stripeSubscriptionId: null,
          cancelAtPeriodEnd: false,
          currentPeriodEndMs: null,
          proUpdatedAtMs: Date.now(),
        },
        { merge: true }
      );
      return NextResponse.json({ role: "free", pro: false, planStatus: "none" });
    }

    const subWithPeriod = best as Stripe.Subscription & { current_period_end?: unknown };
    const currentPeriodEndMs =
      typeof subWithPeriod.current_period_end === "number"
        ? subWithPeriod.current_period_end * 1000
        : null;
    const pro = isProStatus(best.status);

    await userRef.set(
      {
        role: pro ? "pro" : "free",
        pro,
        planStatus: best.status,
        stripeCustomerId: customerId,
        stripeSubscriptionId: best.id,
        cancelAtPeriodEnd: Boolean(best.cancel_at_period_end),
        currentPeriodEndMs,
        proUpdatedAtMs: Date.now(),
      },
      { merge: true }
    );

    return NextResponse.json({
      role: pro ? "pro" : "free",
      pro,
      planStatus: best.status,
      stripeCustomerId: customerId,
      stripeSubscriptionId: best.id,
      cancelAtPeriodEnd: Boolean(best.cancel_at_period_end),
      currentPeriodEndMs,
    });
  } catch (error) {
    console.error("Sync subscription error:", error);
    const asAny = error as { code?: unknown; message?: unknown };
    const code = typeof asAny.code === "number" ? asAny.code : null;
    const msg = typeof asAny.message === "string" ? asAny.message : "";
    const isFirebasePermissionDenied =
      code === 7 ||
      msg.includes("Missing or insufficient permissions") ||
      msg.toLowerCase().includes("permission_denied");

    const message =
      isFirebasePermissionDenied
        ? "Firebase Admin service account cannot access Firestore. Grant this service account a Firestore role (for example roles/datastore.user)."
        : error instanceof Error &&
            (error.message.includes("FIREBASE_SERVICE_ACCOUNT_KEY") ||
              error.message.includes("service account"))
        ? "Server missing Firebase Admin key. Add FIREBASE_SERVICE_ACCOUNT_KEY in environment variables."
        : "Could not sync subscription.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
