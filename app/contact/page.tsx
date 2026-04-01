import Navbar from "@/components/Navbar";

export default function ContactPage() {
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
            Support
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Contact</h1>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Reach out for account, billing, or learning support.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Email
              </p>
              <p className="mt-2 text-white">joinerytheory@gmail.com</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Response time
              </p>
              <p className="mt-2 text-white">Within 1-2 business days</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">
            Include your account email, order date (if billing related), and a
            short description of the issue so we can resolve it quickly.
          </p>
        </section>
      </main>
    </div>
  );
}
