import { useEffect, useMemo, useState } from "react";
import type { NoteItem } from "../types";
import { useMood } from "../context/MoodContext";
import { moods } from "../data/moods";
import { readStorage, writeStorage } from "../lib/storage";
import { detectMoodFromText } from "../utils/personalization";

const STORAGE_KEY = "mood-mirror:notes";

function createNoteId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatDate(value: string) {
  return new Date(value).toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function useNotes() {
  const { mood, setMood } = useMood();
  const [notes, setNotes] = useState<NoteItem[]>(() => readStorage<NoteItem[]>(STORAGE_KEY, []));
  const [draft, setDraft] = useState("");

  useEffect(() => {
    writeStorage(STORAGE_KEY, notes);
  }, [notes]);

  const addNote = () => {
    const text = draft.trim();
    if (!text) return;

    const detectedMood = detectMoodFromText(text);
    const savedMood = detectedMood || mood;

    if (detectedMood && detectedMood !== mood) {
      setMood(detectedMood);
    }

    const newNote: NoteItem = {
      id: createNoteId(),
      text,
      createdAt: new Date().toISOString(),
      mood: savedMood,
    };

    setNotes((prev) => [newNote, ...prev]);
    setDraft("");
  };

  const removeNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const moodLabelMap = useMemo(
    () => Object.fromEntries(moods.map((item) => [item.key, item.label])) as Record<string, string>,
    []
  );

  return { notes, draft, setDraft, addNote, removeNote, formatDate, moodLabelMap };
}
