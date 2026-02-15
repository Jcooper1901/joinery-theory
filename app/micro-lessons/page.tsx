import Link from "next/link";

import Navbar from "@/components/Navbar";

export default function MicroLessonsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-20 pt-32 sm:px-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-semibold text-white">Micro Lessons</h1>
          <p className="text-sm text-[var(--muted)] sm:text-base">
            Choose your level to start revising.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/micro-lessons/level-1"
            className="glass-card group rounded-[var(--radius-24)] border border-white/10 p-6 text-left transition hover:-translate-y-1 hover:border-white/25"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Level 1
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Level 1
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Start revision with level 1 micro lessons.
            </p>
          </Link>

          <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6 text-left opacity-60">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Level 2
              </p>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--muted)]">
                Coming soon
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">Level 2</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Additional lessons will be added soon.
            </p>
          </div>

          <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6 text-left opacity-60">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Level 3
              </p>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--muted)]">
                Coming soon
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">Level 3</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Advanced content is on the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
