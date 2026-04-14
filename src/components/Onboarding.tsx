import React from "react";
import { useMood } from "../context/MoodContext";
import { moods } from "../data/moods";

export function Onboarding({ onFinish }: { onFinish: () => void }) {
  const { setMood } = useMood();
  const [closing, setClosing] = React.useState(false);

  const finishWithMood = (key?: string) => {
    setClosing(true);
    setTimeout(() => {
      if (key) setMood(key as any);
      localStorage.setItem("mood-selected", "true");
      onFinish();
    }, 420);
  };

  return (
    <div className={`onboarding-screen ${closing ? "fade-out" : ""}`}>
      <div className="onboarding-background" />
      <div className="onboarding-card glass-panel fade-in">
        <p className="eyebrow">Mood Mirror</p>
        <h1>Выбери состояние, с которым начнётся экран.</h1>
        <p className="onboarding-copy">
          Никакой спешки. Просто выбери настроение — и пространство станет мягче и ближе к тебе.
        </p>

        <div className="onboarding-moods">
          {moods.map((m) => (
            <button
              key={m.key}
              className="onboarding-mood"
              onClick={() => finishWithMood(m.key)}
            >
              <span>{m.label}</span>
            </button>
          ))}
        </div>

        <button className="skip-btn" onClick={() => finishWithMood()}>
          Пропустить
        </button>
      </div>
    </div>
  );
}
