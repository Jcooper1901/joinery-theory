import Navbar from "@/components/Navbar";

export default function RefundsPage() {
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
            Billing
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Refund Policy
          </h1>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Last updated: February 20, 2026
          </p>

          <div className="mt-6 space-y-5 text-sm leading-relaxed text-[var(--muted)]">
            <p>
              If you were charged in error, contact us and we will review the
              transaction promptly.
            </p>
            <p>
              Subscription cancellations stop future renewals. Partial-period
              refunds are reviewed case by case.
            </p>
            <p>
              Approved refunds are returned to the original payment method.
              Processing times depend on your card provider or bank.
            </p>
            <p>
              For help with refunds, use the Contact page with your account
              email and payment date.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
