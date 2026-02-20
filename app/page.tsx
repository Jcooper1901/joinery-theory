"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { level1Lessons } from "@/app/micro-lessons/lessons.level1";

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
    });

    return () => unsub();
  }, []);
  const options = [
    "Length and width",
    "Width and depth",
    "Height and depth",
    "Volume and area",
  ];
  const correctIndex = 0;
  const revealed = selected !== null;
  const sampleLesson = {
    id: "types-of-drawings",
    title: "2D and 3D drawings",
    topic: "Principles of building construction, information and communication",
    topicOrder: 1,
    keywords: ["2D", "3D", "visualisation"],
    examFocus: [
      "Recognise the difference between 2D and 3D drawings",
    ],
    keyPoints: [
      "2D drawings show length and width.",
      "3D drawings include depth as well.",
      "3D views can help visualise how parts fit together.",
    ],
    commonMistakes: [
      "Assuming a 2D drawing shows depth.",
    ],
    miniCheck: [
      {
        question: "What dimensions are shown in 2D?",
        answer: "Length and width.",
      },
      {
        question: "What extra dimension does 3D include?",
        answer: "Depth.",
      },
      {
        question: "Why are 3D drawings useful?",
        answer: "They help show how items will look and fit.",
      },
    ],
  };

  const [selected2, setSelected2] = useState<number | null>(null);
  const options2 = [
    "Replace specifications",
    "Show cost breakdowns",
    "Help visualise fitting",
    "Remove scaling issues",
  ];
  const correctIndex2 = 2;
  const revealed2 = selected2 !== null;
  const levels = ["Level 1", "Level 2", "Level 3"];
  const [levelIndex, setLevelIndex] = useState(0);
  const [levelVisible, setLevelVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setLevelVisible(false);
      setTimeout(() => {
        setLevelIndex((i) => (i + 1) % levels.length);
        setLevelVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[120px]" />
        <div className="absolute -top-36 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[130px]" />
      </div>

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 pb-20 pt-32 sm:px-8">
        <section className="flex flex-col gap-6">
          <p className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Revision that fits your schedule
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Pass your joinery exams with structured revision and real exam practice
          </h1>
          <p className="text-base text-[var(--muted)] sm:text-lg">
            Joinery theory erases the time spent reading trade books. With over 2,100 Micro lessons for short, focused, easy revision. Followed by exam-style questions, based on each lesson. with real-time tracking at the end of each mock exam, to
            sharpen weak areas before assessment day.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              className="btn-primary"
              href={authReady && user ? "/account" : "/login"}
            >
              Get started free
            </Link>
            <Link className="btn-secondary" href="/micro-lessons">
              Start learning
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--muted)]">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Built for apprentices
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Exam-style quizzes
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Micro lessons 
            </span>
          </div>
          <p className="mt-10 text-lg text-[var(--muted)]">
            <span className="block font-semibold text-[var(--primary)]">
              Preview of a micro lesson and quiz question.
            </span>
            Learn from a vast collection of micro lessons. When you feel confident, test your knowledge with quizzes that mirror the real exam.
          </p>
        </section>

        <section className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex h-full flex-col">
            {/* Micro lesson moved here (left column) */}
            <div className="h-full rounded-[var(--radius-16)] border border-white/10 bg-[rgba(6,8,12,0.6)] p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Micro lesson</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{sampleLesson.title}</h3>
              <p className="mt-3 text-base text-[var(--muted)]">{sampleLesson.topic}</p>
              <div className="mt-6">
                <p className="text-base font-semibold text-white">Key points</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-[var(--muted)]">
                  {sampleLesson.keyPoints.map((kp, idx) => (
                    <li key={idx}>{kp}</li>
                  ))}
                </ul>
              </div>

              {sampleLesson.commonMistakes && sampleLesson.commonMistakes.length > 0 ? (
                <div className="mt-6">
                  <p className="text-base font-semibold text-white">Common mistakes</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-[var(--muted)]">
                    {sampleLesson.commonMistakes.map((cm, i) => (
                      <li key={i}>{cm}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {sampleLesson.miniCheck && sampleLesson.miniCheck.length > 0 ? (
                <div className="mt-6">
                  <p className="text-sm uppercase tracking-[0.12em] text-[var(--muted)]">Mini check</p>
                  <div className="mt-3 grid gap-4">
                    {sampleLesson.miniCheck.map((mc, i) => (
                      <div key={i} className="rounded-2xl border border-white/6 bg-[rgba(8,12,24,0.4)] p-4">
                        <p className="text-base font-medium text-white">{mc.question}</p>
                        <p className="mt-2 text-base text-[var(--muted)]">Answer: <span className="text-white">{mc.answer}</span></p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="pt-0">

            <p className="mt-0 mb-1 text-sm font-semibold text-white"></p>
            <div className="gradient-border">
              <div className="glass-card bg-noise rounded-[var(--radius-24)] p-6 shadow-large">
              <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                <span>Quiz preview</span>
                <span>2D drawings</span>
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-[rgba(8,12,24,0.7)] p-4">
                  <p className="text-sm font-semibold text-white">
                    A 2D drawing represents which dimensions?
                  </p>
                  <div className="space-y-2">
                    {options.map((option, i) => {
                      const isCorrect = i === correctIndex;
                      const isSelected = selected === i;
                      const base =
                        "w-full text-left rounded-lg border px-3 py-2 transition disabled:cursor-not-allowed";
                      const neutral = "border-white/10 hover:border-white/20";
                      const correct =
                        "bg-emerald-500/15 border-emerald-400 text-emerald-300";
                      const wrong = "bg-red-500/10 border-red-400/60 text-red-300";
                      const wrongSelected =
                        "bg-red-500/15 border-red-400 text-red-200";

                      const cls = !revealed
                        ? `${base} ${neutral}`
                        : isCorrect
                          ? `${base} ${correct}`
                          : isSelected
                            ? `${base} ${wrongSelected}`
                            : `${base} ${wrong}`;

                      return (
                        <button
                          key={i}
                          type="button"
                          disabled={revealed}
                          onClick={() => setSelected(i)}
                          className={cls}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {revealed ? (
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="text-xs text-[var(--muted)] transition hover:text-white hover:underline"
                    >
                      Reset
                    </button>
                  ) : null}
                </div>
                {revealed ? (
                  <div className="rounded-2xl border border-white/10 bg-[rgba(6,12,20,0.8)] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        Explanation
                      </p>
                      {selected === correctIndex ? (
                        <span className="text-xs font-semibold text-emerald-300">
                          Correct
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-red-300">
                             Not quite. 2D drawings show length and width.
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-[var(--foreground)]">
                      2D plans show flat information.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Second quiz preview */}
          <div className="mt-25 pt-0">
            <div className="gradient-border">
              <div className="glass-card bg-noise rounded-[var(--radius-24)] p-6 shadow-large">
                <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                  <span>Quiz preview</span>
                  <span>3D drawings</span>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-[rgba(8,12,24,0.7)] p-4">
                    <p className="text-sm font-semibold text-white">
                      3D drawings are particularly helpful because they:
                    </p>
                    <div className="space-y-2">
                      {options2.map((option, i) => {
                        const isCorrect = i === correctIndex2;
                        const isSelected = selected2 === i;
                        const base =
                          "w-full text-left rounded-lg border px-3 py-2 transition disabled:cursor-not-allowed";
                        const neutral = "border-white/10 hover:border-white/20";
                        const correct =
                          "bg-emerald-500/15 border-emerald-400 text-emerald-300";
                        const wrong = "bg-red-500/10 border-red-400/60 text-red-300";
                        const wrongSelected =
                          "bg-red-500/15 border-red-400 text-red-200";

                        const cls = !revealed2
                          ? `${base} ${neutral}`
                          : isCorrect
                            ? `${base} ${correct}`
                            : isSelected
                              ? `${base} ${wrongSelected}`
                              : `${base} ${wrong}`;

                        return (
                          <button
                            key={i}
                            type="button"
                            disabled={revealed2}
                            onClick={() => setSelected2(i)}
                            className={cls}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {revealed2 ? (
                      <button
                        type="button"
                        onClick={() => setSelected2(null)}
                        className="text-xs text-[var(--muted)] transition hover:text-white hover:underline"
                      >
                        Reset
                      </button>
                    ) : null}
                  </div>
                  {revealed2 ? (
                    <div className="rounded-2xl border border-white/10 bg-[rgba(6,12,20,0.8)] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                          Explanation
                        </p>
                        {selected2 === correctIndex2 ? (
                          <span className="text-xs font-semibold text-emerald-300">
                            Correct
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-red-300">
                               Not quite. They help visualise fitting.
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-[var(--foreground)]">
                        They show how parts look and connect.
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          </div>
        </section>

        <section id="about" className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              A structured system for confident exam prep
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Learn the concept",
                copy: "Short lessons, Key points, Common mistakes and mini checks to help build knowledge.",
              },
              {
                title: "Practice like the exam",
                copy: "Timed quizzes and question styles that mirror real assessments.",
              },
              {
                title: "Improve weak areas",
                copy: "Strengthen your weak areas by taking micro lessons and quizzes on that corresponding topic.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-5 transition hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 12H18M12 6V18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="progress" className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Trusted by apprentices across the UK
              </h2>
            </div>
            <p className="text-sm text-[var(--muted)]">
              
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "1,700+ questions", sub: "Exam-style formats" },
                { label: "2,100+ micro-lessons", sub: "5-10 min bursts" },
                { label: "10-20 min sessions", sub: "Ideal daily learning" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-5 text-center">
                  <p className="text-2xl font-semibold text-white">{stat.label}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
            <div className="glass-card flex h-full flex-col justify-between p-6">
              <div>
                <p className="text-sm text-[var(--muted)]">Testimonial</p>
                <p className="mt-3 text-lg text-white">
                  “I finally felt confident walking into the exam. The micro lessons made revision so much easier.”
                </p>
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold text-white">Jamie R.</p>
                <p className="text-xs text-[var(--muted)]">Level 2 Joiner</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="gradient-border rounded-[var(--radius-24)]"
        >
          <div className="rounded-[var(--radius-24)] bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-blue-500/20 p-8 shadow-glow">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-white">
                  Start revising with a pro plan built for joiners
                </h2>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Sign up, start your free trial, and start revising today.
                </p>
              </div>
              <Link
                className="btn-primary"
                href={authReady && user ? "/account" : "/login"}
              >
                Start free trial
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[rgba(5,7,13,0.7)]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold text-white">JoineryTheory</div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Structured revision for confident joinery theory results.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>
                <a className="hover:text-white" href="#lessons">
                  Lessons
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#quizzes">
                  Quizzes
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#progress">
                  Progress
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>
                <a className="hover:text-white" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>
                <a className="hover:text-white" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 py-4 text-center text-xs text-[var(--muted)]">
          © 2026 JoineryTheory. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
