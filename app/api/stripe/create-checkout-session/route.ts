import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe-server";

export const runtime = "nodejs";

type CheckoutBody = {
  priceId?: string;
  mode?: "payment" | "subscription";
  quantity?: number;
  customerEmail?: string;
  metadata?: Record<string, string>;
  firebaseUid?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutBody;
    const priceId = body.priceId ?? process.env.STRIPE_PRICE_ID;
    if (!priceId) {
      return NextResponse.json(
        { error: "Missing priceId and STRIPE_PRICE_ID env value." },
        { status: 400 }
      );
    }

    const mode = body.mode ?? "subscription";
    const quantity = body.quantity && body.quantity > 0 ? body.quantity : 1;
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? new URL(request.url).origin;
    const metadata = {
      ...(body.metadata ?? {}),
      firebaseUid: body.firebaseUid ?? body.metadata?.firebaseUid ?? "",
    };

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity }],
      customer_email: body.customerEmail ?? undefined,
      client_reference_id: body.firebaseUid ?? undefined,
      success_url: `${baseUrl}/account?checkout=success`,
      cancel_url: `${baseUrl}/account?checkout=cancelled`,
      metadata,
      subscription_data:
        mode === "subscription"
          ? {
              metadata,
            }
          : undefined,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Stripe checkout session error:", error);
    return NextResponse.json(
      { error: "Could not create checkout session." },
      { status: 500 }
    );
  }
}
