import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[rgba(11,18,32,0.82)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-5 py-10 text-center sm:px-8">
        <div className="text-xl font-semibold text-white">JoineryTheory</div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted)]">
          <Link className="hover:text-white" href="/terms">
            Terms
          </Link>
          <Link className="hover:text-white" href="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-white" href="/refunds">
            Refunds
          </Link>
          <Link className="hover:text-white" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
