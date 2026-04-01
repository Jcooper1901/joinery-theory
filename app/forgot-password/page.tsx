"use client";

import { useState } from "react";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";

const mapAuthError = (code: string) => {
  switch (code) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/user-not-found":
      return "No account found for that email.";
    default:
      return "Unable to send reset email. Please try again.";
  }
};

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Check your inbox for a reset link.");
    } catch (err) {
      const code = (err as { code?: string })?.code ?? "";
      setError(mapAuthError(code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 text-[var(--foreground)]">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-white">Reset password</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">We will email you a reset link.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-white">Email</label>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-teal-300/40 focus:ring-2 focus:ring-teal-500/20"
              placeholder="you@example.com"
            />
          </div>

          {error ? (
            <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
              {error}
            </div>
          ) : success ? (
            <div className="rounded-lg border border-teal-300/40 bg-teal-500/10 px-3 py-2 text-sm text-teal-200">
              {success}
            </div>
          ) : (
            <div className="min-h-[40px]" />
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gradient-to-r from-teal-500 to-sky-500 px-4 py-2 text-sm font-semibold text-[#04111f] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>

        <div className="mt-6 text-sm text-[var(--muted)]">
          <Link className="text-sky-200 hover:text-white" href="/login">
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
