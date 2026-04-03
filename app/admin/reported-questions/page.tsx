"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged, User } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, writeBatch } from "firebase/firestore";
import Navbar from "@/components/Navbar";
import { auth, db } from "@/lib/firebase";
import { ADMIN_EMAIL } from "@/lib/admin";

type QuestionReport = {
  id: string;
  questionId: string;
  questionText: string;
  subtopic: string;
  sourceBank: string;
  level: string;
  sourceLessonId: string | null;
  reportCount: number;
  createdAtMs: number;
  lastReportedAtMs: number;
  lastReportedByEmail: string | null;
  lastReportedByUid: string | null;
};

export default function ReportedQuestionsAdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reports, setReports] = useState<QuestionReport[]>([]);
  const [deletingReportId, setDeletingReportId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  const isAdmin = useMemo(
    () => user?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase(),
    [user]
  );

  const loadReports = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const snap = await getDocs(collection(db, "questionReports"));
      const parsed = snap.docs.map((docSnap) => {
        const data = docSnap.data() as Partial<QuestionReport>;
        return {
          id: docSnap.id,
          questionId: data.questionId ?? "",
          questionText: data.questionText ?? "",
          subtopic: data.subtopic ?? "Unknown",
          sourceBank: data.sourceBank ?? "unknown",
          level: data.level ?? "Level 1",
          sourceLessonId: data.sourceLessonId ?? null,
          reportCount: Number(data.reportCount ?? 0),
          createdAtMs: Number(data.createdAtMs ?? 0),
          lastReportedAtMs: Number(data.lastReportedAtMs ?? 0),
          lastReportedByEmail: data.lastReportedByEmail ?? null,
          lastReportedByUid: data.lastReportedByUid ?? null,
        } satisfies QuestionReport;
      });

      parsed.sort((a, b) => {
        if (b.reportCount !== a.reportCount) {
          return b.reportCount - a.reportCount;
        }
        return b.lastReportedAtMs - a.lastReportedAtMs;
      });
      setReports(parsed);
    } catch (loadError) {
      console.error(loadError);
      setError("Could not load reports. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!authReady || !isAdmin) {
      setLoading(false);
      return;
    }
    loadReports();
  }, [authReady, isAdmin, loadReports]);

  const handleDeleteReport = useCallback(
    async (reportId: string) => {
      const confirmed = window.confirm("Delete this report?");
      if (!confirmed) {
        return;
      }
      setError(null);
      setDeletingReportId(reportId);
      try {
        const eventsRef = collection(db, "questionReports", reportId, "events");
        const eventsSnap = await getDocs(eventsRef);
        if (!eventsSnap.empty) {
          const batch = writeBatch(db);
          eventsSnap.docs.forEach((eventDoc) => {
            batch.delete(eventDoc.ref);
          });
          await batch.commit();
        }
        await deleteDoc(doc(db, "questionReports", reportId));
        setReports((prev) => prev.filter((report) => report.id !== reportId));
      } catch (deleteError) {
        console.error(deleteError);
        setError("Could not delete report. Please try again.");
      } finally {
        setDeletingReportId(null);
      }
    },
    []
  );

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-20 pt-32 sm:px-8">
        <section className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Admin
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-white">
                Question Reports
              </h1>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Reports for Level 1 question banks.
              </p>
            </div>
            {isAdmin ? (
              <button type="button" className="btn-secondary" onClick={loadReports}>
                Refresh
              </button>
            ) : null}
          </div>
        </section>

        {!authReady ? (
          <section className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <p className="text-sm text-[var(--muted)]">Checking access...</p>
          </section>
        ) : null}

        {authReady && !user ? (
          <section className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <p className="text-sm text-[var(--muted)]">
              Sign in with the admin account to view reports.
            </p>
            <div className="mt-4">
              <Link href="/login" className="btn-primary">
                Go to login
              </Link>
            </div>
          </section>
        ) : null}

        {authReady && user && !isAdmin ? (
          <section className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <p className="text-sm text-red-300">
              Access denied. This page is restricted to the admin account.
            </p>
          </section>
        ) : null}

        {authReady && isAdmin ? (
          <section className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            {loading ? (
              <p className="text-sm text-[var(--muted)]">Loading reports...</p>
            ) : error ? (
              <p className="text-sm text-red-300">{error}</p>
            ) : reports.length === 0 ? (
              <p className="text-sm text-[var(--muted)]">
                No questions have been reported yet.
              </p>
            ) : (
              <div className="space-y-4">
                {reports.map((report) => (
                  <article
                    key={report.id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-white">
                        {report.subtopic}
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                            report.reportCount > 1
                              ? "border-red-400/70 bg-red-500/15 text-red-200"
                              : "border-sky-400/70 bg-sky-500/15 text-sky-200"
                          }`}
                        >
                          Reports: {report.reportCount}
                        </span>
                        <button
                          type="button"
                          className="rounded-full border border-red-400/50 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-200 transition hover:border-red-300/70 disabled:cursor-not-allowed disabled:opacity-60"
                          disabled={deletingReportId === report.id}
                          onClick={() => handleDeleteReport(report.id)}
                        >
                          {deletingReportId === report.id ? "Deleting..." : "Delete"}
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-white">{report.questionText}</p>
                    <div className="mt-3 grid gap-2 text-xs text-[var(--muted)] sm:grid-cols-2">
                      <p>Question ID: {report.questionId}</p>
                      <p>Bank: {report.sourceBank}</p>
                      <p>
                        Last reported:{" "}
                        {report.lastReportedAtMs
                          ? new Date(report.lastReportedAtMs).toLocaleString()
                          : "Unknown"}
                      </p>
                      <p>
                        Last reporter: {report.lastReportedByEmail ?? "Anonymous"}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        ) : null}
      </main>
    </div>
  );
}
