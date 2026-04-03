"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_EMAIL } from "@/lib/admin";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);

      // helps if the navbar is rendered across routes/layouts
      router.refresh();
    });

    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMobileMenuOpen(false);

      // force UI to reflect signed-out state immediately
      router.refresh();

      // your requested redirect target:
      router.push("/account");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[rgba(11,18,32,0.78)] backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <Link
          className="text-lg font-semibold tracking-tight text-white"
          href="/"
          aria-label="JoineryTheory home"
        >
          JoineryTheory
        </Link>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-300/20 bg-white/5 text-white transition hover:border-sky-300/40 hover:bg-white/10 md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <div className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          <Link className="transition-colors hover:text-white" href="/pricing">
            Pricing
          </Link>

          <Link className="transition-colors hover:text-white" href="/lessons">
            Questions
          </Link>

          <Link className="transition-colors hover:text-white" href="/micro-lessons">
            Micro Lessons
          </Link>

          <Link className="transition-colors hover:text-white" href="/job-quotation">
            Job Quotation
          </Link>

          <Link className="transition-colors hover:text-white" href="/joint-types">
            Joint Types
          </Link>

          {authReady && !user ? (
            <Link className="transition-colors hover:text-white" href="/login">
              Sign in
            </Link>
          ) : null}

          {authReady && user ? (
            <button
              type="button"
              onClick={handleLogout}
              className="transition-colors hover:text-white"
            >
              Logout
            </button>
          ) : null}

          {authReady && user && isAdmin ? (
            <Link className="transition-colors hover:text-white" href="/admin/reported-questions">
              Reports
            </Link>
          ) : null}

          {authReady && user && isAdmin ? (
            <Link className="transition-colors hover:text-white" href="/admin/users">
              Users
            </Link>
          ) : null}

          <Link className="transition-colors hover:text-white" href="/account">
            Account
          </Link>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[rgba(11,18,32,0.94)] px-5 py-4 backdrop-blur md:hidden"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm text-[var(--muted)]">
            <Link
              className="rounded-xl px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
              href="/pricing"
            >
              Pricing
            </Link>

            <Link
              className="rounded-xl px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
              href="/lessons"
            >
              Questions
            </Link>

            <Link
              className="rounded-xl px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
              href="/micro-lessons"
            >
              Micro Lessons
            </Link>

            <Link
              className="rounded-xl px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
              href="/job-quotation"
            >
              Job Quotation
            </Link>

            <Link
              className="rounded-xl px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
              href="/joint-types"
            >
              Joint Types
            </Link>

            {authReady && !user ? (
              <Link
                className="rounded-xl px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
                href="/login"
              >
                Sign in
              </Link>
            ) : null}

            {authReady && user ? (
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl px-3 py-2 text-left transition-colors hover:bg-white/5 hover:text-white"
              >
                Logout
              </button>
            ) : null}

            {authReady && user && isAdmin ? (
              <Link
                className="rounded-xl px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
                href="/admin/reported-questions"
              >
                Reports
              </Link>
            ) : null}

            {authReady && user && isAdmin ? (
              <Link
                className="rounded-xl px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
                href="/admin/users"
              >
                Users
              </Link>
            ) : null}

            <Link
              className="rounded-xl px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
              href="/account"
            >
              Account
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
