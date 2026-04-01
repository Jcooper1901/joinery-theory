"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import Navbar from "@/components/Navbar";
import { auth, db } from "@/lib/firebase";
import { isMicroLessonLevelLockedForFreePlan } from "@/lib/planAccess";
import { type MicroLesson } from "../lessons.level1";
import { level2Lessons } from "./lessons.level2";

type ProfileData = {
  role?: string;
  pro?: boolean;
};

const TOPICS = [
  { name: "Principles of construction", order: 1 },
  { name: "Structural carpentry", order: 2 },
  { name: "Non-structural carpentry prior to plaster", order: 3 },
  { name: "Non-structural carpentry after plaster", order: 4 },
  { name: "Architectural joinery", order: 5 },
  { name: "Timber technology and woodworking machinery", order: 6 },
  {
    name: "Architectural joinery component production, assembly and finishing",
    order: 7,
  },
  { name: "Health, safety and welfare in construction", order: 8 },
];

function normalizeTopicName(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replaceAll(",", "")
    .replace(/\s+/g, " ");
}

function toTopicKey(value: string) {
  return normalizeTopicName(value)
    .replaceAll("&", "and")
    .replaceAll(" to plastering", " to plaster")
    .replaceAll(" after plastering", " after plaster");
}

export default function MicroLessonsLevel2Page() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openTopic, setOpenTopic] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (nextUser) => {
      if (!nextUser) {
        router.replace("/account");
        return;
      }

      try {
        const profileRef = doc(db, "users", nextUser.uid);
        const snapshot = await getDoc(profileRef);
        const profile = snapshot.exists() ? (snapshot.data() as ProfileData) : null;
        const hasPro = Boolean(profile?.pro || profile?.role === "pro");

        if (!hasPro && isMicroLessonLevelLockedForFreePlan("2")) {
          router.replace("/account");
        }
      } catch (error) {
        console.error("Unable to load plan access", error);
        router.replace("/account");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const lessons = useMemo(() => {
    const cleaned = level2Lessons.filter((lesson) => lesson.title.trim());
    if (!query.trim()) {
      return cleaned;
    }
    const q = query.toLowerCase();
    return cleaned.filter((lesson) => {
      const inTitle = lesson.title.toLowerCase().includes(q);
      const inKeywords = lesson.keywords.some((kw) => kw.toLowerCase().includes(q));
      return inTitle || inKeywords;
    });
  }, [query]);

  const selectedLesson: MicroLesson | undefined = useMemo(() => {
    if (selectedId) {
      return lessons.find((lesson) => lesson.id === selectedId) ?? lessons[0];
    }
    return lessons[0];
  }, [lessons, selectedId]);

  const grouped = useMemo(() => {
    const baseLessons = level2Lessons.filter((lesson) => lesson.title.trim());
    const topicLookup = new Map(TOPICS.map((topic) => [toTopicKey(topic.name), topic.name]));

    const getCanonicalTopic = (topic: string) => topicLookup.get(toTopicKey(topic)) ?? topic;

    const baseByTopic = new Map<string, MicroLesson[]>();
    baseLessons.forEach((lesson) => {
      const canonicalTopic = getCanonicalTopic(lesson.topic);
      const existing = baseByTopic.get(canonicalTopic) ?? [];
      baseByTopic.set(canonicalTopic, [...existing, { ...lesson, topic: canonicalTopic }]);
    });

    const filteredByTopic = new Map<string, MicroLesson[]>();
    [...lessons]
      .sort((a, b) => a.title.localeCompare(b.title))
      .forEach((lesson) => {
        const canonicalTopic = getCanonicalTopic(lesson.topic);
        const existing = filteredByTopic.get(canonicalTopic) ?? [];
        filteredByTopic.set(canonicalTopic, [...existing, { ...lesson, topic: canonicalTopic }]);
      });

    return TOPICS.map((topic) => ({
      topic: topic.name,
      topicOrder: topic.order,
      allLessons: baseByTopic.get(topic.name) ?? [],
      lessons: filteredByTopic.get(topic.name) ?? [],
    }));
  }, [lessons]);

  const selectedIndex = useMemo(() => {
    if (!selectedLesson) {
      return -1;
    }
    return lessons.findIndex((lesson) => lesson.id === selectedLesson.id);
  }, [lessons, selectedLesson]);
  const safeIndex = selectedIndex < 0 ? 0 : selectedIndex;
  const isFirstLesson = lessons.length === 0 || safeIndex === 0;
  const isLastLesson = lessons.length === 0 || safeIndex >= lessons.length - 1;

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-20 pt-32 sm:px-8">
        <div>
          <Link
            href="/micro-lessons"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--muted)] transition hover:border-white/20 hover:text-white"
          >
            <span aria-hidden="true">←</span>
            <span>Back to levels</span>
          </Link>
        </div>

        <header className="space-y-2">
          <h1 className="text-4xl font-semibold text-white">Micro Lessons</h1>
          <p className="text-sm text-[var(--muted)] sm:text-base">
            Short revision notes built for Level 2 joinery theory.
          </p>
        </header>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-md">
            <label className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Search lessons
            </label>
            <div className="mt-2">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title or keyword"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition focus:border-teal-400/60"
              />
            </div>
          </div>

          <div className="w-full sm:hidden">
            <label className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Select lesson
            </label>
            <select
              value={selectedLesson?.id ?? ""}
              onChange={(event) => setSelectedId(event.target.value)}
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white [color-scheme:dark]"
            >
              {lessons.map((lesson) => (
                <option
                  key={lesson.id}
                  value={lesson.id}
                  className="bg-slate-900 text-white"
                >
                  {lesson.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="glass-card hidden max-h-[520px] flex-col gap-3 overflow-auto rounded-[var(--radius-16)] border border-white/10 p-4 lg:flex">
            {grouped.map((group) => (
              <div key={group.topic} className="space-y-2">
                <button
                  type="button"
                  onClick={() =>
                    setOpenTopic(openTopic === group.topic ? null : group.topic)
                  }
                  className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-left text-sm transition ${
                    openTopic === group.topic
                      ? "border-teal-400/60 bg-teal-500/10 text-teal-200"
                      : "border-white/10 text-white hover:border-white/20"
                  }`}
                  aria-expanded={openTopic === group.topic}
                >
                  <span>{group.topic}</span>
                  {group.allLessons.length === 0 ? (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-[var(--muted)]">
                      Coming soon
                    </span>
                  ) : (
                    <span className="text-xs text-[var(--muted)]">
                      {openTopic === group.topic ? "-" : "+"}
                    </span>
                  )}
                </button>
                {openTopic === group.topic ? (
                  <div className="space-y-2 pl-2">
                    {group.allLessons.length === 0 ? (
                      <p className="text-xs text-[var(--muted)]">
                        No lessons added yet.
                      </p>
                    ) : group.lessons.length === 0 ? (
                      <p className="text-xs text-[var(--muted)]">No matches.</p>
                    ) : (
                      group.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          type="button"
                          onClick={() => {
                            setSelectedId(lesson.id);
                            setOpenTopic(lesson.topic);
                          }}
                          className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                            selectedLesson?.id === lesson.id
                              ? "border-teal-400/60 bg-teal-500/10 text-teal-200"
                              : "border-white/10 text-white hover:border-white/20"
                          }`}
                        >
                          {lesson.title}
                        </button>
                      ))
                    )}
                  </div>
                ) : null}
              </div>
            ))}
          </aside>

          <section
            id="lesson-content"
            className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6 sm:p-8"
          >
            {selectedLesson ? (
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Micro lesson
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                    {selectedLesson.title}
                  </h2>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h3 className="text-sm font-semibold text-white">Exam Focus</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                      {selectedLesson.examFocus.map((item, index) => (
                        <li key={`${selectedLesson.id}-exam-${index}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h3 className="text-sm font-semibold text-white">Key Points</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                      {selectedLesson.keyPoints.map((item, index) => (
                        <li key={`${selectedLesson.id}-key-${index}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="text-sm font-semibold text-white">Common Mistakes</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                    {selectedLesson.commonMistakes.map((item, index) => (
                      <li key={`${selectedLesson.id}-mistake-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>

                {selectedLesson.miniCheck && selectedLesson.miniCheck.length > 0 ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h3 className="text-sm font-semibold text-white">Mini Check</h3>
                    <div className="mt-3 space-y-3 text-sm text-[var(--muted)]">
                      {selectedLesson.miniCheck.map((item, index) => (
                        <div key={`${selectedLesson.id}-mini-${index}`}>
                          <p className="text-white">
                            Q{index + 1}: {item.question}
                          </p>
                          <p className="text-[var(--muted)]">A: {item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    disabled={isFirstLesson}
                    onClick={() => {
                      const next = lessons[safeIndex - 1];
                      if (!next) {
                        return;
                      }
                      setSelectedId(next.id);
                      document
                        .getElementById("lesson-content")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="btn-secondary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={isLastLesson}
                    onClick={() => {
                      const next = lessons[safeIndex + 1];
                      if (!next) {
                        return;
                      }
                      setSelectedId(next.id);
                      document
                        .getElementById("lesson-content")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="btn-secondary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-sm text-[var(--muted)]">
                No lesson selected.
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
