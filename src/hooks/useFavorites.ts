import { useEffect, useMemo, useState } from "react";
import type { MediaItem } from "../types";
import { useMood } from "../context/MoodContext";
import { readStorage, writeStorage } from "../lib/storage";

const STORAGE_KEY = "mood-mirror:favorites";

function buildFavoriteKey(item: Pick<MediaItem, "category" | "id" | "savedMood">, mood: string) {
  return `${item.category}-${item.id}-${item.savedMood || mood}`;
}

export function useFavorites() {
  const { mood } = useMood();
  const [favorites, setFavorites] = useState<MediaItem[]>(() => readStorage<MediaItem[]>(STORAGE_KEY, []));

  useEffect(() => {
    writeStorage(STORAGE_KEY, favorites);
  }, [favorites]);

  const ids = useMemo(
    () => new Set(favorites.map((item) => buildFavoriteKey(item, item.savedMood || ""))),
    [favorites]
  );

  const isFavorite = (item: MediaItem) => ids.has(buildFavoriteKey(item, mood));

  const toggleFavorite = (item: MediaItem) => {
    setFavorites((prev) => {
      const key = buildFavoriteKey(item, mood);
      const exists = prev.some((saved) => buildFavoriteKey(saved, saved.savedMood || "") === key);

      if (exists) {
        return prev.filter((saved) => buildFavoriteKey(saved, saved.savedMood || "") !== key);
      }

      return [{ ...item, savedMood: mood }, ...prev];
    });
  };

  return { favorites, isFavorite, toggleFavorite };
}
