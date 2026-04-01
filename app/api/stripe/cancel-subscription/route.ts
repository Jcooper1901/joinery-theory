import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe-server";
import { getAdminServices } from "@/lib/firebase-admin";
import Stripe from "stripe";

export const runtime = "nodejs";

type CancelBody = {
  cancelAtPeriodEnd?: boolean;
};

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

    const body = (await request.json()) as CancelBody;
    const cancelAtPeriodEnd = body.cancelAtPeriodEnd ?? true;

    const userRef = adminDb.collection("users").doc(uid);
    const snap = await userRef.get();
    const subscriptionId = snap.get("stripeSubscriptionId") as string | undefined;

    if (!subscriptionId) {
      return NextResponse.json(
        { error: "No active subscription found for this account." },
        { status: 400 }
      );
    }

    const updated = (await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: cancelAtPeriodEnd,
    })) as Stripe.Subscription & { current_period_end?: unknown };

    const currentPeriodEndMs =
      typeof updated.current_period_end === "number"
        ? updated.current_period_end * 1000
        : null;

    await userRef.set(
      {
        cancelAtPeriodEnd: Boolean(updated.cancel_at_period_end),
        planStatus: updated.status,
        pro: updated.status === "active" || updated.status === "trialing",
        role:
          updated.status === "active" || updated.status === "trialing"
            ? "pro"
            : "free",
        currentPeriodEndMs,
        proUpdatedAtMs: Date.now(),
      },
      { merge: true }
    );

    return NextResponse.json({
      ok: true,
      cancelAtPeriodEnd: Boolean(updated.cancel_at_period_end),
      status: updated.status,
    });
  } catch (error) {
    console.error("Cancel subscription error:", error);
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
        : "Could not cancel subscription.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
