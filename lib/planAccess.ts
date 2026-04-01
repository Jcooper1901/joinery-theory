const FREE_LEVEL_TOPICS: Record<string, string[]> = {
  "1": ["health and safety", "principles of building"],
  "2": ["health and safety", "principles of construction"],
  "3": ["health and safety", "planning and pricing construction work"],
};

const FREE_LEVEL_1_MICRO_LESSONS = [
  "brick bonds and why joints must be staggered",
  "building regulations, specifications and schedules",
  "calculating concrete volume for strip foundations",
  "calculating wall area and sheet quantities",
  "communication in construction and the building team",
];

function normalizeLevel(level: string) {
  const normalized = level.trim().toLowerCase();
  if (normalized === "level 1") return "1";
  if (normalized === "level 2") return "2";
  if (normalized === "level 3") return "3";
  if (normalized === "mixed") return "mixed";
  return normalized;
}

function normalizeTopic(topic: string) {
  return topic.trim().toLowerCase();
}

export function getFreeTopicsForLevel(level: string) {
  const normalizedLevel = normalizeLevel(level);
  return FREE_LEVEL_TOPICS[normalizedLevel] ?? [];
}

export function isTopicLockedForFreePlan(level: string, topic: string) {
  const normalizedLevel = normalizeLevel(level);
  const normalizedTopic = normalizeTopic(topic);

  if (normalizedLevel === "mixed") {
    return true;
  }

  if (normalizedTopic.includes("multiple choice")) {
    return true;
  }

  const freeTopics = getFreeTopicsForLevel(normalizedLevel);
  if (freeTopics.length === 0) {
    return false;
  }

  return !freeTopics.includes(normalizedTopic);
}

export function isMicroLessonLevelLockedForFreePlan(level: string) {
  const normalizedLevel = normalizeLevel(level);
  return normalizedLevel === "2" || normalizedLevel === "3" || normalizedLevel === "mixed";
}

export function isMicroLessonLockedForFreePlan(level: string, lessonTitle: string) {
  const normalizedLevel = normalizeLevel(level);
  const normalizedTitle = normalizeTopic(lessonTitle);

  if (normalizedLevel === "1") {
    return !FREE_LEVEL_1_MICRO_LESSONS.includes(normalizedTitle);
  }

  return isMicroLessonLevelLockedForFreePlan(normalizedLevel);
}
