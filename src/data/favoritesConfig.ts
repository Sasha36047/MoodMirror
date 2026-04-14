import type { MediaCategory, MoodKey } from "../types";

export const favoriteCategoryLabels: Array<{ key: "all" | MediaCategory; label: string }> = [
  { key: "all", label: "Всё" },
  { key: "movies", label: "Фильмы" },
  { key: "music", label: "Музыка" },
  { key: "books", label: "Книги" },
  { key: "activities", label: "Чем заняться" },
  { key: "mind", label: "Поддержка" },
];

export const favoriteMoodLabels: Record<MoodKey, string> = {
  calm: "Спокойствие",
  happy: "Радость",
  energetic: "Энергия",
  sad: "Грусть",
  tired: "Усталость",
  stressed: "Стресс",
};

export const favoriteMoodOrder: MoodKey[] = ["calm", "happy", "energetic", "sad", "tired", "stressed"];
