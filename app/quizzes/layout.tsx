import Navbar from "@/components/Navbar";

type QuizLayoutProps = {
  children: React.ReactNode;
};

export default function QuizLayout({ children }: QuizLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <div className="pt-32">{children}</div>
    </div>
  );
}
