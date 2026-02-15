"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);

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

  const handleLogout = async () => {
    try {
      await signOut(auth);

      // force UI to reflect signed-out state immediately
      router.refresh();

      // your requested redirect target:
      router.push("/account");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[rgba(5,7,13,0.7)] backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <Link className="text-lg font-semibold tracking-tight text-white" href="/">
          JoineryTheory
        </Link>

        <div className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          <Link className="transition-colors hover:text-white" href="/lessons">
            Questions
          </Link>

          <Link className="transition-colors hover:text-white" href="/micro-lessons">
            Micro Lessons
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

          <Link className="transition-colors hover:text-white" href="/account">
            Account
          </Link>
        </div>

        <Link className="btn-primary text-sm" href={pathname === "/" ? "/#cta" : "/#cta"}>
          Start free trial
        </Link>
      </nav>
    </header>
  );
}
