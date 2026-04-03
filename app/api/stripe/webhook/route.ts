import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe-server";
import { getAdminServices } from "@/lib/firebase-admin";
import Stripe from "stripe";

export const runtime = "nodejs";

async function findUserRefByStripeIds(params: {
  adminDb: FirebaseFirestore.Firestore;
  firebaseUid?: string | null;
  customerId?: string | null;
  subscriptionId?: string | null;
}) {
  if (params.firebaseUid) {
    return params.adminDb.collection("users").doc(params.firebaseUid);
  }

  if (params.subscriptionId) {
    const bySub = await params.adminDb
      .collection("users")
      .where("stripeSubscriptionId", "==", params.subscriptionId)
      .limit(1)
      .get();
    if (!bySub.empty) {
      return bySub.docs[0].ref;
    }
  }

  if (params.customerId) {
    const byCustomer = await params.adminDb
      .collection("users")
      .where("stripeCustomerId", "==", params.customerId)
      .limit(1)
      .get();
    if (!byCustomer.empty) {
      return byCustomer.docs[0].ref;
    }
  }

  return null;
}

function toStringOrNull(value: unknown) {
  return typeof value === "string" ? value : null;
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Missing Stripe webhook signature/secret." },
      { status: 400 }
    );
  }

  try {
    const { db: adminDb } = getAdminServices();
    const payload = await request.text();
    const event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const firebaseUid =
          toStringOrNull(session.metadata?.firebaseUid) ??
          toStringOrNull(session.client_reference_id);
        const customerId = toStringOrNull(session.customer);
        const subscriptionId = toStringOrNull(session.subscription);

        const userRef = await findUserRefByStripeIds({
          adminDb,
          firebaseUid,
          customerId,
          subscriptionId,
        });
        if (userRef) {
          const sessionEmail =
            toStringOrNull(session.customer_details?.email) ??
            toStringOrNull(session.customer_email);
          await userRef.set(
            {
              email: sessionEmail,
              emailLower: sessionEmail?.toLowerCase() ?? null,
              role: "pro",
              pro: true,
              planStatus: "active",
              stripeCustomerId: customerId,
              stripeSubscriptionId: subscriptionId,
              stripeCheckoutSessionId: session.id,
              cancelAtPeriodEnd: false,
              proUpdatedAtMs: Date.now(),
            },
            { merge: true }
          );
        }
        console.log("checkout.session.completed", session.id);
        break;
      }
      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = toStringOrNull(invoice.customer);
        const invoiceWithSubscription = invoice as Stripe.Invoice & {
          subscription?: unknown;
          parent?: { subscription_details?: { subscription?: unknown } };
        };
        const subscriptionId =
          toStringOrNull(invoiceWithSubscription.subscription) ??
          toStringOrNull(invoiceWithSubscription.parent?.subscription_details?.subscription);
        const userRef = await findUserRefByStripeIds({
          adminDb,
          customerId,
          subscriptionId,
        });
        if (userRef) {
          const invoiceEmail = toStringOrNull(invoice.customer_email);
          await userRef.set(
            {
              email: invoiceEmail,
              emailLower: invoiceEmail?.toLowerCase() ?? null,
              role: "pro",
              pro: true,
              planStatus: "active",
              stripeCustomerId: customerId,
              stripeSubscriptionId: subscriptionId,
              cancelAtPeriodEnd: false,
              proUpdatedAtMs: Date.now(),
            },
            { merge: true }
          );
        }
        console.log("invoice.paid", invoice.id);
        break;
      }
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = toStringOrNull(subscription.customer);
        const userRef = await findUserRefByStripeIds({
          adminDb,
          customerId,
          subscriptionId: subscription.id,
        });
        if (userRef) {
          const subscriptionWithPeriod = subscription as Stripe.Subscription & {
            current_period_end?: unknown;
          };
          const currentPeriodEndMs =
            typeof subscriptionWithPeriod.current_period_end === "number"
              ? subscriptionWithPeriod.current_period_end * 1000
              : null;
          const status = subscription.status;
          const isActive =
            status === "active" || status === "trialing" || status === "past_due";
          await userRef.set(
            {
              role: isActive ? "pro" : "free",
              pro: isActive,
              planStatus: status,
              stripeCustomerId: customerId,
              stripeSubscriptionId: subscription.id,
              cancelAtPeriodEnd: Boolean(subscription.cancel_at_period_end),
              currentPeriodEndMs,
              proUpdatedAtMs: Date.now(),
            },
            { merge: true }
          );
        }
        console.log("customer.subscription.updated", subscription.id);
        break;
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const userRef = await findUserRefByStripeIds({
          adminDb,
          customerId: toStringOrNull(subscription.customer),
          subscriptionId: subscription.id,
        });
        if (userRef) {
          await userRef.set(
            {
              role: "free",
              pro: false,
              planStatus: "canceled",
              cancelAtPeriodEnd: false,
              stripeSubscriptionId: subscription.id,
              proUpdatedAtMs: Date.now(),
            },
            { merge: true }
          );
        }
        console.log("customer.subscription.deleted", subscription.id);
        break;
      }
      default:
        console.log("Unhandled Stripe event:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook verification failed:", error);
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
        : "Invalid webhook signature.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
