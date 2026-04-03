"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged, User } from "firebase/auth";
import Navbar from "@/components/Navbar";
import { auth } from "@/lib/firebase";
import { ADMIN_EMAIL } from "@/lib/admin";

type AdminUserRow = {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  disabled: boolean;
  role: string;
  pro: boolean;
  planStatus: string;
  createdAt: string | null;
  lastSignInAt: string | null;
};

export default function AdminUsersPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [users, setUsers] = useState<AdminUserRow[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  const isAdmin = useMemo(
    () => user?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase(),
    [user]
  );

  const loadUsers = useCallback(async () => {
    if (!auth.currentUser) {
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const token = await auth.currentUser.getIdToken();
      const response = await fetch("/api/admin/user-emails", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const payload = (await response.json()) as {
        error?: string;
        users?: AdminUserRow[];
      };

      if (!response.ok) {
        throw new Error(payload.error ?? "Could not load users.");
      }

      setUsers(payload.users ?? []);
    } catch (loadError) {
      console.error(loadError);
      setError(loadError instanceof Error ? loadError.message : "Could not load users.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!authReady || !isAdmin) {
      setLoading(false);
      return;
    }
    loadUsers();
  }, [authReady, isAdmin, loadUsers]);

  const handleBackfill = useCallback(async () => {
    if (!auth.currentUser) {
      return;
    }

    setSyncing(true);
    setError(null);
    setSuccess(null);

    try {
      const token = await auth.currentUser.getIdToken();
      const response = await fetch("/api/admin/user-emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const payload = (await response.json()) as { error?: string; updated?: number };

      if (!response.ok) {
        throw new Error(payload.error ?? "Could not sync user emails.");
      }

      setSuccess(`Synced ${payload.updated ?? 0} user email records into Firestore.`);
      await loadUsers();
    } catch (syncError) {
      console.error(syncError);
      setError(syncError instanceof Error ? syncError.message : "Could not sync user emails.");
    } finally {
      setSyncing(false);
    }
  }, [loadUsers]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-20 pt-32 sm:px-8">
        <section className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Admin
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-white">Users</h1>
              <p className="mt-2 text-sm text-[var(--muted)]">
                View account emails and backfill them into Firestore.
              </p>
            </div>
            {isAdmin ? (
              <div className="flex flex-wrap gap-3">
                <button type="button" className="btn-secondary" onClick={loadUsers}>
                  Refresh
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleBackfill}
                  disabled={syncing}
                >
                  {syncing ? "Syncing..." : "Backfill Firestore emails"}
                </button>
              </div>
            ) : null}
          </div>
        </section>

        {!authReady ? (
          <section className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <p className="text-sm text-[var(--muted)]">Checking access...</p>
          </section>
        ) : null}

        {authReady && !user ? (
          <section className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <p className="text-sm text-[var(--muted)]">
              Sign in with the admin account to view users.
            </p>
            <div className="mt-4">
              <Link href="/login" className="btn-primary">
                Go to login
              </Link>
            </div>
          </section>
        ) : null}

        {authReady && user && !isAdmin ? (
          <section className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <p className="text-sm text-red-300">
              Access denied. This page is restricted to the admin account.
            </p>
          </section>
        ) : null}

        {authReady && isAdmin ? (
          <section className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            {error ? <p className="text-sm text-red-300">{error}</p> : null}
            {success ? <p className="text-sm text-emerald-300">{success}</p> : null}

            {loading ? (
              <p className="text-sm text-[var(--muted)]">Loading users...</p>
            ) : error ? (
              <p className="text-sm text-[var(--muted)]">
                Fix the server error above, then refresh this page.
              </p>
            ) : users.length === 0 ? (
              <p className="text-sm text-[var(--muted)]">No users found.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-[var(--muted)]">
                    <tr className="border-b border-white/10">
                      <th className="px-3 py-3 font-medium">Email</th>
                      <th className="px-3 py-3 font-medium">UID</th>
                      <th className="px-3 py-3 font-medium">Role</th>
                      <th className="px-3 py-3 font-medium">Plan</th>
                      <th className="px-3 py-3 font-medium">Verified</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((entry) => (
                      <tr key={entry.uid} className="border-b border-white/5">
                        <td className="px-3 py-3 text-white">{entry.email ?? "-"}</td>
                        <td className="px-3 py-3 font-mono text-xs text-[var(--muted)]">
                          {entry.uid}
                        </td>
                        <td className="px-3 py-3 text-white">{entry.role}</td>
                        <td className="px-3 py-3 text-white">{entry.planStatus}</td>
                        <td className="px-3 py-3 text-white">
                          {entry.emailVerified ? "Yes" : "No"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ) : null}
      </main>
    </div>
  );
}
