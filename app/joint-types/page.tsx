"use client";

import Navbar from "@/components/Navbar";

const jointTypesData = {
  title: "Compare Woodworking Joints",
  subtitle: "See the strength, ideal use, and best glue for each joint",
  columns: [
    { key: "joint", label: "Joint" },
    { key: "strength_label", label: "Strength" },
    { key: "use_case", label: "When to Use It" },
    { key: "glue", label: "Recommended Glue" },
  ],
  rows: [
    {
      joint: "Butt Joint",
      strength_label: "Low",
      use_case: "Basic construction and low-stress projects",
      glue: "PVA wood glue",
    },
    {
      joint: "Mitre Joint",
      strength_label: "Low",
      use_case: "Frames, mouldings, decorative corners",
      glue: "PVA wood glue or polyurethane glue",
    },
    {
      joint: "Dowel Joint",
      strength_label: "Medium",
      use_case: "Furniture assembly and cabinet work",
      glue: "PVA wood glue",
    },
    {
      joint: "Biscuit Joint",
      strength_label: "Medium",
      use_case: "Panel alignment and light furniture joining",
      glue: "PVA wood glue",
    },
    {
      joint: "Mortise and Tenon",
      strength_label: "Very High",
      use_case: "Chairs, tables, doors, and structural furniture",
      glue: "PVA wood glue or hide glue",
    },
    {
      joint: "Dovetail Joint",
      strength_label: "Very High",
      use_case: "Drawers and high-quality box construction",
      glue: "PVA wood glue or hide glue",
    },
    {
      joint: "Box Joint",
      strength_label: "High",
      use_case: "Boxes, drawers, and case corners",
      glue: "PVA wood glue",
    },
    {
      joint: "Lap Joint",
      strength_label: "Medium",
      use_case: "Frames and workshop builds",
      glue: "PVA wood glue",
    },
    {
      joint: "Bridle Joint",
      strength_label: "High",
      use_case: "Frames, leg-to-rail connections, workbenches",
      glue: "PVA wood glue",
    },
    {
      joint: "Tongue and Groove",
      strength_label: "Medium",
      use_case: "Flooring, paneling, tabletops",
      glue: "PVA wood glue",
    },
  ],
};

function getStrengthClasses(strength: string) {
  switch (strength.toLowerCase()) {
    case "very high":
    case "high":
      return "border-emerald-400/50 bg-emerald-500/15 text-emerald-200";
    case "medium":
      return "border-amber-400/50 bg-amber-500/15 text-amber-200";
    default:
      return "border-rose-400/50 bg-rose-500/15 text-rose-200";
  }
}

export default function JointTypesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8">
        <section className="mb-8">
          <h1 className="mt-4 text-4xl font-semibold text-white">
            {jointTypesData.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-[var(--muted)]">
            {jointTypesData.subtitle}
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Quick Guide
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Low strength</p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Best for lighter-duty work, simple assemblies, or decorative pieces.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Medium strength</p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Useful where alignment matters and the joint carries moderate load.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">High to very high</p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Better for furniture, doors, and work that needs long-term durability.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border rounded-[var(--radius-24)]">
            <div className="glass-card overflow-hidden rounded-[var(--radius-24)] border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full table-fixed border-collapse">
                  <thead>
                    <tr className="bg-white/5">
                      {jointTypesData.columns.map((column) => (
                        <th
                          key={column.key}
                          className="border-b border-r border-white/10 px-2 py-3 text-left text-[11px] font-semibold leading-snug text-white last:border-r-0 sm:px-5 sm:py-4 sm:text-sm"
                        >
                          {column.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {jointTypesData.rows.map((row) => (
                      <tr key={row.joint} className="align-top transition hover:bg-white/3">
                        <td className="border-r border-b border-white/10 px-2 py-3 text-[11px] font-semibold leading-snug text-white sm:px-5 sm:py-4 sm:text-sm">
                          {row.joint}
                        </td>
                        <td className="border-r border-b border-white/10 px-2 py-3 text-[11px] leading-snug sm:px-5 sm:py-4 sm:text-sm">
                          <span
                            className={`inline-flex rounded-full border px-2 py-1 text-[10px] font-semibold leading-none sm:px-3 sm:text-xs ${getStrengthClasses(
                              row.strength_label
                            )}`}
                          >
                            {row.strength_label}
                          </span>
                        </td>
                        <td className="border-r border-b border-white/10 px-2 py-3 text-[11px] leading-snug text-[var(--muted)] sm:px-5 sm:py-4 sm:text-sm">
                          {row.use_case}
                        </td>
                        <td className="border-b border-white/10 px-2 py-3 text-[11px] leading-snug text-[var(--muted)] sm:px-5 sm:py-4 sm:text-sm">
                          {row.glue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
