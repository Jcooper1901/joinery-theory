"use client";

import Navbar from "@/components/Navbar";
import { useMemo, useState } from "react";

type TourStep = {
  step: number;
  targetId: string;
  title: string;
  text: string;
};

const quotationTutorial = {
  title: "Mock Joinery Quotation Example",
  audience: "Apprentices",
  description:
    "A simple teaching example that shows a joinery quotation and explains each section step by step.",
  theme: {
    primaryColor: "#8B5E3C",
    secondaryColor: "#F5F0E8",
    textColor: "#222222",
    accentColor: "#D97706",
    borderColor: "#D6C2AA",
    backgroundColor: "#FFFDF9",
  },
  quoteCard: {
    companyName: "Oak & Grain Joinery Ltd",
    builderName: "Prepared by: Daniel Carter",
    builderAddress: "Workshop Address: 14 Mill Yard, Leeds, LS12 4RT",
    builderContact: "Phone: 07700 123456 | Email: quotes@oakandgrainjoinery.co.uk",
    customerName: "Customer: Sarah Thompson",
    projectAddress: "Project Address: 22 Rosewood Avenue, Harrogate, HG2 8PL",
    quoteDate: "Quote Date: 28 March 2026",
    startDate: "Estimated Start Date: 15 April 2026",
    jobDescription:
      "Supply and fit one made-to-measure oak staircase handrail, two newel caps, and a built-in understairs storage unit with soft-close doors.",
    methodStatement:
      "Measure site accurately, prepare workshop drawings, manufacture joinery items in the workshop, sand and finish surfaces, deliver to site, install securely, make final adjustments, and leave the work area clean and safe.",
    materials: [
      "Solid oak handrail",
      "2 oak newel caps",
      "Moisture-resistant MDF carcass for storage unit",
      "Oak veneer doors",
      "Soft-close hinges",
      "Wood screws and fixings",
      "Wood adhesive",
      "Clear satin finish",
    ],
    priceBreakdown: [
      ["Materials", "GBP 1,150"],
      ["Labour", "GBP 1,400"],
      ["Delivery and Installation", "GBP 250"],
      ["Waste Removal", "GBP 80"],
    ],
    totalPrice: "Total Price: GBP 2,880",
    terms:
      "Quotation valid for 30 days. 30% deposit required before materials are ordered. Final balance due on completion.",
  },
  tutorialOverlay: {
    steps: [
      {
        step: 1,
        targetId: "logoBox",
        title: "Logo Box",
        text: "This box shows where the builder's logo goes. A logo helps the quote look professional and makes the business easy to recognise.",
      },
      {
        step: 2,
        targetId: "companyName",
        title: "Company Name",
        text: "The company name tells the customer which business is giving the quotation. This is important for trust, record keeping, and legal clarity.",
      },
      {
        step: 3,
        targetId: "builderName",
        title: "Builder Name",
        text: "The builder's name shows who prepared the quote. Customers know who they are dealing with, and it helps if they need to ask questions.",
      },
      {
        step: 4,
        targetId: "builderAddress",
        title: "Builder Address",
        text: "The builder's address shows where the business is based. This adds credibility and gives the customer an official business location.",
      },
      {
        step: 5,
        targetId: "builderContact",
        title: "Builder Contact Information",
        text: "Phone number and email are essential. They give the customer easy ways to ask questions, approve the quote, or discuss changes.",
      },
      {
        step: 6,
        targetId: "customerName",
        title: "Customer Name",
        text: "The customer's name makes it clear who the quote is for. This avoids confusion, especially when a business prepares many quotations.",
      },
      {
        step: 7,
        targetId: "projectAddress",
        title: "Project Address",
        text: "The project address shows where the joinery work will happen. This matters because site access, travel, and measuring all depend on the correct location.",
      },
      {
        step: 8,
        targetId: "quoteDate",
        title: "Quote Date",
        text: "The quote date shows when the price was given. This helps because prices can change over time, especially for timber and hardware.",
      },
      {
        step: 9,
        targetId: "startDate",
        title: "Project Start Date",
        text: "The start date tells the customer when the job is expected to begin. This helps both sides plan ahead.",
      },
      {
        step: 10,
        targetId: "jobDescription",
        title: "Job Description",
        text: "This explains what work is included in the quote. A clear description prevents misunderstandings about what the joiner is supplying and fitting.",
      },
      {
        step: 11,
        targetId: "methodStatement",
        title: "Method Statement",
        text: "The method statement explains how the work will be carried out. This helps apprentices understand the process and shows the customer the builder has planned the job properly.",
      },
      {
        step: 12,
        targetId: "materials",
        title: "Building Materials",
        text: "This section lists the materials being used. It helps the customer see the quality and type of items included in the quotation.",
      },
      {
        step: 13,
        targetId: "priceBreakdown",
        title: "Price Breakdown",
        text: "A breakdown helps the customer understand where the money goes. It also teaches apprentices how labour, materials, and extra costs are separated.",
      },
      {
        step: 14,
        targetId: "projectPrice",
        title: "Project Price",
        text: "This is the total cost of the project. It should be clear and easy to find so the customer knows the final quoted amount.",
      },
      {
        step: 15,
        targetId: "terms",
        title: "Terms",
        text: "Terms explain important rules such as deposit amounts, payment timing, and how long the quote stays valid.",
      },
    ] satisfies TourStep[],
  },
  teachingNotes: {
    purpose:
      "Below are key points to remember when quoting for a job.",
    tips: [
      "Keep wording clear and professional.",
      "Always include who the quote is for and who it is from.",
      "Be specific about the work included.",
      "List materials clearly so the customer knows what they are paying for.",
      "Make the total price easy to spot.",
    ],
  },
};

function SectionFrame({
  id,
  activeId,
  children,
  className = "",
}: {
  id: string;
  activeId: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isActive = id === activeId;

  return (
    <section
      id={id}
      className={`rounded-2xl border p-4 transition-all duration-200 ${className} ${
        isActive ? "shadow-[0_0_0_3px_rgba(217,119,6,0.18)]" : ""
      }`}
      style={{
        borderColor: isActive
          ? quotationTutorial.theme.accentColor
          : quotationTutorial.theme.borderColor,
        backgroundColor: isActive ? "#fff7ed" : quotationTutorial.theme.backgroundColor,
      }}
    >
      {children}
    </section>
  );
}

function HighlightTarget({
  id,
  activeId,
  children,
  className = "",
}: {
  id: string;
  activeId: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isActive = id === activeId;

  return (
    <div
      id={id}
      className={`rounded-2xl border p-3 transition-all duration-200 ${className} ${
        isActive ? "shadow-[0_0_0_3px_rgba(217,119,6,0.18)]" : ""
      }`}
      style={{
        borderColor: isActive
          ? quotationTutorial.theme.accentColor
          : "transparent",
        backgroundColor: isActive ? "#fff7ed" : "transparent",
      }}
    >
      {children}
    </div>
  );
}

export default function JobQuotationPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = quotationTutorial.tutorialOverlay.steps;
  const activeStep = steps[currentStep];

  const totalCost = useMemo(() => {
    return quotationTutorial.quoteCard.priceBreakdown.length;
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8">
        <section className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-white">
              {quotationTutorial.title}
            </h1>
            <p className="mt-3 text-base text-[var(--muted)]">
              {quotationTutorial.description}
            </p>
          </div>
          <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Tutorial Progress
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {activeStep.step} / {steps.length}
            </p>
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="gradient-border rounded-[32px]">
            <div className="rounded-[32px] p-5 sm:p-8" style={{ backgroundColor: "#f9f3ea" }}>
              <div
                className="mx-auto rounded-[28px] border p-6 text-[#222222] shadow-[0_24px_60px_rgba(51,35,20,0.12)] sm:p-8"
                style={{
                  maxWidth: "1000px",
                  borderColor: quotationTutorial.theme.borderColor,
                  backgroundColor: quotationTutorial.theme.backgroundColor,
                }}
              >
                <div className="flex flex-col gap-6 border-b pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <HighlightTarget
                    id="logoBox"
                    activeId={activeStep.targetId}
                    className="w-fit"
                  >
                    <div
                      className="flex items-center justify-center rounded-2xl text-center text-sm font-bold"
                      style={{
                        width: "140px",
                        height: "80px",
                        border: "2px dashed #8B5E3C",
                        backgroundColor: quotationTutorial.theme.secondaryColor,
                        color: quotationTutorial.theme.primaryColor,
                      }}
                    >
                      Your logo
                    </div>
                  </HighlightTarget>

                  <div className="flex-1 space-y-3">
                    <HighlightTarget id="companyName" activeId={activeStep.targetId}>
                      <div>
                        <p
                          className="text-3xl font-bold"
                          style={{ color: quotationTutorial.theme.primaryColor }}
                        >
                          {quotationTutorial.quoteCard.companyName}
                        </p>
                      </div>
                    </HighlightTarget>
                    <HighlightTarget id="builderName" activeId={activeStep.targetId}>
                      <div>
                        <p className="text-base">{quotationTutorial.quoteCard.builderName}</p>
                      </div>
                    </HighlightTarget>
                    <HighlightTarget id="builderAddress" activeId={activeStep.targetId}>
                      <div>
                        <p className="text-[15px]">{quotationTutorial.quoteCard.builderAddress}</p>
                      </div>
                    </HighlightTarget>
                    <HighlightTarget id="builderContact" activeId={activeStep.targetId}>
                      <div>
                        <p className="text-[15px]">{quotationTutorial.quoteCard.builderContact}</p>
                      </div>
                    </HighlightTarget>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <SectionFrame
                    id="customerName"
                    activeId={activeStep.targetId}
                    className="h-full"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8b6b4a]">
                      Customer Name
                    </p>
                    <p className="mt-2 text-base font-semibold">
                      {quotationTutorial.quoteCard.customerName}
                    </p>
                  </SectionFrame>

                  <SectionFrame
                    id="projectAddress"
                    activeId={activeStep.targetId}
                    className="h-full"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8b6b4a]">
                      Project Address
                    </p>
                    <p className="mt-2 text-base font-semibold">
                      {quotationTutorial.quoteCard.projectAddress}
                    </p>
                  </SectionFrame>

                  <SectionFrame id="quoteDate" activeId={activeStep.targetId}>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8b6b4a]">
                      Quote Date
                    </p>
                    <p className="mt-2 text-base font-semibold">
                      {quotationTutorial.quoteCard.quoteDate}
                    </p>
                  </SectionFrame>

                  <SectionFrame id="startDate" activeId={activeStep.targetId}>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8b6b4a]">
                      Project Start Date
                    </p>
                    <p className="mt-2 text-base font-semibold">
                      {quotationTutorial.quoteCard.startDate}
                    </p>
                  </SectionFrame>
                </div>

                <div className="mt-6 space-y-4">
                  <SectionFrame id="jobDescription" activeId={activeStep.targetId}>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8b6b4a]">
                      Job Description
                    </p>
                    <p className="mt-3 text-[15px] leading-7">
                      {quotationTutorial.quoteCard.jobDescription}
                    </p>
                  </SectionFrame>

                  <SectionFrame id="methodStatement" activeId={activeStep.targetId}>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8b6b4a]">
                      Method Statement
                    </p>
                    <p className="mt-3 text-[15px] leading-7">
                      {quotationTutorial.quoteCard.methodStatement}
                    </p>
                  </SectionFrame>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                  <SectionFrame id="materials" activeId={activeStep.targetId}>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8b6b4a]">
                      Building Materials
                    </p>
                    <ul className="mt-3 space-y-2 text-[15px]">
                      {quotationTutorial.quoteCard.materials.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className="mt-2 h-2 w-2 rounded-full"
                            style={{ backgroundColor: quotationTutorial.theme.accentColor }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </SectionFrame>

                  <SectionFrame id="priceBreakdown" activeId={activeStep.targetId}>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8b6b4a]">
                      Price Breakdown
                    </p>
                    <div className="mt-3 overflow-hidden rounded-2xl border border-[#d6c2aa]">
                      <table className="w-full border-collapse text-left text-[15px]">
                        <thead className="bg-[#f5f0e8]">
                          <tr>
                            <th className="px-4 py-3 font-semibold">Item</th>
                            <th className="px-4 py-3 font-semibold">Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          {quotationTutorial.quoteCard.priceBreakdown.map(([item, cost]) => (
                            <tr key={item} className="border-t border-[#eadbc8]">
                              <td className="px-4 py-3">{item}</td>
                              <td className="px-4 py-3 font-semibold">{cost}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-3 text-sm text-[#6f604e]">
                      {totalCost} cost lines are shown here to separate materials, labour and extras.
                    </p>
                  </SectionFrame>
                </div>

                <div className="mt-6 space-y-4">
                  <SectionFrame id="projectPrice" activeId={activeStep.targetId}>
                    <div
                      className="rounded-2xl border-2 p-4"
                      style={{
                        borderColor: quotationTutorial.theme.primaryColor,
                        backgroundColor: quotationTutorial.theme.secondaryColor,
                      }}
                    >
                      <p className="text-xs uppercase tracking-[0.16em] text-[#8b6b4a]">
                        Project Price
                      </p>
                      <p className="mt-2 text-2xl font-bold" style={{ color: "#6b4423" }}>
                        {quotationTutorial.quoteCard.totalPrice}
                      </p>
                    </div>
                  </SectionFrame>

                  <SectionFrame id="terms" activeId={activeStep.targetId}>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8b6b4a]">
                      Terms
                    </p>
                    <p className="mt-3 text-sm leading-7">{quotationTutorial.quoteCard.terms}</p>
                  </SectionFrame>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
            <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Guided Tour
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Step {activeStep.step}: {activeStep.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {activeStep.text}
              </p>

              <div className="mt-6 grid grid-cols-5 gap-2">
                {steps.map((step, index) => (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setCurrentStep(index)}
                    className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                      index === currentStep
                        ? "border-teal-400 bg-teal-500/15 text-teal-200"
                        : "border-white/10 bg-white/5 text-[var(--muted)] hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {step.step}
                  </button>
                ))}
              </div>

              <p className="mt-4 text-sm text-[var(--muted)] sm:hidden">
                Scroll up to view the corresponding box
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}
                  className="btn-secondary"
                  disabled={currentStep === 0}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentStep((step) => Math.min(step + 1, steps.length - 1))
                  }
                  className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={currentStep === steps.length - 1}
                >
                  Next
                </button>
              </div>
            </div>

            <div className="glass-card rounded-[var(--radius-24)] border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Teaching Notes
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {quotationTutorial.teachingNotes.purpose}
              </p>
              <div className="mt-4 space-y-3">
                {quotationTutorial.teachingNotes.tips.map((tip) => (
                  <div
                    key={tip}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-[var(--foreground)]"
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
