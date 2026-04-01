import Link from "next/link";
import Navbar from "@/components/Navbar";

const freePlanFeatures = [
  "Access to 2 subtopics on each level",
  "6 free subtopics in total across Levels 1, 2 and 3",
  "3 micro lessons to explore how the platform works",
  "A simple way to try revision before upgrading",
];

const proPlanFeatures = [
  "Full access to everything on the website",
  "Every subtopic unlocked across every level",
  "Unlimited micro lessons for steady daily revision",
  "The complete JoineryTheory experience with no learning limits",
];

const comparisonRows = [
  {
    label: "Subtopics",
    free: "2 on each level",
    pro: "Every subtopic unlocked",
  },
  {
    label: "Total free content",
    free: "6 subtopics in total",
    pro: "Full website access",
  },
  {
    label: "Micro lessons",
    free: "3 only",
    pro: "Unlimited access",
  },
  {
    label: "Best for",
    free: "Trying the platform",
    pro: "Serious exam preparation",
  },
];

export default function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-sky-400/20 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 pb-20 pt-32 sm:px-8">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Unlock the full JoineryTheory revision system with Pro
              </h1>
              <p className="max-w-2xl text-base text-[var(--muted)] sm:text-lg">
                The free plan gives learners a good first look, but Pro is where the
                real progress happens. Upgrade to unlock every subtopic, every level,
                and all of the micro lessons so you can revise without hitting limits.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/account">
                Upgrade to Pro
              </Link>
              <Link className="btn-secondary" href="/">
                Keep Learning
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { value: "6", label: "Free subtopics total" },
                { value: "3", label: "Free micro lessons" },
                { value: "All", label: "Content unlocked with Pro" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[var(--radius-16)] border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="gradient-border rounded-[var(--radius-24)]">
            <div className="glass-card bg-noise rounded-[var(--radius-24)] p-6 shadow-large">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                    Why Pro stands out
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Revise without the stop-start feeling
                  </h2>
                </div>
                <span className="rounded-full border border-teal-300/30 bg-teal-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                  best value
                </span>
              </div>

              <div className="mt-6 space-y-4 text-sm text-[var(--muted)]">
                <div className="rounded-2xl border border-white/10 bg-[color-mix(in_srgb,var(--surface)_84%,transparent)] p-4">
                  Free is useful for sampling the platform, but it is intentionally
                  limited. Once you want to move properly through topics and build exam
                  confidence, Pro gives you the full path.
                </div>
                <div className="rounded-2xl border border-teal-400/20 bg-teal-500/10 p-4 text-teal-100">
                  Pro is built for learners who want complete coverage, more repetition,
                  and the freedom to revise every topic when they need it.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                  Free
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  A quick preview of the platform
                </h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white">
                limited
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
              {freePlanFeatures.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="gradient-border rounded-[var(--radius-24)]">
            <div className="glass-card bg-noise rounded-[var(--radius-24)] p-6 shadow-large">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-teal-200">
                    Pro
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    The complete revision experience
                  </h2>
                </div>
                <span className="rounded-full border border-teal-300/30 bg-teal-400/10 px-3 py-1 text-sm font-semibold text-teal-200">
                  recommended
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
                {proPlanFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-2xl border border-teal-400/15 bg-teal-500/10 px-4 py-3 text-teal-50"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-4">
                <p className="text-sm text-sky-100">
                  If you want the best chance of covering the syllabus, Pro is
                  the plan that gives you everything in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card overflow-hidden p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                Compare plans
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Free gets you started. Pro helps you finish strong.
              </h2>
            </div>
            <Link className="btn-primary" href="/account">
              Upgrade to Pro
            </Link>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3 text-left">
              <thead>
                <tr className="text-sm text-[var(--muted)]">
                  <th className="px-4 py-2 font-medium">Feature</th>
                  <th className="px-4 py-2 font-medium">Free</th>
                  <th className="px-4 py-2 font-medium text-teal-200">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td className="rounded-l-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm font-medium text-white">
                      {row.label}
                    </td>
                    <td className="border-y border-white/8 bg-white/5 px-4 py-4 text-sm text-[var(--muted)]">
                      {row.free}
                    </td>
                    <td className="rounded-r-2xl border border-teal-400/20 bg-teal-500/10 px-4 py-4 text-sm font-medium text-teal-50">
                      {row.pro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
