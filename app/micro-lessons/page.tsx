"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import Navbar from "@/components/Navbar";
import { auth, db } from "@/lib/firebase";
import { isMicroLessonLevelLockedForFreePlan } from "@/lib/planAccess";

type ProfileData = {
  role?: string;
  pro?: boolean;
};

function LockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 10V7.5a4 4 0 1 1 8 0V10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="5"
        y="10"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function MicroLessonsPage() {
  const router = useRouter();
  const [isPro, setIsPro] = useState(false);
  const [planReady, setPlanReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (nextUser) => {
      if (!nextUser) {
        setIsPro(false);
        setPlanReady(true);
        return;
      }

      try {
        const profileRef = doc(db, "users", nextUser.uid);
        const snapshot = await getDoc(profileRef);
        const profile = snapshot.exists() ? (snapshot.data() as ProfileData) : null;
        setIsPro(Boolean(profile?.pro || profile?.role === "pro"));
      } catch (error) {
        console.error("Unable to load plan access", error);
        setIsPro(false);
      } finally {
        setPlanReady(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLevelClick = (href: string, level: string) => {
    if (!planReady) {
      return;
    }

    if (!isPro && isMicroLessonLevelLockedForFreePlan(level)) {
      router.push("/account");
      return;
    }

    router.push(href);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-20 pt-32 sm:px-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-semibold text-white">Micro Lessons</h1>
          <p className="text-sm text-[var(--muted)] sm:text-base">
            {isPro
              ? "Choose your level to start revising."
              : "Free users can access Level 1 only. Upgrade to Pro to unlock Levels 2 and 3."}
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <button
            type="button"
            onClick={() => handleLevelClick("/micro-lessons/level-1", "1")}
            className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6 text-left transition hover:-translate-y-1 hover:border-white/25"
          >
            <h2 className="mt-3 text-2xl font-semibold text-white">Level 1</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Start revision with level 1 micro lessons.
            </p>
          </button>

          <button
            type="button"
            onClick={() => handleLevelClick("/micro-lessons/level-2", "2")}
            className={`glass-card rounded-[var(--radius-24)] border border-white/10 p-6 text-left transition ${
              !isPro ? "border-teal-400/25 bg-teal-500/5" : "hover:-translate-y-1 hover:border-white/25"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="mt-3 text-2xl font-semibold text-white">Level 2</h2>
              {!isPro && planReady ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-200">
                  <LockIcon />
                  Locked
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {!isPro
                ? "Upgrade to Pro to unlock Level 2 micro lessons."
                : "Start revision with level 2 micro lessons."}
            </p>
          </button>

          <button
            type="button"
            onClick={() => handleLevelClick("/micro-lessons/level-3", "3")}
            className={`glass-card rounded-[var(--radius-24)] border border-white/10 p-6 text-left transition ${
              !isPro ? "border-teal-400/25 bg-teal-500/5" : "hover:-translate-y-1 hover:border-white/25"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="mt-3 text-2xl font-semibold text-white">Level 3</h2>
              {!isPro && planReady ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-200">
                  <LockIcon />
                  Locked
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {!isPro
                ? "Upgrade to Pro to unlock Level 3 micro lessons."
                : "Start revision with level 3 micro lessons."}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
