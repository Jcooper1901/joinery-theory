import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-teal-400/25 blur-[120px]" />
        <div className="absolute -top-36 right-0 h-[420px] w-[420px] rounded-full bg-sky-400/20 blur-[130px]" />
      </div>

      <Navbar />

      <main className="relative mx-auto w-full max-w-4xl px-5 pb-20 pt-32 sm:px-8">
        <section className="glass-card rounded-[var(--radius-24)] p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Terms</h1>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Last updated: February 20, 2026
          </p>

          <div className="mt-6 space-y-5 text-sm leading-relaxed text-[var(--muted)]">
            <p>
              By using JoineryTheory, you agree to use the service for lawful
              learning purposes and to keep your account details secure.
            </p>
            <p>
              Content is provided for revision support. You are responsible for
              how you apply the material in practice and assessment settings.
            </p>
            <p>
              We may update lessons, quizzes, and pricing over time. Continued
              use of the platform means you accept those updates.
            </p>
            <p>
              If you have a question about these terms, contact us via the{" "}
              <Link className="text-white hover:underline" href="/contact">
                Contact page
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
