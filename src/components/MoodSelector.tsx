import { moods } from "../data/moods";
import { useMood } from "../context/MoodContext";

export function MoodSelector() {
  const { mood, setMood } = useMood();

  return (
    <div className="mood-selector mood-selector-line">
      {moods.map((item) => (
        <button
          key={item.key}
          className={`mood-pill ${item.key === mood ? "mood-pill-active" : ""}`}
          onClick={() => setMood(item.key)}
          style={{
            boxShadow:
              item.key === mood
                ? `0 0 0 1px ${item.accent}, 0 14px 38px ${item.glow}`
                : undefined,
          }}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
