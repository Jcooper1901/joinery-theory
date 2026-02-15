"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth, db } from "@/lib/firebase";

type ProfileData = {
  username?: string;
  role?: string;
  createdAt?: { toDate?: () => Date } | string | number | null;
};

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (nextUser) => {
      setError("");

      if (!nextUser) {
        setUser(null);
        setProfile(null);
        setLoading(false);
        router.replace("/login");
        return;
      }

      setUser(nextUser);

      try {
        const profileRef = doc(db, "users", nextUser.uid);
        const snapshot = await getDoc(profileRef);
        setProfile(snapshot.exists() ? (snapshot.data() as ProfileData) : null);
      } catch (err) {
        const message = (err as { message?: string })?.message ?? "";
        setError(message || "Unable to load profile.");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const createdAtText = useMemo(() => {
    if (!profile?.createdAt) return "";
    const value = profile.createdAt;
    if (typeof value === "string") return value;
    if (typeof value === "number") return new Date(value).toLocaleString();
    if (value && typeof value === "object" && typeof value.toDate === "function") {
      return value.toDate()?.toLocaleString() ?? "";
    }
    return "";
  }, [profile?.createdAt]);

  const handleSignOut = async () => {
    setLoading(true);
    setError("");
    try {
      await signOut(auth);
      router.replace("/"); // you can change to /account if you want
    } catch (err) {
      const message = (err as { message?: string })?.message ?? "";
      setError(message || "Unable to sign out.");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* background glow blobs (same vibe as Home) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[120px]" />
        <div className="absolute -top-36 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[130px]" />
      </div>

      <Navbar />

      <main className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8">
        <div className="gradient-border">
          <div className="glass-card bg-noise rounded-[var(--radius-24)] p-6 shadow-large">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Account
                </p>
                <h1 className="mt-4 text-3xl font-semibold text-white">
                  Your account details
                </h1>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Manage your profile and authentication details.
                </p>
              </div>

              <button
                onClick={handleSignOut}
                disabled={loading}
                className="btn-secondary mt-4 sm:mt-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Sign out
              </button>
            </div>

            {loading ? (
              <div className="mt-8 flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-white/70" />
              </div>
            ) : error ? (
              <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : (
              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {/* Auth details */}
                <section className="rounded-2xl border border-white/10 bg-[rgba(8,12,24,0.7)] p-5">
                  <h2 className="text-sm font-semibold text-white">Auth details</h2>
                  <dl className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                    <div className="flex flex-col gap-1">
                      <dt className="text-xs uppercase tracking-[0.2em]">Email</dt>
                      <dd className="text-white">{user?.email || "-"}</dd>
                    </div>

                    <div className="flex flex-col gap-1">
                      <dt className="text-xs uppercase tracking-[0.2em]">UID</dt>
                      <dd className="break-all text-white">{user?.uid || "-"}</dd>
                    </div>

                    <div className="flex flex-col gap-1">
                      <dt className="text-xs uppercase tracking-[0.2em]">Display name</dt>
                      <dd className="text-white">{user?.displayName || "-"}</dd>
                    </div>

                    <div className="flex flex-col gap-1">
                      <dt className="text-xs uppercase tracking-[0.2em]">Photo URL</dt>
                      <dd className="break-all text-white">{user?.photoURL || "-"}</dd>
                    </div>

                    <div className="flex flex-col gap-1">
                      <dt className="text-xs uppercase tracking-[0.2em]">Email verified</dt>
                      <dd className="text-white">{user?.emailVerified ? "Yes" : "No"}</dd>
                    </div>
                  </dl>
                </section>

                {/* Profile document */}
                <section className="rounded-2xl border border-white/10 bg-[rgba(8,12,24,0.7)] p-5">
                  <h2 className="text-sm font-semibold text-white">Profile document</h2>

                  {profile ? (
                    <dl className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                      <div className="flex flex-col gap-1">
                        <dt className="text-xs uppercase tracking-[0.2em]">Username</dt>
                        <dd className="text-white">{profile.username || "-"}</dd>
                      </div>

                      <div className="flex flex-col gap-1">
                        <dt className="text-xs uppercase tracking-[0.2em]">Role</dt>
                        <dd className="text-white">{profile.role || "-"}</dd>
                      </div>

                      <div className="flex flex-col gap-1">
                        <dt className="text-xs uppercase tracking-[0.2em]">Created at</dt>
                        <dd className="text-white">{createdAtText || "-"}</dd>
                      </div>
                    </dl>
                  ) : (
                    <p className="mt-4 text-sm text-[var(--muted)]">
                      No profile document found yet.
                    </p>
                  )}
                </section>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
