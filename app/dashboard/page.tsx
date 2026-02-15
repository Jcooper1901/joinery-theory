"use client";

import AuthGate from "@/components/AuthGate";

export default function DashboardPage() {
  return (
    <AuthGate>
      <div className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="mt-2 text-sm text-slate-600">
            You are signed in. Replace this content with your dashboard layout.
          </p>
        </div>
      </div>
    </AuthGate>
  );
}
