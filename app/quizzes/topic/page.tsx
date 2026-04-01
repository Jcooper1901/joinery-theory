"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { auth, db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  increment,
  setDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { isTopicLockedForFreePlan } from "@/lib/planAccess";

import { healthSafetyQuestions } from "@/data/questionBanks/healthAndSafety";
import { questionBank as handtoolsQuestions } from "@/data/questionBanks/handtools";
import { powertoolsQuestions } from "@/data/questionBanks/powertools";
import { principlesOfBuildingQuestions } from "@/data/questionBanks/principlesofbuilding";
import { questions as woodworkingJointsQuestions } from "@/data/questionBanks/woodworkingjoints";
import { fixingLevel1Questions as ironmongeryQuestions } from "@/data/questionBanks/ironmongeryandfixings";
import { l2HealthAndSafetyQuestions } from "@/data/questionBanks/l2-healthandsafety";
import { l2PrinciplesOfConstructionQuestions } from "@/data/questionBanks/l2-principlesofconstruction";
import { l2StructuralCarpentryQuestions } from "@/data/questionBanks/l2-structuralcarpentry";
import { l2NonStructuralCarpentryPriorToPlasterQuestions } from "@/data/questionBanks/l2-nonstructuralcarpentrypriortoplaster";
import { l2NonStructuralCarpentryAfterPlasterQuestions } from "@/data/questionBanks/l2-nonstructuralcarpentryafterplaster";
import { l2TimberTechnologyWoodworkingMachineryQuestions } from "@/data/questionBanks/l2-timbertechnologywoodworkingmachinery";
import { l2ArchitecturalJoineryQuestions } from "@/data/questionBanks/l2-architecturaljoinery";
import { l2AjComponentProductionAssemblyFinishingQuestions } from "@/data/questionBanks/l2-ajcomponentproductionassemblyfinishing";
import { l3HealthAndSafetyQuestions } from "@/data/questionBanks/l3-Healthandsafety";
import { l3PricingConstructionJobsQuestions } from "@/data/questionBanks/l3-pricingconstructionjobs";
import { l3UsingMachineryQuestions } from "@/data/questionBanks/l3-usingmachinery";
import { l3ConstructingCutRoofQuestions } from "@/data/questionBanks/l3-constructingcutroof";
import { l3FittingDoorsWindowsFurnitureQuestions } from "@/data/questionBanks/l3-fittingdoorswindowsfurniture";
import { l3ManufacturingCurvedJoineryQuestions } from "@/data/questionBanks/l3-manufacturingcurvedjoinery";
import { l3ManufacturingStairsWithTurnsQuestions } from "@/data/questionBanks/l3-manufacturingstairswithturns";
import { l3FixingStairsWithTurnsQuestions } from "@/data/questionBanks/l3-fixingstairswithturns";
import { l3PrinciplesOfMaintenanceAndRepairQuestions } from "@/data/questionBanks/l3-principlesofmaintenanceandrepair";

// Type definition for multiple choice questions
export type MCQQuestion = {
  id: string;
  level: string;
  subtopic: string;
  sourceLessonId?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  tags: string[];
};

type RawQuestion = {
  id?: string;
  lessonId?: string;
  question?: string;
  options?: readonly string[];
  correctIndex?: number;
  explanation?: string;
};

type HistoryAttemptLike = {
  id?: string;
  attemptId?: string;
  attempt_id?: string;
  sessionId?: string;
  questions?: unknown[];
  answers?: Record<string, number>;
  flaggedIds?: string[];
  flagged?: Record<string, boolean>;
  score?: number;
  percent?: number;
  durationMs?: number;
  elapsedMs?: number;
  completedAt?: number;
  data?: {
    questions?: unknown[];
    answers?: Record<string, number>;
    flaggedIds?: string[];
    flagged?: Record<string, boolean>;
  };
  session?: {
    questions?: unknown[];
    answers?: Record<string, number>;
    flaggedIds?: string[];
    flagged?: Record<string, boolean>;
  };
};

function shuffleArray<T>(items: T[]) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleQuestionOptions(question: MCQQuestion): MCQQuestion {
  const optionsWithMeta = question.options.map((option, index) => ({
    option,
    isCorrect: index === question.correctIndex,
  }));

  for (let i = optionsWithMeta.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsWithMeta[i], optionsWithMeta[j]] = [optionsWithMeta[j], optionsWithMeta[i]];
  }

  return {
    ...question,
    options: optionsWithMeta.map(({ option }) => option),
    correctIndex: optionsWithMeta.findIndex(({ isCorrect }) => isCorrect),
  };
}

function convertRawToMCQ(q: RawQuestion, subtopic: string, level: string): MCQQuestion {
  const safeId =
    q.id ??
    `${subtopic.toLowerCase().replace(/\s+/g, "-")}::${(q.question ?? "question")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}`;
  return {
    id: safeId,
    level,
    subtopic,
    sourceLessonId: q.lessonId,
    question: q.question ?? "",
    options: Array.isArray(q.options) ? [...q.options] : [],
    correctIndex: typeof q.correctIndex === "number" ? q.correctIndex : 0,
    explanation: q.explanation ?? "",
    tags: [],
  };
}

function getRawBankForTopic(levelParam: string, normalizedTopic: string): readonly RawQuestion[] {
  const normalizedLevel = levelParam.trim().toLowerCase();

  if (normalizedLevel === "1" || normalizedLevel === "level 1") {
    switch (normalizedTopic) {
      case "health and safety":
        return healthSafetyQuestions as readonly RawQuestion[];
      case "hand tools":
        return handtoolsQuestions as unknown as readonly RawQuestion[];
      case "power tools":
        return powertoolsQuestions as readonly RawQuestion[];
      case "woodworking joints":
        return woodworkingJointsQuestions as readonly RawQuestion[];
      case "ironmongery and fixings":
        return ironmongeryQuestions as readonly RawQuestion[];
      case "principles of building":
        return principlesOfBuildingQuestions as readonly RawQuestion[];
      default:
        return [];
    }
  }

  if (normalizedLevel === "2" || normalizedLevel === "level 2") {
    switch (normalizedTopic) {
      case "health and safety":
        return l2HealthAndSafetyQuestions as readonly RawQuestion[];
      case "principles of construction":
        return l2PrinciplesOfConstructionQuestions as readonly RawQuestion[];
      case "structural carpentry":
        return l2StructuralCarpentryQuestions as readonly RawQuestion[];
      case "non-structural carpentry prior to plastering":
        return l2NonStructuralCarpentryPriorToPlasterQuestions as readonly RawQuestion[];
      case "non-structural carpentry after plastering":
        return l2NonStructuralCarpentryAfterPlasterQuestions as readonly RawQuestion[];
      case "timber technology and woodworking machinery":
        return l2TimberTechnologyWoodworkingMachineryQuestions as readonly RawQuestion[];
      case "planning and preparation for architectural joinery":
        return l2ArchitecturalJoineryQuestions as readonly RawQuestion[];
      case "architectural joinery component production, assembly and finishing":
        return l2AjComponentProductionAssemblyFinishingQuestions as readonly RawQuestion[];
      default:
        return [];
    }
  }

  if (normalizedLevel === "3" || normalizedLevel === "level 3") {
    switch (normalizedTopic) {
      case "health and safety":
        return l3HealthAndSafetyQuestions as readonly RawQuestion[];
      case "planning and pricing construction work":
        return l3PricingConstructionJobsQuestions as readonly RawQuestion[];
      case "fixed and transportable machinery":
        return l3UsingMachineryQuestions as readonly RawQuestion[];
      case "constructing cut roofing":
        return l3ConstructingCutRoofQuestions as readonly RawQuestion[];
      case "fitting doors, windows and their furnishings":
        return l3FittingDoorsWindowsFurnitureQuestions as readonly RawQuestion[];
      case "manufacturing curved joinery":
        return l3ManufacturingCurvedJoineryQuestions as readonly RawQuestion[];
      case "manufacturing stairs with turns":
        return l3ManufacturingStairsWithTurnsQuestions as readonly RawQuestion[];
      case "fixing stairs with turns":
        return l3FixingStairsWithTurnsQuestions as readonly RawQuestion[];
      case "principles of maintenance and repair":
        return l3PrinciplesOfMaintenanceAndRepairQuestions as readonly RawQuestion[];
      default:
        return [];
    }
  }

  return [];
}

function buildMCQListForTopic(levelParam: string, topicParam: string): MCQQuestion[] {
  const normalizedLevel = levelParam.trim().toLowerCase();
  const normalized = topicParam.trim().toLowerCase();
  if (
    (normalizedLevel === "1" || normalizedLevel === "level 1") &&
    (normalized === "level 1 multiple choice" ||
      normalized === "level1 multiple choice" ||
      normalized === "level 1 multiple-choice")
  ) {
    const combined: MCQQuestion[] = [];
    combined.push(
      ...healthSafetyQuestions.map((q) => convertRawToMCQ(q, "Health and Safety", "Level 1"))
    );
    combined.push(...handtoolsQuestions.map((q) => convertRawToMCQ(q, "Hand Tools", "Level 1")));
    combined.push(...powertoolsQuestions.map((q) => convertRawToMCQ(q, "Power Tools", "Level 1")));
    combined.push(
      ...principlesOfBuildingQuestions.map((q) =>
        convertRawToMCQ(q, "Principles of Building", "Level 1")
      )
    );
    combined.push(
      ...woodworkingJointsQuestions.map((q) => convertRawToMCQ(q, "Woodworking Joints", "Level 1"))
    );
    combined.push(
      ...ironmongeryQuestions.map((q) => convertRawToMCQ(q, "Ironmongery and Fixings", "Level 1"))
    );
    return combined.map(shuffleQuestionOptions);
  }

  const displayLevel =
    normalizedLevel === "1" || normalizedLevel === "level 1"
      ? "Level 1"
      : normalizedLevel === "2" || normalizedLevel === "level 2"
        ? "Level 2"
        : levelParam;
  const raw = getRawBankForTopic(levelParam, normalized);
  return raw.map((q) => shuffleQuestionOptions(convertRawToMCQ(q, topicParam, displayLevel)));
}

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

type ProfileData = {
  role?: string;
  pro?: boolean;
};

function shuffleQuestions(items: MCQQuestion[]) {
  return shuffleArray(items);
}

function buildLevel1MixedQuestionSet(count: number): MCQQuestion[] {
  const sources = [
    {
      subtopic: "Health and Safety",
      questions: healthSafetyQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Hand Tools",
      questions: handtoolsQuestions as unknown as readonly RawQuestion[],
    },
    {
      subtopic: "Power Tools",
      questions: powertoolsQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Principles of Building",
      questions: principlesOfBuildingQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Woodworking Joints",
      questions: woodworkingJointsQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Ironmongery and Fixings",
      questions: ironmongeryQuestions as readonly RawQuestion[],
    },
  ];

  const pools = sources
    .map(({ subtopic, questions }) => ({
      subtopic,
      questions: shuffleQuestions(
        questions.map((q) =>
          shuffleQuestionOptions(convertRawToMCQ(q, subtopic, "Level 1"))
        )
      ),
    }))
    .filter((pool) => pool.questions.length > 0);

  const selected: MCQQuestion[] = [];

  while (selected.length < count) {
    const availablePools = shuffleArray(
      pools.filter((pool) => pool.questions.length > 0)
    );

    if (availablePools.length === 0) {
      break;
    }

    for (const pool of availablePools) {
      if (selected.length >= count) {
        break;
      }

      const nextQuestion = pool.questions.pop();
      if (nextQuestion) {
        selected.push(nextQuestion);
      }
    }
  }

  return shuffleQuestions(selected);
}

function buildLevel2MixedQuestionSet(count: number): MCQQuestion[] {
  const sources = [
    {
      subtopic: "Health And Safety",
      questions: l2HealthAndSafetyQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Principles Of Construction",
      questions: l2PrinciplesOfConstructionQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Structural Carpentry",
      questions: l2StructuralCarpentryQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Non-structural Carpentry Prior To Plastering",
      questions: l2NonStructuralCarpentryPriorToPlasterQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Non-structural Carpentry After Plastering",
      questions: l2NonStructuralCarpentryAfterPlasterQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Timber Technology And Woodworking Machinery",
      questions: l2TimberTechnologyWoodworkingMachineryQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Planning and Preparation For Architectural Joinery",
      questions: l2ArchitecturalJoineryQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Architectural Joinery Component Production, Assembly and Finishing",
      questions: l2AjComponentProductionAssemblyFinishingQuestions as readonly RawQuestion[],
    },
  ];

  const pools = sources
    .map(({ subtopic, questions }) => ({
      subtopic,
      questions: shuffleQuestions(
        questions.map((q) =>
          shuffleQuestionOptions(convertRawToMCQ(q, subtopic, "Level 2"))
        )
      ),
    }))
    .filter((pool) => pool.questions.length > 0);

  const selected: MCQQuestion[] = [];

  while (selected.length < count) {
    const availablePools = shuffleArray(
      pools.filter((pool) => pool.questions.length > 0)
    );

    if (availablePools.length === 0) {
      break;
    }

    for (const pool of availablePools) {
      if (selected.length >= count) {
        break;
      }

      const nextQuestion = pool.questions.pop();
      if (nextQuestion) {
        selected.push(nextQuestion);
      }
    }
  }

  return shuffleQuestions(selected);
}

function buildLevel3MixedQuestionSet(count: number): MCQQuestion[] {
  const sources = [
    {
      subtopic: "Health and Safety",
      questions: l3HealthAndSafetyQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Planning and Pricing Construction Work",
      questions: l3PricingConstructionJobsQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Fixed and Transportable Machinery",
      questions: l3UsingMachineryQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Constructing cut roofing",
      questions: l3ConstructingCutRoofQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Fitting Doors, Windows and their furnishings",
      questions: l3FittingDoorsWindowsFurnitureQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Manufacturing Curved Joinery",
      questions: l3ManufacturingCurvedJoineryQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Manufacturing Stairs with Turns",
      questions: l3ManufacturingStairsWithTurnsQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Fixing Stairs with Turns",
      questions: l3FixingStairsWithTurnsQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Principles of Maintenance and Repair",
      questions: l3PrinciplesOfMaintenanceAndRepairQuestions as readonly RawQuestion[],
    },
  ];

  const pools = sources
    .map(({ subtopic, questions }) => ({
      subtopic,
      questions: shuffleQuestions(
        questions.map((q) =>
          shuffleQuestionOptions(convertRawToMCQ(q, subtopic, "Level 3"))
        )
      ),
    }))
    .filter((pool) => pool.questions.length > 0);

  const selected: MCQQuestion[] = [];

  while (selected.length < count) {
    const availablePools = shuffleArray(
      pools.filter((pool) => pool.questions.length > 0)
    );

    if (availablePools.length === 0) {
      break;
    }

    for (const pool of availablePools) {
      if (selected.length >= count) {
        break;
      }

      const nextQuestion = pool.questions.pop();
      if (nextQuestion) {
        selected.push(nextQuestion);
      }
    }
  }

  return shuffleQuestions(selected);
}

function buildAllLevelsMixedQuestionSet(count: number): MCQQuestion[] {
  const sources = [
    {
      subtopic: "Health and Safety",
      level: "Level 1",
      questions: healthSafetyQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Hand Tools",
      level: "Level 1",
      questions: handtoolsQuestions as unknown as readonly RawQuestion[],
    },
    {
      subtopic: "Power Tools",
      level: "Level 1",
      questions: powertoolsQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Principles of Building",
      level: "Level 1",
      questions: principlesOfBuildingQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Woodworking Joints",
      level: "Level 1",
      questions: woodworkingJointsQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Ironmongery and Fixings",
      level: "Level 1",
      questions: ironmongeryQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Health And Safety",
      level: "Level 2",
      questions: l2HealthAndSafetyQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Principles Of Construction",
      level: "Level 2",
      questions: l2PrinciplesOfConstructionQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Structural Carpentry",
      level: "Level 2",
      questions: l2StructuralCarpentryQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Non-structural Carpentry Prior To Plastering",
      level: "Level 2",
      questions: l2NonStructuralCarpentryPriorToPlasterQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Non-structural Carpentry After Plastering",
      level: "Level 2",
      questions: l2NonStructuralCarpentryAfterPlasterQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Timber Technology And Woodworking Machinery",
      level: "Level 2",
      questions: l2TimberTechnologyWoodworkingMachineryQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Planning and Preparation For Architectural Joinery",
      level: "Level 2",
      questions: l2ArchitecturalJoineryQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Architectural Joinery Component Production, Assembly and Finishing",
      level: "Level 2",
      questions: l2AjComponentProductionAssemblyFinishingQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Health and Safety",
      level: "Level 3",
      questions: l3HealthAndSafetyQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Planning and Pricing Construction Work",
      level: "Level 3",
      questions: l3PricingConstructionJobsQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Fixed and Transportable Machinery",
      level: "Level 3",
      questions: l3UsingMachineryQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Constructing cut roofing",
      level: "Level 3",
      questions: l3ConstructingCutRoofQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Fitting Doors, Windows and their furnishings",
      level: "Level 3",
      questions: l3FittingDoorsWindowsFurnitureQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Manufacturing Curved Joinery",
      level: "Level 3",
      questions: l3ManufacturingCurvedJoineryQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Manufacturing Stairs with Turns",
      level: "Level 3",
      questions: l3ManufacturingStairsWithTurnsQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Fixing Stairs with Turns",
      level: "Level 3",
      questions: l3FixingStairsWithTurnsQuestions as readonly RawQuestion[],
    },
    {
      subtopic: "Principles of Maintenance and Repair",
      level: "Level 3",
      questions: l3PrinciplesOfMaintenanceAndRepairQuestions as readonly RawQuestion[],
    },
  ];

  const pools = sources
    .map(({ subtopic, level, questions }) => ({
      subtopic,
      questions: shuffleQuestions(
        questions.map((q) =>
          shuffleQuestionOptions(convertRawToMCQ(q, subtopic, level))
        )
      ),
    }))
    .filter((pool) => pool.questions.length > 0);

  const selected: MCQQuestion[] = [];

  while (selected.length < count) {
    const availablePools = shuffleArray(
      pools.filter((pool) => pool.questions.length > 0)
    );

    if (availablePools.length === 0) {
      break;
    }

    for (const pool of availablePools) {
      if (selected.length >= count) {
        break;
      }

      const nextQuestion = pool.questions.pop();
      if (nextQuestion) {
        selected.push(nextQuestion);
      }
    }
  }

  return shuffleQuestions(selected);
}

function buildQuestionSet(levelParam: string, topicParam: string, count: number): MCQQuestion[] {
  const normalizedLevel = levelParam.trim().toLowerCase();
  const normalizedTopic = topicParam.trim().toLowerCase();

  if (
    (normalizedLevel === "1" || normalizedLevel === "level 1") &&
    (normalizedTopic === "level 1 multiple choice" ||
      normalizedTopic === "level1 multiple choice" ||
      normalizedTopic === "level 1 multiple-choice")
  ) {
    return buildLevel1MixedQuestionSet(count);
  }

  if (
    (normalizedLevel === "2" || normalizedLevel === "level 2") &&
    (normalizedTopic === "level 2 multiple choice" ||
      normalizedTopic === "level2 multiple choice" ||
      normalizedTopic === "level 2 multiple-choice")
  ) {
    return buildLevel2MixedQuestionSet(count);
  }

  if (
    (normalizedLevel === "3" || normalizedLevel === "level 3") &&
    (normalizedTopic === "level 3 multiple choice" ||
      normalizedTopic === "level3 multiple choice" ||
      normalizedTopic === "level 3 multiple-choice")
  ) {
    return buildLevel3MixedQuestionSet(count);
  }

  if (
    normalizedLevel === "mixed" &&
    normalizedTopic === "mixed level multiple choice"
  ) {
    return buildAllLevelsMixedQuestionSet(count);
  }

  const converted = buildMCQListForTopic(levelParam, topicParam);
  return shuffleQuestions(converted).slice(0, count);
}

function formatElapsed(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  return `${mm}:${ss}`;
}

function getSourceBankFromSubtopic(subtopic: string) {
  const normalized = subtopic.trim().toLowerCase();
  switch (normalized) {
    case "woodworking joints":
      return "woodworkingjoints";
    case "power tools":
      return "powertools";
    case "principles of building":
      return "principlesofbuilding";
    case "ironmongery and fixings":
      return "ironmongeryandfixings";
    case "health and safety":
      return "healthAndSafety";
    case "hand tools":
      return "handtools";
    default:
      return "unknown";
  }
}

function getReportDocId(question: MCQQuestion) {
  return encodeURIComponent(`${question.subtopic}::${question.id}`);
}

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 9999.99) * 10000;
  return x - Math.floor(x);
}

function Confetti({ show }: { show: boolean }) {
  const pieces = useMemo(() => {
    return Array.from({ length: 40 }, (_, index) => ({
      id: index,
      left: pseudoRandom(index + 1) * 100,
      delay: pseudoRandom(index + 101) * 0.8,
      duration: 2.2 + pseudoRandom(index + 201) * 1.2,
      rotation: pseudoRandom(index + 301) * 360,
      size: 6 + pseudoRandom(index + 401) * 6,
    }));
  }, []);

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
  return <TopicQuizPageContent />;
}

function TopicQuizPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const levelParam = searchParams.get("level") ?? "";
  const topicParam = searchParams.get("topic") ?? "";
  const countParam = searchParams.get("count") ?? "10";
  const mode = searchParams.get("mode") ?? "";
  const attemptId = searchParams.get("attemptId") ?? "";
  const isNewAttempt = searchParams.get("new") === "1";
  const exitHref =
    levelParam === "1" || levelParam.toLowerCase() === "level 1"
      ? "/lessons?level=1"
      : levelParam === "2" || levelParam.toLowerCase() === "level 2"
        ? "/lessons?level=2"
        : levelParam === "3" || levelParam.toLowerCase() === "level 3"
          ? "/lessons?level=3"
          : "/lessons";

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

  const isSupportedTopic = useMemo(() => {
    const normalizedLevel = levelParam.trim().toLowerCase();
    const normalizedTopic = topicParam.trim().toLowerCase();
    const supportedByLevel: Record<string, Set<string>> = {
      "1": new Set([
        "health and safety",
        "hand tools",
        "power tools",
        "woodworking joints",
        "ironmongery and fixings",
        "principles of building",
        "level 1 multiple choice",
        "level1 multiple choice",
        "level 1 multiple-choice",
      ]),
      "level 1": new Set([
        "health and safety",
        "hand tools",
        "power tools",
        "woodworking joints",
        "ironmongery and fixings",
        "principles of building",
        "level 1 multiple choice",
        "level1 multiple choice",
        "level 1 multiple-choice",
      ]),
      "2": new Set([
        "health and safety",
        "principles of construction",
        "structural carpentry",
        "non-structural carpentry prior to plastering",
        "non-structural carpentry after plastering",
        "timber technology and woodworking machinery",
        "planning and preparation for architectural joinery",
        "architectural joinery component production, assembly and finishing",
        "level 2 multiple choice",
        "level2 multiple choice",
        "level 2 multiple-choice",
      ]),
      "level 2": new Set([
        "health and safety",
        "principles of construction",
        "structural carpentry",
        "non-structural carpentry prior to plastering",
        "non-structural carpentry after plastering",
        "timber technology and woodworking machinery",
        "planning and preparation for architectural joinery",
        "architectural joinery component production, assembly and finishing",
        "level 2 multiple choice",
        "level2 multiple choice",
        "level 2 multiple-choice",
      ]),
      "3": new Set([
        "health and safety",
        "planning and pricing construction work",
        "fixed and transportable machinery",
        "constructing cut roofing",
        "fitting doors, windows and their furnishings",
        "manufacturing curved joinery",
        "manufacturing stairs with turns",
        "fixing stairs with turns",
        "principles of maintenance and repair",
        "level 3 multiple choice",
        "level3 multiple choice",
        "level 3 multiple-choice",
      ]),
      "level 3": new Set([
        "health and safety",
        "planning and pricing construction work",
        "fixed and transportable machinery",
        "constructing cut roofing",
        "fitting doors, windows and their furnishings",
        "manufacturing curved joinery",
        "manufacturing stairs with turns",
        "fixing stairs with turns",
        "principles of maintenance and repair",
        "level 3 multiple choice",
        "level3 multiple choice",
        "level 3 multiple-choice",
      ]),
      mixed: new Set(["mixed level multiple choice"]),
    };

    return supportedByLevel[normalizedLevel]?.has(normalizedTopic) ?? false;
  }, [levelParam, topicParam]);

  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [view, setView] = useState<"quiz" | "review" | "result">("quiz");
  const [score, setScore] = useState<number | null>(null);
  const [lastQuizIndex, setLastQuizIndex] = useState(0);
  const [isFlaggedPreviewMode, setIsFlaggedPreviewMode] = useState(false);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [finishedAt, setFinishedAt] = useState<number | null>(null);
  const [historyMissing, setHistoryMissing] = useState(false);
  const [legacyAttempt, setLegacyAttempt] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState<string | null>(null);
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [historyPercent, setHistoryPercent] = useState<number | null>(null);
  const [resumeData, setResumeData] = useState<QuizSavedState | null>(null);
  const [resumeStatus, setResumeStatus] = useState<
    "checking" | "prompt" | "ready"
  >("checking");
  const [reportingByQuestion, setReportingByQuestion] = useState<
    Record<string, boolean>
  >({});
  const [reportedByQuestion, setReportedByQuestion] = useState<
    Record<string, boolean>
  >({});
  const [reportError, setReportError] = useState<string | null>(null);
  const [planReady, setPlanReady] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const passMark = 75;

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

  const isLockedForFreePlan = useMemo(() => {
    if (isHistory) {
      return false;
    }

    return isTopicLockedForFreePlan(levelParam, topicParam);
  }, [isHistory, levelParam, topicParam]);

  useEffect(() => {
    if (!planReady || isHistory) {
      return;
    }

    if (!isPro && isLockedForFreePlan) {
      router.replace("/account");
    }
  }, [isHistory, isLockedForFreePlan, isPro, planReady, router]);

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
      if (!isSupportedTopic || questions.length === 0) {
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
      isSupportedTopic,
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
      if (isSupportedTopic) {
        setQuestions(buildQuestionSet(level, topic, count));
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
    if (!isSupportedTopic) {
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
  }, [count, isSupportedTopic, isHistory, isNewAttempt, level, storageKey, topic]);

  useEffect(() => {
    if (!isHistory) {
      setHistoryMissing(false);
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
      const list = (
        Array.isArray(parsed)
          ? parsed
          : Array.isArray((parsed as { attempts?: unknown[] })?.attempts)
            ? (parsed as { attempts: unknown[] }).attempts
            : Array.isArray((parsed as { items?: unknown[] })?.items)
              ? (parsed as { items: unknown[] }).items
              : []
      ) as HistoryAttemptLike[];
      const attempt = list.find((item) =>
        item?.id === attemptId ||
        item?.attemptId === attemptId ||
        item?.attempt_id === attemptId ||
        item?.sessionId === attemptId
      );
      const questions = (
        Array.isArray(attempt?.questions)
          ? attempt.questions
          : Array.isArray(attempt?.data?.questions)
            ? attempt.data.questions
            : Array.isArray(attempt?.session?.questions)
              ? attempt.session.questions
              : []
      ) as MCQQuestion[];
      const answers =
        attempt?.answers && typeof attempt.answers === "object"
          ? attempt.answers
          : attempt?.data?.answers && typeof attempt.data.answers === "object"
            ? attempt.data.answers
            : attempt?.session?.answers &&
                typeof attempt.session.answers === "object"
              ? attempt.session.answers
              : {};
      const directFlagged = attempt?.flagged ?? {};
      const dataFlagged = attempt?.data?.flagged ?? {};
      const flaggedIds =
        Array.isArray(attempt?.flaggedIds)
          ? attempt.flaggedIds
          : Array.isArray(attempt?.data?.flaggedIds)
            ? attempt.data.flaggedIds
            : Array.isArray(attempt?.session?.flaggedIds)
              ? attempt.session.flaggedIds
              : attempt?.flagged && typeof attempt.flagged === "object"
                ? Object.keys(directFlagged).filter((id) =>
                    Boolean(directFlagged[id])
                  )
                : attempt?.data?.flagged &&
                    typeof attempt.data.flagged === "object"
                  ? Object.keys(dataFlagged).filter((id) =>
                      Boolean(dataFlagged[id])
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
      setQuestions(questions);
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
    if (!isSupportedTopic) {
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
    setQuestions(buildQuestionSet(level, topic, count));
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
  }, [count, isSupportedTopic, isHistory, level, topic]);

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
  }, [isHistory, isRunning, startedAt]);

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
    if (resumeStatus !== "ready") {
      return;
    }
    if (view !== "quiz") {
      return;
    }
    if (questions.length === 0) {
      return;
    }
    if (startedAt) {
      return;
    }
    setStartedAt(Date.now());
    setIsRunning(true);
  }, [isHistory, questions.length, resumeStatus, startedAt, view]);

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
    if (!isSupportedTopic || isHistory) {
      return;
    }
    clearSavedSession();
    setQuestions(buildQuestionSet(level, topic, count));
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
  }, [clearSavedSession, count, isSupportedTopic, isHistory, level, topic]);

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

  const handleExitToLevelTopics = useCallback(() => {
    if (isHistory) {
      return;
    }
    clearSavedSession();
    router.push(exitHref);
  }, [clearSavedSession, exitHref, isHistory, router]);

  const handleReportQuestion = useCallback(
    async (question: MCQQuestion) => {
      const reportId = getReportDocId(question);
      if (reportingByQuestion[reportId] || reportedByQuestion[reportId]) {
        return;
      }
      const reporter = auth.currentUser;
      if (!reporter) {
        setReportError("Sign in to report questions.");
        return;
      }
      setReportError(null);
      setReportingByQuestion((prev) => ({ ...prev, [reportId]: true }));
      const timestamp = Date.now();
      const reportRef = doc(db, "questionReports", reportId);
      try {
        await setDoc(
          reportRef,
          {
            reportId,
            questionId: question.id,
            questionText: question.question,
            subtopic: question.subtopic,
            level: question.level,
            sourceLessonId: question.sourceLessonId ?? null,
            sourceBank: getSourceBankFromSubtopic(question.subtopic),
            reportCount: increment(1),
            createdAtMs: timestamp,
            lastReportedAtMs: timestamp,
            lastReportedByEmail: reporter.email ?? null,
            lastReportedByUid: reporter.uid ?? null,
          },
          { merge: true }
        );

        const eventRef = doc(collection(db, "questionReports", reportId, "events"));
        await setDoc(eventRef, {
          reportedAtMs: timestamp,
          reporterEmail: reporter.email ?? null,
          reporterUid: reporter.uid ?? null,
          questionId: question.id,
          questionText: question.question,
          subtopic: question.subtopic,
          sourceBank: getSourceBankFromSubtopic(question.subtopic),
          quizTopic: topic,
          quizLevel: level,
        });

        setReportedByQuestion((prev) => ({ ...prev, [reportId]: true }));
      } catch (error) {
        console.error("Failed to report question:", error);
        setReportError("Could not submit your report. Please try again.");
      } finally {
        setReportingByQuestion((prev) => ({ ...prev, [reportId]: false }));
      }
    },
    [level, reportedByQuestion, reportingByQuestion, topic]
  );

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
  const renderReportButton = (question: MCQQuestion, compact = false) => {
    const reportId = getReportDocId(question);
    const isReporting = !!reportingByQuestion[reportId];
    const isReported = !!reportedByQuestion[reportId];
    return (
      <button
        type="button"
        onClick={() => handleReportQuestion(question)}
        disabled={isReporting || isReported}
        className={`rounded-full border px-3 py-1 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
          isReported
            ? "border-teal-400/60 bg-teal-500/15 text-teal-200"
            : "border-sky-300/40 bg-sky-500/10 text-sky-200 hover:border-sky-200/60"
        } ${compact ? "text-[11px]" : ""}`}
      >
        {isReporting ? "Reporting..." : isReported ? "Reported" : "Report question"}
      </button>
    );
  };

  if (!isSupportedTopic && !isHistory) {
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
        <div className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-8" />
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
        <div className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-8" />
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
                          setIsFlaggedPreviewMode(true);
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
            {reportError ? (
              <p className="mt-4 text-sm text-red-300">{reportError}</p>
            ) : null}
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
                          className={`rounded-full border px-3 py-1 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 ${
                            isFlagged
                              ? "border-teal-400/60 bg-teal-500/15 text-teal-200"
                              : "border-white/10 bg-white/5 text-[var(--muted)] hover:border-white/20"
                          }`}
                        >
                          {isFlagged ? "Flagged" : "Flag"} {isFlagged ? "🚩" : ""}
                        </button>
                      ) : null}
                      {renderReportButton(question, true)}
                    </div>
                    {isFlagged ? (
                      <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-teal-400/50 bg-teal-500/10 px-2 py-0.5 text-[10px] text-teal-200">
                        🚩 Flagged
                      </span>
                    ) : null}
                    <div className="mt-4 grid gap-3">
                      {question.options.map((option, optionIndex) => {
                        const isSelected = selected === optionIndex;
                        const optionClass = isSelected
                          ? "border-teal-400 bg-teal-500/10 text-teal-200"
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
            {reportError ? (
              <p className="mt-3 text-sm text-red-300">{reportError}</p>
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
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                      <h2 className="text-base font-semibold text-white">
                        {question.question}
                      </h2>
                      {renderReportButton(question, true)}
                    </div>
                    {isFlagged ? (
                      <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-teal-400/50 bg-teal-500/10 px-2 py-0.5 text-[10px] text-teal-200">
                        🚩 Flagged
                      </span>
                    ) : null}
                    <p
                      className={`mt-3 text-sm ${
                        isCorrect
                          ? "text-teal-200"
                          : "text-red-200"
                      }`}
                    >
                      Your answer: {selectedText}
                    </p>
                    <p className="mt-1 text-sm text-teal-200">
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
              <div className="mt-6 flex flex-wrap justify-end gap-3">
                <button
                  type="button"
                  onClick={handleExitToLevelTopics}
                  className="btn-secondary"
                >
                  Exit
                </button>
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
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 ${
                    flagged[currentQuestion.id]
                      ? "border-teal-400/60 bg-teal-500/15 text-teal-200"
                      : "border-white/10 bg-white/5 text-[var(--muted)] hover:border-white/20"
                  }`}
                >
                  {flagged[currentQuestion.id] ? "Flagged 🚩" : "Flag"}
                </button>
              ) : null}
              {renderReportButton(currentQuestion)}
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {!isHistory && isFlaggedPreviewMode ? (
              <button
                type="button"
                onClick={() => {
                  setIsFlaggedPreviewMode(false);
                  setView("review");
                }}
                className="btn-secondary w-fit"
              >
                Back to preview
              </button>
            ) : null}
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedIndex === index;
              const stateClass = isSelected
                ? "border-teal-400 bg-teal-500/10 text-teal-200"
                : "border-white/10 bg-white/5 text-white hover:border-white/20";

              return (
                <button
                  key={`${currentQuestion.id}-${index}`}
                  type="button"
                  onClick={() => {
                    if (isHistory) {
                      return;
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
          {reportError ? (
            <p className="mt-3 text-sm text-red-300">{reportError}</p>
          ) : null}

          <div className="mt-6 grid grid-cols-3 items-center gap-2 sm:flex sm:flex-wrap sm:justify-between sm:gap-3">
            {!isHistory ? (
              <button
                type="button"
                onClick={handleSaveAndExit}
                className="btn-secondary min-w-0 px-2 py-2 text-xs whitespace-nowrap sm:px-4 sm:py-2.5 sm:text-sm"
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
              className="btn-secondary min-w-0 px-2 py-2 text-xs whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60 sm:px-4 sm:py-2.5 sm:text-sm"
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
                  setIsFlaggedPreviewMode(false);
                  setLastQuizIndex(currentIndex);
                  setView("review");
                  return;
                }
                setCurrentIndex((prev) =>
                  Math.min(prev + 1, questions.length - 1)
                );
              }}
              className="btn-secondary min-w-0 px-2 py-2 text-xs whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60 sm:px-4 sm:py-2.5 sm:text-sm"
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

