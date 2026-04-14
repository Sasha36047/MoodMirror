import type { MoodKey } from "../types";

const rules: Array<{ mood: MoodKey; pattern: RegExp }> = [
  { mood: "tired", pattern: /устал|устала|нет сил|выгорел|выгорела|измотан|измотана|хочу спать|сонный|сонная/i },
  { mood: "stressed", pattern: /стресс|напряжение|тревога|тревожно|давление|паника|нервы/i },
  { mood: "sad", pattern: /грусть|печаль|одиноко|плохо|тоскливо|тоска|пусто на душе/i },
  { mood: "energetic", pattern: /энергия|заряд|заряжен|заряжена|мотивация|хочу действовать|огонь/i },
  { mood: "calm", pattern: /спокойно|тихо|медленно|умиротворение|мягко|хочу тишины|выдохнуть/i },
  { mood: "happy", pattern: /радост|счастл|вдохнов|легко|кайф|здорово|хорошо/i },
];

export function detectMoodFromText(text: string): MoodKey | null {
  const value = text.trim().toLowerCase();
  if (!value) return null;

  for (const rule of rules) {
    if (rule.pattern.test(value)) return rule.mood;
  }
  return null;
}
