import Link from "next/link";

import Navbar from "@/components/Navbar";

type QuizLayoutProps = {
  children: React.ReactNode;
};

export default function QuizLayout({ children }: QuizLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <div className="pt-32">
        <div className="mx-auto flex max-w-6xl justify-end px-5 sm:px-8">
          <Link
            href="/quizzes/history"
            className="text-sm text-[var(--muted)] transition hover:text-white"
          >
            History
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
