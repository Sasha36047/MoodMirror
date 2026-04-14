import { createContext, useContext, useMemo, useState, useEffect } from "react";
import type { MoodKey } from "../types";
import { moods } from "../data/moods";

type MoodContextValue = {
  mood: MoodKey;
  previousMood: MoodKey | null;
  setMood: (m: MoodKey) => void;
};

const MoodContext = createContext<MoodContextValue | undefined>(undefined);

export function MoodProvider({ children }: { children: React.ReactNode }) {
  const [mood, setMoodState] = useState<MoodKey>(() => (localStorage.getItem("mood-mirror:mood") as MoodKey) || "calm");
  const [previousMood, setPreviousMood] = useState<MoodKey | null>(
    () => (localStorage.getItem("mood-mirror:last-mood") as MoodKey) || null
  );

  const setMood = (nextMood: MoodKey) => {
    setPreviousMood(mood);
    localStorage.setItem("mood-mirror:last-mood", mood);
    setMoodState(nextMood);
  };

  useEffect(() => {
    localStorage.setItem("mood-mirror:mood", mood);
    const current = moods.find((m) => m.key === mood);
    if (current) {
      document.documentElement.style.setProperty("--accent", current.accent);
      document.documentElement.style.setProperty("--glow", current.glow);
    }
  }, [mood]);

  const value = useMemo(() => ({ mood, previousMood, setMood }), [mood, previousMood]);
  return <MoodContext.Provider value={value}>{children}</MoodContext.Provider>;
}

export function useMood() {
  const context = useContext(MoodContext);
  if (!context) throw new Error("useMood must be used inside MoodProvider");
  return context;
}
