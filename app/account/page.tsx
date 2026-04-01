"use client";

import Navbar from "@/components/Navbar";
import CheckoutButton from "@/components/CheckoutButton";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { getIdToken, onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth, db } from "@/lib/firebase";

type ProfileData = {
  username?: string;
  role?: string;
  pro?: boolean;
  planStatus?: string;
  cancelAtPeriodEnd?: boolean;
  currentPeriodEndMs?: number | null;
  stripeSubscriptionId?: string | null;
  createdAt?: { toDate?: () => Date } | string | number | null;
};

export default function AccountPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [billingBusy, setBillingBusy] = useState(false);
  const [syncingPlan, setSyncingPlan] = useState(false);

  const checkoutStatus = searchParams.get("checkout");

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

  const handleCancelSubscription = async () => {
    if (!auth.currentUser) {
      return;
    }
    const confirmed = window.confirm(
      "Cancel at period end? You will keep Pro access until the end of your billing period."
    );
    if (!confirmed) {
      return;
    }
    setBillingBusy(true);
    setError("");
    try {
      const idToken = await getIdToken(auth.currentUser, true);
      const res = await fetch("/api/stripe/cancel-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ cancelAtPeriodEnd: true }),
      });
      const data = (await res.json()) as { error?: string; cancelAtPeriodEnd?: boolean };
      if (!res.ok) {
        throw new Error(data.error ?? "Could not cancel subscription.");
      }
      setProfile((prev) => ({
        ...(prev ?? {}),
        role: "pro",
        pro: true,
        cancelAtPeriodEnd: Boolean(data.cancelAtPeriodEnd),
      }));
    } catch (err) {
      const message = (err as { message?: string })?.message ?? "";
      setError(message || "Unable to cancel subscription.");
    } finally {
      setBillingBusy(false);
    }
  };

  const syncSubscriptionStatus = async (targetUser?: User | null) => {
    const currentUser = targetUser ?? auth.currentUser;
    if (!currentUser) {
      return;
    }
    setSyncingPlan(true);
    try {
      const idToken = await getIdToken(currentUser, true);
      const res = await fetch("/api/stripe/sync-subscription", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      const data = (await res.json()) as Partial<ProfileData> & { error?: string };
      if (!res.ok) {
        throw new Error(data.error ?? "Could not sync plan.");
      }
      setProfile((prev) => ({
        ...(prev ?? {}),
        role: data.role,
        pro: Boolean(data.pro),
        planStatus: data.planStatus,
        cancelAtPeriodEnd: Boolean(data.cancelAtPeriodEnd),
        currentPeriodEndMs:
          typeof data.currentPeriodEndMs === "number" ? data.currentPeriodEndMs : null,
        stripeSubscriptionId:
          typeof data.stripeSubscriptionId === "string" ? data.stripeSubscriptionId : null,
      }));
    } catch (err) {
      const message = (err as { message?: string })?.message ?? "";
      setError(message || "Unable to sync subscription status.");
    } finally {
      setSyncingPlan(false);
    }
  };

  const isPro = Boolean(profile?.pro || profile?.role === "pro");
  const currentPeriodEndText =
    typeof profile?.currentPeriodEndMs === "number"
      ? new Date(profile.currentPeriodEndMs).toLocaleString()
      : "";

  useEffect(() => {
    if (checkoutStatus !== "success") {
      return;
    }
    if (!user) {
      return;
    }
    syncSubscriptionStatus(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkoutStatus, user?.uid]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* background glow blobs (same vibe as Home) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-teal-400/25 blur-[120px]" />
        <div className="absolute -top-36 right-0 h-[420px] w-[420px] rounded-full bg-sky-400/20 blur-[130px]" />
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

              <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
                {!isPro ? (
                  <CheckoutButton
                    className="btn-primary"
                    mode="subscription"
                    customerEmail={user?.email ?? undefined}
                    firebaseUid={user?.uid ?? undefined}
                  >
                    Subscribe
                  </CheckoutButton>
                ) : null}
                {isPro ? (
                  <button
                    type="button"
                    onClick={handleCancelSubscription}
                    disabled={billingBusy || Boolean(profile?.cancelAtPeriodEnd)}
                    className="btn-secondary disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {profile?.cancelAtPeriodEnd
                      ? "Cancellation scheduled"
                      : billingBusy
                        ? "Cancelling..."
                        : "Cancel subscription"}
                  </button>
                ) : null}
                <button
                  onClick={handleSignOut}
                  disabled={loading}
                  className="btn-secondary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Sign out
                </button>
              </div>
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
              <div className="mt-8 space-y-4">
                {checkoutStatus === "success" ? (
                  <div className="rounded-2xl border border-teal-400/40 bg-teal-500/10 px-4 py-3 text-sm text-teal-200">
                    {syncingPlan
                      ? "Checkout completed. Syncing your Pro access..."
                      : "Checkout completed. If status is still Free, it will update after webhook sync."}
                  </div>
                ) : null}
                {checkoutStatus === "cancelled" ? (
                  <div className="rounded-2xl border border-sky-400/40 bg-sky-500/10 px-4 py-3 text-sm text-sky-200">
                    Checkout was cancelled.
                  </div>
                ) : null}

                <section className="rounded-2xl border border-white/10 bg-[color-mix(in_srgb,var(--surface)_84%,transparent)] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-sm font-semibold text-white">Subscription</h2>
                    <button
                      type="button"
                      onClick={() => syncSubscriptionStatus(user)}
                      disabled={syncingPlan || !user}
                      className="btn-secondary disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {syncingPlan ? "Syncing..." : "Refresh plan status"}
                    </button>
                  </div>
                  <dl className="mt-4 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <dt className="text-xs uppercase tracking-[0.2em]">Plan</dt>
                      <dd className="text-white">{isPro ? "Pro" : "Free"}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-xs uppercase tracking-[0.2em]">Status</dt>
                      <dd className="text-white">{profile?.planStatus ?? (isPro ? "active" : "none")}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-xs uppercase tracking-[0.2em]">Cancel at period end</dt>
                      <dd className="text-white">{profile?.cancelAtPeriodEnd ? "Yes" : "No"}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-xs uppercase tracking-[0.2em]">Current period ends</dt>
                      <dd className="text-white">{currentPeriodEndText || "-"}</dd>
                    </div>
                  </dl>
                </section>

                <div className="grid gap-4 lg:grid-cols-2">
                {/* Auth details */}
                <section className="rounded-2xl border border-white/10 bg-[color-mix(in_srgb,var(--surface)_84%,transparent)] p-5">
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
                <section className="rounded-2xl border border-white/10 bg-[color-mix(in_srgb,var(--surface)_84%,transparent)] p-5">
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
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
