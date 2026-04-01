"use client";

import { useState } from "react";

type CheckoutButtonProps = {
  priceId?: string;
  mode?: "payment" | "subscription";
  customerEmail?: string;
  firebaseUid?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function CheckoutButton({
  priceId,
  mode = "subscription",
  customerEmail,
  firebaseUid,
  className = "btn-primary",
  children = "Start checkout",
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, mode, customerEmail, firebaseUid }),
      });
      const data = (await res.json()) as { sessionId?: string; url?: string; error?: string };
      if (!res.ok) {
        throw new Error(data.error ?? "Failed to start checkout.");
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      throw new Error("No checkout URL/session returned.");
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Checkout failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleCheckout}
      disabled={loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
