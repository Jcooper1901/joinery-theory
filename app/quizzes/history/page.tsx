"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

/* 
COPILOT PROMPT:
In this Quiz History page, remove the separate "Sort" dropdown entirely.
Take every option currently inside the "Sort" dropdown (e.g. "Newest first", "Most flagged", etc.)
and add them into the existing "Filter" dropdown list.

Implementation details:
- Keep "Filter" label as "Filter" (do NOT create a new dropdown)
- The Filter dropdown should now include:
  - all existing filter options
  - plus the former sort options
- When the user selects a former sort option from the Filter dropdown, apply the same sorting logic that the Sort dropdown previously applied.
- The table/list should update immediately when Filter changes.
- Remove any state, handler, or UI markup that only existed for Sort (sortKey, setSortKey, sort dropdown component, etc.)
- If necessary, rename state to something like `viewMode` or `filterMode` and route logic based on the selected value.
*/

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
  questions: unknown[];
  answers: Record<string, number>;
  flaggedIds?: string[];
  flagged?: Record<string, boolean> | string[];
  passFail?: string;
  flaggedCount?: number;
  elapsedMs?: number;
  timeSeconds?: number;
  date?: string | number;
  createdAt?: string | number;
  abandoned?: boolean;
  completed?: boolean;
};

type FilterValue =
  | "all"
  | "failed"
  | "abandoned"
  | "flagged-heavy"
  | "newest"
  | "oldest"
  | "highest"
  | "most-flagged"
  | "fastest"
  | "slowest";

function formatDuration(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  return `${mm}:${ss}`;
}

export default function QuizHistoryPage() {
  const [attempts, setAttempts] = useState<QuizHistoryAttempt[]>([]);
  const [filterValue, setFilterValue] = useState<FilterValue>("all");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const stored = window.localStorage.getItem("jt:quizHistory");
    if (!stored) {
      setAttempts([]);
      return;
    }
    try {
      const parsed = JSON.parse(stored) as QuizHistoryAttempt[];
      setAttempts(Array.isArray(parsed) ? parsed : []);
    } catch {
      setAttempts([]);
    }
  }, []);

  const getAttemptMeta = (attempt: QuizHistoryAttempt) => {
    const questionCount =
      attempt.count ?? (attempt.questions ? attempt.questions.length : 0) ?? 0;
    const percent =
      attempt.percent ??
      (questionCount
        ? Math.round((attempt.score / questionCount) * 100)
        : 0);
    const flaggedCount =
      attempt.flaggedCount ??
      (Array.isArray(attempt.flaggedIds)
        ? attempt.flaggedIds.length
        : attempt.flagged && typeof attempt.flagged === "object"
          ? Object.values(attempt.flagged).filter(Boolean).length
          : 0);
    const durationMs =
      attempt.durationMs ??
      attempt.elapsedMs ??
      (attempt.timeSeconds ? attempt.timeSeconds * 1000 : 0);
    const dateMs =
      typeof attempt.completedAt === "number"
        ? attempt.completedAt
        : attempt.date
          ? new Date(attempt.date).getTime()
          : attempt.createdAt
            ? new Date(attempt.createdAt).getTime()
            : 0;
    const isAbandoned =
      attempt.passFail === "Abandoned" ||
      attempt.status === "abandoned" ||
      attempt.abandoned === true ||
      attempt.completed === false;
    const isFailed =
      attempt.passFail === "Fail" || (!isAbandoned && percent < 75);
    const isFlaggedHeavy =
      flaggedCount >= Math.max(2, Math.ceil(questionCount * 0.4));

    return {
      questionCount,
      percent,
      flaggedCount,
      durationMs,
      dateMs,
      isAbandoned,
      isFailed,
      isFlaggedHeavy,
    };
  };

  const visibleAttempts = useMemo(() => {
    const isSortValue = (value: FilterValue) =>
      value === "newest" ||
      value === "oldest" ||
      value === "highest" ||
      value === "most-flagged" ||
      value === "fastest" ||
      value === "slowest";
    const sortValue = isSortValue(filterValue) ? filterValue : "newest";

    const filtered = attempts.filter((attempt) => {
      const meta = getAttemptMeta(attempt);
      if (filterValue === "failed") {
        return meta.isFailed;
      }
      if (filterValue === "abandoned") {
        return meta.isAbandoned;
      }
      if (filterValue === "flagged-heavy") {
        return meta.isFlaggedHeavy;
      }
      return true;
    });

    const sorted = [...filtered].sort((a, b) => {
      const metaA = getAttemptMeta(a);
      const metaB = getAttemptMeta(b);
      if (sortValue === "newest") {
        return metaB.dateMs - metaA.dateMs;
      }
      if (sortValue === "oldest") {
        return metaA.dateMs - metaB.dateMs;
      }
      if (sortValue === "highest") {
        return metaB.percent - metaA.percent;
      }
      if (sortValue === "most-flagged") {
        return metaB.flaggedCount - metaA.flaggedCount;
      }
      if (sortValue === "fastest") {
        return metaA.durationMs - metaB.durationMs;
      }
      if (sortValue === "slowest") {
        return metaB.durationMs - metaA.durationMs;
      }
      return 0;
    });

    return sorted;
  }, [attempts, filterValue]);

  const handleClear = () => {
    if (typeof window === "undefined") {
      return;
    }
    const confirmed = window.confirm("Clear all quiz history?");
    if (!confirmed) {
      return;
    }
    window.localStorage.removeItem("jt:quizHistory");
    setAttempts([]);
  };

  const handleResetControls = () => {
    setFilterValue("all");
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 pb-20 pt-32 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold text-white">Quiz history</h1>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {visibleAttempts.length} shown / {attempts.length} total
            </p>
          </div>
          <button type="button" onClick={handleClear} className="btn-secondary">
            Clear history
          </button>
        </div>

        <div className="glass-card rounded-[var(--radius-16)] border border-white/10 p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Filter
              </label>
              {/*
              COPILOT PROMPT:
              Fix the contrast and readability of the Filter dropdown (trigger + dropdown menu).
              Currently, the dropdown menu text is too low contrast.

              Requirements:
              - Ensure dropdown trigger text is readable in dark mode.
              - Ensure dropdown menu background is dark and menu item text is light.
              - Ensure hover/active item background has strong contrast.
              - If using Tailwind, apply classes similar to:
                - trigger: text-slate-100 placeholder:text-slate-400 bg-slate-900 border-slate-700
                - menu: bg-slate-900 border-slate-700 text-slate-100
                - item hover: hover:bg-slate-800 focus:bg-slate-800
              - If using shadcn/ui Select, add/override className on SelectTrigger, SelectContent, SelectItem.
              - Do NOT change the overall layout, only readability/contrast.
              */}
              <select
                value={filterValue}
                onChange={(event) =>
                  setFilterValue(event.target.value as FilterValue)
                }
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
              >
                <option value="all">All attempts</option>
                <option value="failed">Show only failed</option>
                <option value="abandoned">Show abandoned</option>
                <option value="flagged-heavy">Show flagged-heavy attempts</option>
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="highest">Highest score</option>
                <option value="most-flagged">Most flagged</option>
                <option value="fastest">Fastest time</option>
                <option value="slowest">Slowest time</option>
              </select>
            </div>
            <button type="button" onClick={handleResetControls} className="btn-secondary">
              Clear
            </button>
          </div>
        </div>

        {attempts.length === 0 ? (
          <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <p className="text-sm text-[var(--muted)]">
              No attempts yet. Complete a quiz to see history.
            </p>
          </div>
        ) : visibleAttempts.length === 0 ? (
          <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <p className="text-sm text-[var(--muted)]">
              No attempts match this filter.
            </p>
          </div>
        ) : (
          <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    <th className="px-3 py-2">Date</th>
                    <th className="px-3 py-2">Level</th>
                    <th className="px-3 py-2">Topic</th>
                    <th className="px-3 py-2">Questions</th>
                    <th className="px-3 py-2">Score</th>
                    <th className="px-3 py-2">%</th>
                    <th className="px-3 py-2">Flagged</th>
                    <th className="px-3 py-2">Time</th>
                    <th className="px-3 py-2">Pass/Fail</th>
                    <th className="px-3 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleAttempts.map((attempt) => {
                    const meta = getAttemptMeta(attempt);
                    const dateLabel = new Date(
                      meta.dateMs || attempt.completedAt
                    ).toLocaleString();
                    const percentLabel = Math.round(meta.percent);
                    const href = `/quizzes/topic?mode=history&attemptId=${attempt.id}`;
                    const statusLabel = meta.isAbandoned
                      ? "Abandoned"
                      : meta.isFailed
                        ? "Fail"
                        : "Pass";

                    return (
                      <tr
                        key={attempt.id}
                        className="rounded-2xl border border-white/10 bg-white/5 text-sm text-white"
                      >
                        <td className="px-3 py-3 align-middle text-[var(--muted)]">
                          {dateLabel}
                        </td>
                        <td className="px-3 py-3 align-middle">
                          {attempt.level}
                        </td>
                        <td className="px-3 py-3 align-middle">
                          {attempt.topic}
                        </td>
                        <td className="px-3 py-3 align-middle">
                          {meta.questionCount}
                        </td>
                        <td className="px-3 py-3 align-middle">
                          {attempt.score} / {meta.questionCount}
                        </td>
                        <td className="px-3 py-3 align-middle">
                          {percentLabel}%
                        </td>
                        <td className="px-3 py-3 align-middle">
                          {meta.questionCount
                            ? `${meta.flaggedCount}/${meta.questionCount}`
                            : `${meta.flaggedCount}`}
                        </td>
                        <td className="px-3 py-3 align-middle">
                          {formatDuration(meta.durationMs)}
                        </td>
                        <td
                          className={`px-3 py-3 align-middle font-semibold ${
                            meta.isAbandoned
                              ? "text-[var(--muted)]"
                              : meta.isFailed
                                ? "text-red-200"
                                : "text-emerald-300"
                          }`}
                        >
                          {statusLabel}
                        </td>
                        <td className="px-3 py-3 align-middle">
                          <Link href={href} className="btn-secondary">
                            View attempt
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
