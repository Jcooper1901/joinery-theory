"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import {
  level1HealthSafetyQuestions,
  MCQQuestion,
} from "../banks/level1.healthSafety";

type QuizSavedState = {
  version: 1;
  level: string;
  topic: string;
  count: number;
  savedAt: number;
  questions: MCQQuestion[];
  answers: Record<string, number>;
  flagged: Record<string, boolean> | string[];
  currentIndex: number;
  view: "quiz" | "review" | "result";
  startedAt: number | null;
  elapsedMs: number;
  score: number | null;
  finishedAt: number | null;
};

type QuizHistoryAttempt = {
  id: string;
  completedAt: number;
  level: string;
  topic: string;
  count: number;
  score: number;
  percent: number;
  passMark: number;
  durationMs: number;
  status?: "abandoned";
  questions: MCQQuestion[];
  answers: Record<string, number>;
  flaggedIds: string[];
  flagged?: Record<string, boolean> | string[];
};

function shuffleQuestions(items: MCQQuestion[]) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function formatElapsed(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  return `${mm}:${ss}`;
}

function Confetti({ show }: { show: boolean }) {
  const pieces = useMemo(() => {
    return Array.from({ length: 40 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      duration: 2.2 + Math.random() * 1.2,
      rotation: Math.random() * 360,
      size: 6 + Math.random() * 6,
    }));
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="absolute top-0 block opacity-90"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 1.6}px`,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confetti-fall ${piece.duration}s ${piece.delay}s linear forwards`,
            backgroundColor: [
              "#10b981",
              "#34d399",
              "#60a5fa",
              "#f59e0b",
              "#f87171",
            ][piece.id % 5],
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(380px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default function TopicQuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const levelParam = searchParams.get("level") ?? "";
  const topicParam = searchParams.get("topic") ?? "";
  const countParam = searchParams.get("count") ?? "10";
  const mode = searchParams.get("mode") ?? "";
  const attemptId = searchParams.get("attemptId") ?? "";
  const isNewAttempt = searchParams.get("new") === "1";

  const count = useMemo(() => {
    const parsed = Number.parseInt(countParam, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 10;
  }, [countParam]);

  const level = levelParam.trim();
  const topic = topicParam.trim();
  const isHistory = mode === "history";
  const storageKey = useMemo(
    () => `jt:quiz:${level}:${topic}:${count}`,
    [level, topic, count]
  );

  const isHealthSafety = useMemo(() => {
    const normalizedLevel = levelParam.trim().toLowerCase();
    const normalizedTopic = topicParam.trim().toLowerCase();
    return (
      (normalizedLevel === "1" || normalizedLevel === "level 1") &&
      normalizedTopic === "health and safety"
    );
  }, [levelParam, topicParam]);

  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [view, setView] = useState<"quiz" | "review" | "result">("quiz");
  const [score, setScore] = useState<number | null>(null);
  const [lastQuizIndex, setLastQuizIndex] = useState(0);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [finishedAt, setFinishedAt] = useState<number | null>(null);
  const [historyMissing, setHistoryMissing] = useState(false);
  const [attemptNotFound, setAttemptNotFound] = useState(false);
  const [legacyAttempt, setLegacyAttempt] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState<string | null>(null);
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [historyPercent, setHistoryPercent] = useState<number | null>(null);
  const [resumeData, setResumeData] = useState<QuizSavedState | null>(null);
  const [resumeStatus, setResumeStatus] = useState<
    "checking" | "prompt" | "ready"
  >("checking");
  const passMark = 75;

  const clearSavedSession = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.removeItem(storageKey);
  }, [storageKey]);

  const appendHistoryAttempt = useCallback(
    (nextScore: number, percent: number) => {
      if (typeof window === "undefined") {
        return;
      }
      if (isHistory) {
        return;
      }
      const answersRecord =
        answers instanceof Map
          ? Object.fromEntries(answers.entries())
          : answers;
      const flaggedIds =
        flagged instanceof Set
          ? Array.from(flagged)
          : Array.isArray(flagged)
            ? flagged
            : Object.keys(flagged).filter((id) => flagged[id]);
      const attempt: QuizHistoryAttempt = {
        id: window.crypto.randomUUID(),
        completedAt: Date.now(),
        level,
        topic,
        count: Number(count),
        score: nextScore,
        percent,
        passMark,
        durationMs: elapsedMs,
        questions: questions.map((question) => ({ ...question })),
        answers: answersRecord,
        flaggedIds,
      };
      const key = "jt:quizHistory";
      let history: QuizHistoryAttempt[] = [];
      const stored = window.localStorage.getItem(key);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as QuizHistoryAttempt[];
          history = Array.isArray(parsed) ? parsed : [];
        } catch {
          history = [];
        }
      }
      const updated = [attempt, ...history].slice(0, 50);
      window.localStorage.setItem(key, JSON.stringify(updated));
    },
    [
      answers,
      count,
      elapsedMs,
      flagged,
      isHistory,
      level,
      passMark,
      questions,
      topic,
    ]
  );

  const persistSession = useCallback(
    (nextFinishedAt?: number | null) => {
      if (typeof window === "undefined") {
        return;
      }
      if (isHistory) {
        return;
      }
      if (!isHealthSafety || questions.length === 0) {
        return;
      }
      const payload: QuizSavedState = {
        version: 1,
        level,
        topic,
        count,
        savedAt: Date.now(),
        questions: questions.map((question) => ({ ...question })),
        answers,
        flagged,
        currentIndex,
        view,
        startedAt,
        elapsedMs,
        score,
        finishedAt: nextFinishedAt ?? finishedAt,
      };
      window.localStorage.setItem(storageKey, JSON.stringify(payload));
    },
    [
      answers,
      count,
      currentIndex,
      elapsedMs,
      finishedAt,
      flagged,
      isHistory,
      isHealthSafety,
      level,
      questions,
      score,
      startedAt,
      storageKey,
      topic,
      view,
    ]
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (isHistory) {
      setResumeData(null);
      setResumeStatus("ready");
      return;
    }
    if (isNewAttempt) {
      setResumeData(null);
      setResumeStatus("ready");
      const savedRaw = window.localStorage.getItem(storageKey);
      if (savedRaw) {
        try {
          const saved = JSON.parse(savedRaw) as QuizSavedState & {
            flaggedIds?: string[];
          };
          const savedQuestions = Array.isArray(saved.questions)
            ? saved.questions
            : [];
          const savedAnswers = saved.answers ?? {};
          const answerRecord =
            savedAnswers instanceof Map
              ? Object.fromEntries(savedAnswers.entries())
              : savedAnswers;
          const savedFlaggedIds = Array.isArray(saved.flaggedIds)
            ? saved.flaggedIds
            : saved.flagged instanceof Set
              ? Array.from(saved.flagged)
              : Array.isArray(saved.flagged)
                ? saved.flagged
                : saved.flagged && typeof saved.flagged === "object"
                  ? Object.keys(saved.flagged).filter(
                      (id) => (saved.flagged as Record<string, boolean>)[id]
                    )
                  : [];
          const totalQuestions = savedQuestions.length || Number(count) || 0;
          const computedScore = savedQuestions.reduce((total, question) => {
            return total +
              (answerRecord?.[question.id] === question.correctIndex ? 1 : 0);
          }, 0);
          const percent = totalQuestions
            ? Math.round((computedScore / totalQuestions) * 100)
            : 0;
          const durationMs =
            saved.elapsedMs ??
            (saved.startedAt ? Date.now() - saved.startedAt : 0);
          const historyKey = "jt:quizHistory";
          const attempt: QuizHistoryAttempt = {
            id: window.crypto.randomUUID(),
            completedAt: Date.now(),
            level,
            topic,
            count: Number(count),
            score: computedScore,
            percent,
            passMark,
            durationMs,
            status: "abandoned",
            questions: savedQuestions,
            answers: answerRecord,
            flaggedIds: savedFlaggedIds,
          };
          const historyRaw = window.localStorage.getItem(historyKey);
          let history: QuizHistoryAttempt[] = [];
          if (historyRaw) {
            try {
              const parsedHistory = JSON.parse(historyRaw) as QuizHistoryAttempt[];
              history = Array.isArray(parsedHistory) ? parsedHistory : [];
            } catch {
              history = [];
            }
          }
          const updatedHistory = [attempt, ...history].slice(0, 50);
          window.localStorage.setItem(historyKey, JSON.stringify(updatedHistory));
        } catch {
          // Ignore invalid saved sessions.
        }
        window.localStorage.removeItem(storageKey);
      }
      if (isHealthSafety) {
        const shuffled = shuffleQuestions(level1HealthSafetyQuestions);
        setQuestions(shuffled.slice(0, count));
        setCurrentIndex(0);
        setAnswers({});
        setFlagged({});
        setView("quiz");
        setScore(null);
        setStartedAt(null);
        setElapsedMs(0);
        setIsRunning(false);
        setShowConfetti(false);
        setFinishedAt(null);
      }
      return;
    }
    if (!isHealthSafety) {
      setResumeData(null);
      setResumeStatus("ready");
      return;
    }
    const savedRaw = window.localStorage.getItem(storageKey);
    if (!savedRaw) {
      setResumeData(null);
      setResumeStatus("ready");
      return;
    }
    try {
      const parsed = JSON.parse(savedRaw) as QuizSavedState;
      const matches =
        parsed &&
        parsed.version === 1 &&
        parsed.level === level &&
        parsed.topic === topic &&
        parsed.count === count;
      if (matches && parsed.view !== "result") {
        setResumeData(parsed);
        setResumeStatus("prompt");
        return;
      }
    } catch {
      // Ignore malformed storage entries and allow a fresh start.
    }
    setResumeData(null);
    setResumeStatus("ready");
  }, [count, isHealthSafety, isHistory, isNewAttempt, level, storageKey, topic]);

  useEffect(() => {
    if (!isHistory) {
      setHistoryMissing(false);
      setAttemptNotFound(false);
      setLegacyAttempt(false);
      setHistoryLoading(false);
      setHistoryError(null);
      setFlaggedIds([]);
      setHistoryPercent(null);
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    console.log("[HISTORY] mode", isHistory, "attemptId", attemptId);
    setHistoryLoading(true);
    setHistoryError(null);
    setAttemptNotFound(false);
    setLegacyAttempt(false);
    try {
      if (!attemptId) {
        throw new Error("Attempt not found.");
      }
      const raw =
        window.localStorage.getItem("jt:quizHistory") ||
        window.localStorage.getItem("quizHistory") ||
        "[]";
      const parsed = JSON.parse(raw) as unknown;
      const list = Array.isArray(parsed)
        ? parsed
        : Array.isArray((parsed as { attempts?: unknown[] })?.attempts)
          ? (parsed as { attempts: unknown[] }).attempts
          : Array.isArray((parsed as { items?: unknown[] })?.items)
            ? (parsed as { items: unknown[] }).items
            : [];
      const attempt = list.find((item: any) =>
        item?.id === attemptId ||
        item?.attemptId === attemptId ||
        item?.attempt_id === attemptId ||
        item?.sessionId === attemptId
      );
      const questions =
        Array.isArray(attempt?.questions)
          ? attempt.questions
          : Array.isArray(attempt?.data?.questions)
            ? attempt.data.questions
            : Array.isArray(attempt?.session?.questions)
              ? attempt.session.questions
              : [];
      const answers =
        attempt?.answers && typeof attempt.answers === "object"
          ? attempt.answers
          : attempt?.data?.answers && typeof attempt.data.answers === "object"
            ? attempt.data.answers
            : attempt?.session?.answers &&
                typeof attempt.session.answers === "object"
              ? attempt.session.answers
              : {};
      const flaggedIds =
        Array.isArray(attempt?.flaggedIds)
          ? attempt.flaggedIds
          : Array.isArray(attempt?.data?.flaggedIds)
            ? attempt.data.flaggedIds
            : Array.isArray(attempt?.session?.flaggedIds)
              ? attempt.session.flaggedIds
              : attempt?.flagged && typeof attempt.flagged === "object"
                ? Object.keys(attempt.flagged).filter((id) =>
                    Boolean(attempt.flagged[id])
                  )
                : attempt?.data?.flagged &&
                    typeof attempt.data.flagged === "object"
                  ? Object.keys(attempt.data.flagged).filter((id) =>
                      Boolean(attempt.data.flagged[id])
                    )
                  : [];
      console.log(
        "[HISTORY] found attempt?",
        Boolean(attempt),
        "questions",
        questions.length
      );
      if (!attempt || questions.length === 0) {
        throw new Error("Attempt not found.");
      }
      const computedScore =
        Number(attempt?.score ?? 0) ||
        questions.reduce((total: number, question: MCQQuestion) => {
          return total +
            (answers?.[question.id] === question.correctIndex ? 1 : 0);
        }, 0);
      const percent = Number(
        attempt?.percent ??
          (questions.length
            ? Math.round((computedScore / questions.length) * 100)
            : 0)
      );
      setQuestions(questions as MCQQuestion[]);
      setAnswers(answers as Record<string, number>);
      setFlaggedIds(flaggedIds as string[]);
      setElapsedMs(Number(attempt?.durationMs ?? attempt?.elapsedMs ?? 0));
      setScore(Number(computedScore ?? 0));
      setHistoryPercent(Number(percent));
      setCurrentIndex(0);
      setView("result");
      setIsRunning(false);
      setShowConfetti(false);
      setFinishedAt(attempt?.completedAt ?? null);
    } catch (error) {
      setHistoryError(
        error instanceof Error ? error.message : "Could not load this attempt."
      );
      setQuestions([]);
      setAnswers({});
      setFlaggedIds([]);
    } finally {
      setHistoryLoading(false);
    }
  }, [attemptId, isHistory]);

  useEffect(() => {
    if (!isHealthSafety) {
      setQuestions([]);
      setCurrentIndex(0);
      setAnswers({});
      setFlagged({});
      setView("quiz");
      setScore(null);
      setStartedAt(null);
      setElapsedMs(0);
      setIsRunning(false);
      setShowConfetti(false);
      setFinishedAt(null);
      return;
    }
    if (isHistory) {
      return;
    }
    const shuffled = shuffleQuestions(level1HealthSafetyQuestions);
    setQuestions(shuffled.slice(0, count));
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    setView("quiz");
    setScore(null);
    setStartedAt(null);
    setElapsedMs(0);
    setIsRunning(false);
    setShowConfetti(false);
    setFinishedAt(null);
  }, [count, isHealthSafety, isHistory]);

  useEffect(() => {
    if (isHistory) {
      return;
    }
    if (!isRunning || !startedAt) {
      return;
    }
    const interval = window.setInterval(() => {
      setElapsedMs(Date.now() - startedAt);
    }, 250);
    return () => window.clearInterval(interval);
  }, [isRunning, startedAt]);

  useEffect(() => {
    if (isHistory) {
      return;
    }
    if (view !== "result") {
      return;
    }
    const total = questions.length || 1;
    const percent = ((score ?? 0) / total) * 100;
    if (percent >= passMark) {
      setShowConfetti(true);
      const timeout = window.setTimeout(() => setShowConfetti(false), 3000);
      return () => window.clearTimeout(timeout);
    }
    setShowConfetti(false);
  }, [isHistory, passMark, score, questions.length, view]);

  useEffect(() => {
    if (isHistory) {
      return;
    }
    if (view !== "result" || finishedAt) {
      return;
    }
    const timestamp = Date.now();
    setFinishedAt(timestamp);
    if (resumeStatus === "ready") {
      persistSession(timestamp);
    }
  }, [finishedAt, isHistory, persistSession, resumeStatus, view]);

  useEffect(() => {
    if (resumeStatus !== "ready" || isHistory) {
      return;
    }
    persistSession();
  }, [isHistory, persistSession, resumeStatus]);

  const handleResume = () => {
    if (isHistory) {
      return;
    }
    if (!resumeData) {
      setResumeStatus("ready");
      return;
    }
    const restoredFlagged = Array.isArray(resumeData.flagged)
      ? resumeData.flagged.reduce<Record<string, boolean>>((acc, id) => {
          acc[id] = true;
          return acc;
        }, {})
      : resumeData.flagged ?? {};
    setQuestions(resumeData.questions ?? []);
    setAnswers(resumeData.answers ?? {});
    setFlagged(restoredFlagged);
    setCurrentIndex(resumeData.currentIndex ?? 0);
    setView(resumeData.view ?? "quiz");
    setScore(resumeData.score ?? null);
    setStartedAt(resumeData.startedAt ?? null);
    setElapsedMs(resumeData.elapsedMs ?? 0);
    setIsRunning(!!resumeData.startedAt && resumeData.view !== "result");
    setShowConfetti(false);
    setFinishedAt(resumeData.finishedAt ?? null);
    setLastQuizIndex(resumeData.currentIndex ?? 0);
    setResumeStatus("ready");
    setResumeData(null);
  };

  const handleRestart = useCallback(() => {
    if (!isHealthSafety || isHistory) {
      return;
    }
    clearSavedSession();
    const shuffled = shuffleQuestions(level1HealthSafetyQuestions);
    setQuestions(shuffled.slice(0, count));
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    setView("quiz");
    setScore(null);
    setStartedAt(null);
    setElapsedMs(0);
    setIsRunning(false);
    setShowConfetti(false);
    setFinishedAt(null);
  }, [clearSavedSession, count, isHealthSafety, isHistory]);

  const handleStartNew = () => {
    if (isHistory) {
      return;
    }
    clearSavedSession();
    setResumeData(null);
    setResumeStatus("ready");
    handleRestart();
  };

  const handleSaveAndExit = () => {
    if (isHistory) {
      return;
    }
    persistSession();
    router.push("/lessons");
  };

  const resumeModal =
    !isHistory && !isNewAttempt && resumeStatus === "prompt" ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
        <div className="glass-card w-full max-w-md rounded-[var(--radius-24)] border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">
            Resume your saved test?
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            We found a saved session for this quiz.
          </p>
          <div className="mt-6 flex flex-wrap justify-end gap-3">
            <button
              type="button"
              onClick={handleStartNew}
              className="btn-secondary"
            >
              Start new
            </button>
            <button
              type="button"
              onClick={handleResume}
              className="btn-primary"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    ) : null;

  const resolvedView = isHistory ? "result" : view;
  const currentQuestion = questions[currentIndex];
  const selectedIndex = currentQuestion ? answers[currentQuestion.id] : undefined;

  if (!isHealthSafety && !isHistory) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 pb-20 pt-32 sm:px-8">
          <h1 className="text-3xl font-semibold text-white">Quiz</h1>
          <p className="text-sm text-[var(--muted)]">
            No question bank is available for this topic yet.
          </p>
        </div>
        {resumeModal}
      </div>
    );
  }

  if (isHistory && historyLoading) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 pb-20 pt-32 sm:px-8">
          <h1 className="text-3xl font-semibold text-white">Quiz</h1>
          <p className="text-sm text-[var(--muted)]">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (isHistory && historyError) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 pb-20 pt-32 sm:px-8">
          <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <h1 className="text-2xl font-semibold text-white">
              {historyError}
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Please return to history and try again.
            </p>
            <div className="mt-4">
              <Link href="/quizzes/history" className="btn-secondary">
                Back to history
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isHistory && legacyAttempt) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 pb-20 pt-32 sm:px-8">
          <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <h1 className="text-2xl font-semibold text-white">
              This attempt was saved before detailed question review was enabled.
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Future attempts will include full questions and answers.
            </p>
            <div className="mt-4">
              <Link href="/quizzes/history" className="btn-secondary">
                Back to history
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isHistory && historyMissing) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 pb-20 pt-32 sm:px-8">
          <h1 className="text-3xl font-semibold text-white">Quiz history</h1>
          <p className="text-sm text-[var(--muted)]">
            No completed attempt was found for this quiz.
          </p>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 pb-20 pt-32 sm:px-8">
          <h1 className="text-3xl font-semibold text-white">Quiz</h1>
          <p className="text-sm text-[var(--muted)]">Loading questions...</p>
        </div>
        {resumeModal}
      </div>
    );
  }

  const totalQuestions = questions.length;
  const scorePercent = totalQuestions
    ? ((score ?? 0) / totalQuestions) * 100
    : 0;
  const passed = scorePercent >= passMark;

  if (resolvedView === "review") {
    const flaggedList = questions
      .map((question, index) => ({
        question,
        index,
        isFlagged: !!flagged[question.id],
      }))
      .filter((item) => item.isFlagged);

    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-5 pb-20 pt-32 sm:px-8">
          <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-2xl font-semibold text-white">
                Review your answers
              </h1>
              <p className="text-sm text-[var(--muted)]">
                Time: {formatElapsed(elapsedMs)}
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <h2 className="text-sm font-semibold text-white">
                Flagged questions
              </h2>
              {flaggedList.length === 0 ? (
                <p className="mt-2 text-sm text-[var(--muted)]">
                  No flagged questions.
                </p>
              ) : (
                <div className="mt-3 space-y-2">
                  {flaggedList.map((item) => (
                    <div
                      key={`${item.question.id}-flag`}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                    >
                      <p className="text-sm text-white">
                        {item.index + 1}. {item.question.question}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          if (isHistory) {
                            return;
                          }
                          setCurrentIndex(item.index);
                          setView("quiz");
                        }}
                        className="btn-secondary"
                        disabled={isHistory}
                      >
                        Jump
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-6 space-y-6">
              {questions.map((question, questionIndex) => {
                const selected = answers[question.id];
                const isFlagged = !!flagged[question.id];
                return (
                  <div
                    key={question.id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                      Question {questionIndex + 1}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                      <h2 className="text-lg font-semibold text-white">
                        {question.question}
                      </h2>
                      {!isHistory ? (
                        <button
                          type="button"
                          onClick={() =>
                            setFlagged((prev) => ({
                              ...prev,
                              [question.id]: !prev[question.id],
                            }))
                          }
                          className={`rounded-full border px-3 py-1 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 ${
                            isFlagged
                              ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-200"
                              : "border-white/10 bg-white/5 text-[var(--muted)] hover:border-white/20"
                          }`}
                        >
                          {isFlagged ? "Flagged" : "Flag"} {isFlagged ? "🚩" : ""}
                        </button>
                      ) : null}
                    </div>
                    {isFlagged ? (
                      <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-200">
                        🚩 Flagged
                      </span>
                    ) : null}
                    <div className="mt-4 grid gap-3">
                      {question.options.map((option, optionIndex) => {
                        const isSelected = selected === optionIndex;
                        const optionClass = isSelected
                          ? "border-emerald-400 bg-emerald-500/10 text-emerald-200"
                          : "border-white/10 bg-white/5 text-white hover:border-white/20";
                        return (
                          <button
                            key={`${question.id}-review-${optionIndex}`}
                            type="button"
                            onClick={() =>
                              setAnswers((prev) => ({
                                ...prev,
                                [question.id]: optionIndex,
                              }))
                            }
                            className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition ${optionClass}`}
                            disabled={isHistory}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {selected === undefined ? (
                      <p className="mt-3 text-xs text-[var(--muted)]">
                        Unanswered
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex flex-wrap justify-between gap-3">
              {!isHistory ? (
                <button
                  type="button"
                  onClick={handleSaveAndExit}
                  className="btn-secondary"
                >
                  Save and exit
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => {
                  if (isHistory) {
                    return;
                  }
                  setView("quiz");
                  setCurrentIndex(lastQuizIndex);
                }}
                className="btn-secondary"
                disabled={isHistory}
              >
                Back to questions
              </button>
              {!isHistory ? (
                <button
                  type="button"
                  onClick={() => {
                    if (isHistory) {
                      return;
                    }
                    const nextScore = questions.reduce((total, question) => {
                      return total +
                        (answers[question.id] === question.correctIndex ? 1 : 0);
                    }, 0);
                    const total = questions.length || 1;
                    const percent = total ? (nextScore / total) * 100 : 0;
                    appendHistoryAttempt(nextScore, percent);
                    setScore(nextScore);
                    setIsRunning(false);
                    setView("result");
                  }}
                  className="btn-primary"
                >
                  Finish test
                </button>
              ) : null}
            </div>
          </div>
        </div>
        {resumeModal}
      </div>
    );
  }

  if (resolvedView === "result") {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-5 pb-20 pt-32 sm:px-8">
          <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            {isHistory ? (
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                History mode (read-only)
              </span>
            ) : null}
            {isHistory ? (
              <div className="mt-4 grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
                <p>
                  Score: {score ?? 0} / {questions.length} (
                  {historyPercent ?? Math.round(scorePercent)}%)
                </p>
                <p>Status: {passed ? "Pass" : "Fail"}</p>
                <p>Time: {formatElapsed(elapsedMs)}</p>
                <p>Pass mark: {passMark}%</p>
              </div>
            ) : null}
            <div className="relative">
              <Confetti show={showConfetti} />
              <h1 className="text-2xl font-semibold text-white">
                {passed ? "You passed!" : "You did not pass"}
              </h1>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              You scored {score ?? 0} out of {questions.length}
            </p>
            {!isHistory ? (
              <p className="mt-1 text-xs text-[var(--muted)]">Pass mark: 75%</p>
            ) : null}
            {!passed ? (
              <p className="mt-3 text-4xl">☹️</p>
            ) : null}
            <div className="mt-6 space-y-4">
              {questions.map((question, questionIndex) => {
                const selected = answers[question.id];
                const isCorrect = selected === question.correctIndex;
                const isFlagged = isHistory
                  ? flaggedIds.includes(question.id)
                  : !!flagged[question.id];
                const selectedText =
                  selected !== undefined
                    ? question.options[selected]
                    : "Unanswered";
                return (
                  <div
                    key={`${question.id}-result`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                      Question {questionIndex + 1}
                    </p>
                    <h2 className="mt-2 text-base font-semibold text-white">
                      {question.question}
                    </h2>
                    {isFlagged ? (
                      <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-200">
                        🚩 Flagged
                      </span>
                    ) : null}
                    <p
                      className={`mt-3 text-sm ${
                        isCorrect
                          ? "text-emerald-300"
                          : "text-red-200"
                      }`}
                    >
                      Your answer: {selectedText}
                    </p>
                    <p className="mt-1 text-sm text-emerald-300">
                      Correct answer: {question.options[question.correctIndex]}
                    </p>
                    {question.explanation ? (
                      <p className="mt-2 text-sm text-[var(--muted)]">
                        {question.explanation}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
            {!isHistory ? (
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="btn-primary"
                >
                  Restart
                </button>
              </div>
            ) : null}
          </div>
        </div>
        {resumeModal}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-5 pb-20 pt-32 sm:px-8">
        <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Question {currentIndex + 1} of {questions.length}
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-white">
                {currentQuestion.question}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-[var(--muted)]">
                Time: {formatElapsed(elapsedMs)}
              </p>
              {!isHistory ? (
                <button
                  type="button"
                  onClick={() =>
                    setFlagged((prev) => ({
                      ...prev,
                      [currentQuestion.id]: !prev[currentQuestion.id],
                    }))
                  }
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 ${
                    flagged[currentQuestion.id]
                      ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-200"
                      : "border-white/10 bg-white/5 text-[var(--muted)] hover:border-white/20"
                  }`}
                >
                  {flagged[currentQuestion.id] ? "Flagged 🚩" : "Flag"}
                </button>
              ) : null}
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedIndex === index;
              const stateClass = isSelected
                ? "border-emerald-400 bg-emerald-500/10 text-emerald-200"
                : "border-white/10 bg-white/5 text-white hover:border-white/20";

              return (
                <button
                  key={`${currentQuestion.id}-${index}`}
                  type="button"
                  onClick={() => {
                    if (isHistory) {
                      return;
                    }
                    if (!startedAt) {
                      setStartedAt(Date.now());
                      setIsRunning(true);
                    }
                    setAnswers((prev) => ({
                      ...prev,
                      [currentQuestion.id]: index,
                    }));
                  }}
                  className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition ${stateClass}`}
                  disabled={isHistory}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            {!isHistory ? (
              <button
                type="button"
                onClick={handleSaveAndExit}
                className="btn-secondary"
              >
                Save and exit
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => {
                if (isHistory) {
                  return;
                }
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
              }}
              disabled={currentIndex === 0}
              className="btn-secondary disabled:cursor-not-allowed disabled:opacity-60"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => {
                if (isHistory) {
                  return;
                }
                if (currentIndex >= questions.length - 1) {
                  setLastQuizIndex(currentIndex);
                  setView("review");
                  return;
                }
                setCurrentIndex((prev) =>
                  Math.min(prev + 1, questions.length - 1)
                );
              }}
              className="btn-secondary disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isHistory}
            >
              {currentIndex >= questions.length - 1 ? "Review" : "Next"}
            </button>
          </div>
        </div>
      </div>
      {resumeModal}
    </div>
  );
}
