"use client";

import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LessonsPage() {
  const router = useRouter();
  const [level, setLevel] = useState("Level 1");
  const [introMode, setIntroMode] = useState<
    null | "mixed" | "level1" | "level2" | "level3"
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedQty, setSelectedQty] = useState<number | null>(null);

  const defaultDescription = "Bite-sized lessons with exam-ready quizzes.";
  const topics: Record<string, { title: string; description: string }[]> = {
    "Level 1": [
      { title: "Health and Safety", description: defaultDescription },
      { title: "Principles of Building", description: defaultDescription },
      { title: "Hand Tools", description: defaultDescription },
      { title: "Power Tools", description: defaultDescription },
      { title: "Woodworking Joints", description: defaultDescription },
      { title: "Ironmongery and Fixings", description: defaultDescription },
    ],
    "Level 2": [
      { title: "Setting Out", description: defaultDescription },
      { title: "Structural Carpentry", description: defaultDescription },
      { title: "First Fix", description: defaultDescription },
      { title: "Second Fix", description: defaultDescription },
      { title: "Materials", description: defaultDescription },
      { title: "Site Practice", description: defaultDescription },
    ],
    "Level 3": [
      { title: "Advanced Roofing", description: defaultDescription },
      { title: "Complex Structures", description: defaultDescription },
      { title: "Project Planning", description: defaultDescription },
      { title: "Supervision", description: defaultDescription },
      { title: "Regulations", description: defaultDescription },
      { title: "Sustainability", description: defaultDescription },
    ],
    "Mixed Level Multiple Choice": [
      { title: "Randomised Questions", description: defaultDescription },
      { title: "Weak Areas", description: defaultDescription },
      { title: "Timed Mock", description: defaultDescription },
      { title: "Quick 10", description: defaultDescription },
      { title: "Full Practice Exam", description: defaultDescription },
    ],
  };
  const introText =
    "You will answer 50 questions in 1 hour. Questions are drawn from every level and every subtopic to simulate the real assessment.";
  const introTitle =
    introMode === "mixed"
      ? "Mixed level mock exam"
      : introMode === "level2"
        ? "Level 2 multiple choice"
        : introMode === "level3"
          ? "Level 3 multiple choice"
          : "Level 1 multiple choice";

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <h1 className="text-4xl font-semibold text-white">Joinery Questions</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Choose your level to explore topics.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {Object.keys(topics).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => {
                setLevel(l);
                setIntroMode(
                  l === "Mixed Level Multiple Choice" ? "mixed" : null
                );
              }}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                level === l
                  ? "bg-emerald-500/15 border-emerald-400 text-emerald-300"
                  : "border-white/10 text-white hover:border-white/20"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {introMode ? (
            <div className="mt-12 flex justify-center">
            <div className="glass-card w-full max-w-xl rounded-[var(--radius-24)] border border-white/10 p-8 text-center">
              <h2 className="text-2xl font-semibold text-white">
                {introTitle}
              </h2>
              <p className="mt-4 text-sm text-[var(--muted)]">
                {introMode === "level1"
                  ? "You will have 1 hour to answer 50 questions. Questions are drawn from every subtopic under Level 1 to simulate the real assessment."
                  : introMode === "level2"
                    ? "You will have 1 hour to answer 50 questions. Questions are drawn from every subtopic under Level 2 to simulate the real assessment."
                    : introMode === "level3"
                      ? "You will have 1 hour to answer 50 questions. Questions are drawn from every subtopic under Level 3 to simulate the real assessment."
                      : introText}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIntroMode(null);
                    setLevel("Level 1");
                  }}
                  className="btn-secondary"
                >
                  Back to revising
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // Open the question quantity modal for Level 1 multiple choice
                    setSelectedTopic("Level 1 multiple choice");
                    setSelectedQty(null);
                    setIsModalOpen(true);
                    setIntroMode(null);
                  }}
                  className="btn-primary"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {level !== "Mixed Level Multiple Choice" && (
              <button
                type="button"
                onClick={() => {
                  if (level === "Level 1") {
                    setIntroMode("level1");
                  } else if (level === "Level 2") {
                    setIntroMode("level2");
                  } else if (level === "Level 3") {
                    setIntroMode("level3");
                  }
                }}
                className="glass-card rounded-[var(--radius-16)] border border-white/10 p-5 text-left transition hover:-translate-y-1 hover:border-white/25 sm:col-span-2 lg:col-span-3"
              >
                <h3 className="text-lg font-semibold text-white">
                  {level} multiple choice
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Random questions from all subtopics below to create a
                  realistic exam.
                </p>
              </button>
            )}
            {topics[level].map((topic) => (
              <button
                key={topic.title}
                type="button"
                onClick={() => {
                  if (level === "Level 1") {
                    setSelectedTopic(topic.title);
                    setSelectedQty(null);
                    setIsModalOpen(true);
                  }
                }}
                className="glass-card rounded-[var(--radius-16)] border border-white/10 p-5 text-left transition hover:-translate-y-1 hover:border-white/25"
              >
                <h3 className="text-lg font-semibold text-white">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {topic.description}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-5"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="glass-card w-full max-w-md rounded-[var(--radius-24)] border border-white/10 p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Topic: {selectedTopic}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Select below the quantity of questions you want to answer
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[5, 10, 25, 50].map((qty) => (
                <button
                  key={qty}
                  type="button"
                  onClick={() => setSelectedQty(qty)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                    selectedQty === qty
                      ? "border-emerald-400 bg-emerald-500/15 text-emerald-300"
                      : "border-white/10 bg-white/5 text-white hover:border-white/20"
                  }`}
                >
                  {qty}
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!selectedQty || !selectedTopic}
                onClick={() => {
                  if (!selectedTopic || !selectedQty) {
                    return;
                  }
                  const topicParam = encodeURIComponent(selectedTopic);
                  router.push(
                    `/quizzes/topic?level=1&topic=${topicParam}&count=${selectedQty}&new=1`
                  );
                  setIsModalOpen(false);
                }}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
