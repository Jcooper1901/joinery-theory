"use client";

import Navbar from "@/components/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { getFreeTopicsForLevel, isTopicLockedForFreePlan } from "@/lib/planAccess";

type ProfileData = {
  role?: string;
  pro?: boolean;
};

function LockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 10V7.5a4 4 0 1 1 8 0V10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="5"
        y="10"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function LessonsPage() {
  return (
    <Suspense fallback={<LessonsPageFallback />}>
      <LessonsPageContent />
    </Suspense>
  );
}

function LessonsPageFallback() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 pb-20 pt-32 sm:px-8">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-white/70" />
      </div>
    </div>
  );
}

function LessonsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [level, setLevel] = useState("Level 1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"quantity" | "testIntro">(
    "quantity"
  );
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedQty, setSelectedQty] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<"1" | "2" | "3" | "mixed" | null>(
    null
  );
  const [isPro, setIsPro] = useState(false);
  const [planReady, setPlanReady] = useState(false);

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
      { title: "Health And Safety", description: defaultDescription },
      { title: "Principles Of Construction", description: defaultDescription },
      { title: "Structural Carpentry", description: defaultDescription },
      { title: "Non-structural Carpentry Prior To Plastering", description: defaultDescription },
      { title: "Non-structural Carpentry After Plastering", description: defaultDescription },
      { title: "Timber Technology And Woodworking Machinery", description: defaultDescription },
      { title: "Planning and Preparation For Architectural Joinery", description: defaultDescription },
      { title: "Architectural Joinery Component Production, Assembly and Finishing", description: defaultDescription },
      
    ],
    "Level 3": [
      { title: "Health and Safety", description: defaultDescription },
      { title: "Planning and Pricing Construction Work", description: defaultDescription },
      { title: "Fixed and Transportable Machinery", description: defaultDescription },
      { title: "Constructing cut roofing", description: defaultDescription },
      { title: "Fitting Doors, Windows and their furnishings", description: defaultDescription },
      { title: "Manufacturing Curved Joinery", description: defaultDescription },
      { title: "Manufacturing Stairs with Turns", description: defaultDescription },
      { title: "Fixing Stairs with Turns", description: defaultDescription },
      { title: "Principles of Maintenance and Repair", description: defaultDescription },
    ],
    "Mixed Level Multiple Choice": [],
  };
  const levelParam =
    level === "Level 1"
      ? "1"
      : level === "Level 2"
        ? "2"
        : level === "Level 3"
        ? "3"
        : level === "Mixed Level Multiple Choice"
            ? "mixed"
            : null;
  const freeTopicsForCurrentLevel = levelParam ? getFreeTopicsForLevel(levelParam) : [];
  const multipleChoiceTopic =
    level === "Level 1"
      ? "Level 1 multiple choice"
      : level === "Level 2"
        ? "Level 2 multiple choice"
        : level === "Level 3"
        ? "Level 3 multiple choice"
      : level === "Mixed Level Multiple Choice"
        ? "Mixed Level Multiple Choice"
        : `${level} multiple choice`;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (nextUser) => {
      if (!nextUser) {
        setIsPro(false);
        setPlanReady(true);
        return;
      }

      try {
        const profileRef = doc(db, "users", nextUser.uid);
        const snapshot = await getDoc(profileRef);
        const profile = snapshot.exists() ? (snapshot.data() as ProfileData) : null;
        setIsPro(Boolean(profile?.pro || profile?.role === "pro"));
      } catch (error) {
        console.error("Unable to load plan access", error);
        setIsPro(false);
      } finally {
        setPlanReady(true);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const requestedLevel = searchParams.get("level");

    if (requestedLevel === "1") {
      setLevel("Level 1");
      return;
    }

    if (requestedLevel === "2") {
      setLevel("Level 2");
      return;
    }

    if (requestedLevel === "3") {
      setLevel("Level 3");
      return;
    }

    if (requestedLevel === "mixed") {
      setLevel("Mixed Level Multiple Choice");
    }
  }, [searchParams]);

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

  const handleLockedTopicClick = () => {
    setIsModalOpen(false);
    router.push("/account");
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <h1 className="text-4xl font-semibold text-white">Joinery Questions</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {isPro
            ? "Choose your level to explore topics."
            : "Free plan users can access the first 2 subtopics on each level. Upgrade to Pro to unlock the rest."}
        </p>
        {!isPro && planReady && freeTopicsForCurrentLevel.length > 0 ? (
          <p className="mt-2 text-xs text-teal-200">
            Free on this level: {freeTopicsForCurrentLevel.join(" and ")}.
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          {Object.keys(topics).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => {
                setLevel(l);
              }}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                level === l
                  ? "bg-teal-500/15 border-teal-400 text-teal-200"
                  : "border-white/10 text-white hover:border-white/20"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <button
            type="button"
            onClick={() => {
              if (!levelParam || !planReady) {
                return;
              }
              if (!isPro) {
                handleLockedTopicClick();
                return;
              }
              setModalType(
                level === "Level 1" ||
                  level === "Level 2" ||
                  level === "Level 3" ||
                  level === "Mixed Level Multiple Choice"
                  ? "testIntro"
                  : "quantity"
              );
              setSelectedTopic(multipleChoiceTopic);
              setSelectedLevel(levelParam);
              setSelectedQty(null);
              setIsModalOpen(true);
            }}
            className={`glass-card rounded-[var(--radius-16)] border border-white/10 p-5 text-left transition sm:col-span-2 lg:col-span-3 ${
              levelParam && planReady
                ? isPro
                  ? "hover:-translate-y-1 hover:border-white/25"
                  : "border-teal-400/25 bg-teal-500/5"
                : "cursor-not-allowed opacity-75"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">
                {multipleChoiceTopic}
              </h3>
              {!isPro && planReady ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-200">
                  <LockIcon />
                  Pro
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {level === "Mixed Level Multiple Choice"
                ? "Random questions across Levels 1, 2 and 3."
                : "Random questions from all subtopics below to create a realistic exam."}
            </p>
            {!isPro && planReady ? (
              <p className="mt-3 text-xs text-teal-200">
                Upgrade to Pro to unlock full-level tests.
              </p>
            ) : null}
          </button>
          {topics[level].map((topic, index) => {
            const isLocked = !isPro && levelParam
              ? isTopicLockedForFreePlan(levelParam, topic.title)
              : false;

            return (
            <button
              key={topic.title}
              type="button"
              onClick={() => {
                if (!levelParam || !planReady) {
                  return;
                }
                if (isLocked) {
                  handleLockedTopicClick();
                  return;
                }
                setModalType("quantity");
                setSelectedTopic(topic.title);
                setSelectedLevel(levelParam);
                setSelectedQty(null);
                setIsModalOpen(true);
              }}
              className={`glass-card rounded-[var(--radius-16)] border border-white/10 p-5 text-left transition ${
                levelParam && planReady
                  ? isLocked
                    ? "border-white/8 opacity-90 hover:border-teal-400/30"
                    : "hover:-translate-y-1 hover:border-white/25"
                  : "cursor-not-allowed opacity-75"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {topic.title}
                  </h3>
                  {!isLocked ? (
                    !isPro && planReady && index < 2 ? (
                      <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-teal-200">
                        Free access
                      </p>
                    ) : null
                  ) : null}
                </div>
                {isLocked ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-200">
                    <LockIcon />
                    Locked
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {isLocked
                  ? "Upgrade to Pro to unlock this subtopic and every other question set on the website."
                  : topic.description}
              </p>
            </button>
          );
          })}
        </div>
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
            {modalType === "testIntro" ? (
              <>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Topic: {selectedTopic}
                </p>
                <h2 className="mt-3 text-lg font-semibold text-white">
                  {selectedLevel === "mixed"
                    ? "You have 1 hour to answer 50 multiple choice questions randomly selected across all levels"
                    : "You have 1 hour to answer 50 multiple choice questions randomly selected from the subtopics below"}
                </h2>
                <div className="mt-6 flex flex-wrap justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      router.push("/lessons");
                    }}
                    className="btn-secondary"
                  >
                    Continue Learning
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        selectedLevel === "mixed" &&
                        selectedTopic &&
                        selectedTopic.trim().toLowerCase() ===
                          "mixed level multiple choice"
                      ) {
                        setModalType("quantity");
                        return;
                      }
                      if (
                        selectedLevel === "3" &&
                        selectedTopic &&
                        selectedTopic.trim().toLowerCase() ===
                          "level 3 multiple choice"
                      ) {
                        const topicParam = encodeURIComponent(selectedTopic);
                        router.push(
                          `/quizzes/topic?level=3&topic=${topicParam}&count=50&new=1`
                        );
                        setIsModalOpen(false);
                      }
                      if (
                        selectedLevel === "2" &&
                        selectedTopic &&
                        selectedTopic.trim().toLowerCase() ===
                          "level 2 multiple choice"
                      ) {
                        const topicParam = encodeURIComponent(selectedTopic);
                        router.push(
                          `/quizzes/topic?level=2&topic=${topicParam}&count=50&new=1`
                        );
                        setIsModalOpen(false);
                      }
                      if (
                        selectedLevel === "1" &&
                        selectedTopic &&
                        selectedTopic.trim().toLowerCase() ===
                          "level 1 multiple choice"
                      ) {
                        const topicParam = encodeURIComponent(selectedTopic);
                        router.push(
                          `/quizzes/topic?level=1&topic=${topicParam}&count=50&new=1`
                        );
                        setIsModalOpen(false);
                      }
                    }}
                    className="btn-primary"
                  >
                    Take Test
                  </button>
                </div>
              </>
            ) : (
              <>
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
                          ? "border-sky-200 bg-gradient-to-r from-sky-300 to-cyan-200 text-[#03111f] shadow-[0_0_0_2px_rgba(186,230,253,0.45),0_14px_32px_rgba(96,165,250,0.32)]"
                          : "border-white/10 bg-white/5 text-white hover:border-sky-300/40 hover:bg-sky-500/10"
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
                    onClick={() => {
                      if (!selectedTopic || !selectedQty || !selectedLevel) {
                        return;
                      }
                      const topicParam = encodeURIComponent(selectedTopic);
                      router.push(
                        `/quizzes/topic?level=${selectedLevel}&topic=${topicParam}&count=${selectedQty}&new=1`
                      );
                      setIsModalOpen(false);
                    }}
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={!selectedQty || !selectedTopic || !selectedLevel}
                  >
                    Start
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
