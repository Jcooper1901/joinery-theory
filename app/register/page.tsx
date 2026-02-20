"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Navbar from "@/components/Navbar";

const mapAuthError = (code: string) => {
  switch (code) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/email-already-in-use":
      return "That email is already registered.";
    case "auth/too-many-requests":
      return "Too many attempts. Try again later.";
    default:
      return "Registration failed. Please try again.";
  }
};

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace("/");
    } catch (err) {
      const code = (err as { code?: string })?.code ?? "";
      setError(mapAuthError(code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[120px]" />
        <div className="absolute -top-36 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[130px]" />
      </div>

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-5 pb-20 pt-32 sm:px-8">
        <div className="w-full max-w-md">
          <div className="gradient-border">
            <div className="glass-card bg-noise rounded-[var(--radius-24)] p-6 shadow-large">
              <p className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Create your account
              </p>

              <h1 className="mt-4 text-3xl font-semibold text-white">
                Start revising today
              </h1>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Join to access your dashboard, quizzes, and micro-lessons.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-[var(--muted)]">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-lg border border-white/10 bg-[rgba(8,12,24,0.7)] px-3 py-2 text-white outline-none placeholder:text-white/30 transition focus:border-white/20 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[var(--muted)]">
                    Password
                  </label>
                  <input
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="••••••••"
                    className="mt-1 w-full rounded-lg border border-white/10 bg-[rgba(8,12,24,0.7)] px-3 py-2 text-white outline-none placeholder:text-white/30 transition focus:border-white/20 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[var(--muted)]">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    placeholder="••••••••"
                    className="mt-1 w-full rounded-lg border border-white/10 bg-[rgba(8,12,24,0.7)] px-3 py-2 text-white outline-none placeholder:text-white/30 transition focus:border-white/20 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                {error ? (
                  <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                ) : (
                  <div className="min-h-[44px]" />
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create account"}
                </button>
              </form>

              <div className="mt-6 flex items-center justify-between text-sm text-[var(--muted)]">
                <Link className="hover:text-white hover:underline" href="/login">
                  Back to sign in
                </Link>
                <Link className="btn-secondary px-4 py-2" href="/">
                  Home
                </Link>
              </div>

              <p className="mt-6 text-xs text-[var(--muted)]">
                By creating an account you agree to our{" "}
                <a className="hover:text-white hover:underline" href="#">
                  Terms
                </a>{" "}
                and{" "}
                <a className="hover:text-white hover:underline" href="#">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
