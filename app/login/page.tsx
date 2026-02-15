"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Navbar from "@/components/Navbar";

const mapAuthError = (code: string) => {
  switch (code) {
    case "auth/user-not-found":
      return "No account found for that email.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/too-many-requests":
      return "Too many attempts. Try again later.";
    default:
      return "Sign in failed. Please try again.";
  }
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // After successful Firebase email/password login,
      // redirect the user to the homepage using Next.js router.replace("/")
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
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[120px]" />
        <div className="absolute -top-36 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[130px]" />
      </div>

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-5 pb-20 pt-32 sm:px-8">
        <div className="w-full max-w-md gradient-border rounded-[var(--radius-24)]">
          <div className="glass-card rounded-[var(--radius-24)] p-6">
            <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
            <p className="mt-1 text-sm text-[var(--muted)]">Sign in to continue.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-[rgba(8,12,24,0.7)] px-3 py-2 text-white outline-none placeholder:text-[var(--muted)] focus:border-white/20"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-white">Password</label>
                <div className="mt-1 flex items-center rounded-lg border border-white/10 bg-[rgba(8,12,24,0.7)] px-3 py-2 focus-within:border-white/20">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full bg-transparent text-white outline-none placeholder:text-[var(--muted)]"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="ml-3 text-xs font-medium text-[var(--muted)] hover:text-white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {error ? (
                <div className="rounded-lg border border-red-400/60 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                  {error}
                </div>
              ) : (
                <div className="min-h-[40px]" />
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <div className="mt-6 flex flex-col gap-2 text-sm text-[var(--muted)]">
              <Link className="hover:text-white" href="/register">
                Create an account
              </Link>
              <Link className="hover:text-white" href="/forgot-password">
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
