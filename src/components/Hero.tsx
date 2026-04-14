import { useNavigate } from "react-router-dom";
import { useMood } from "../context/MoodContext";
import { moods } from "../data/moods";
import { MoodSelector } from "./MoodSelector";
export function Hero() {
  const navigate = useNavigate();
  const { mood } = useMood();
  const current = moods.find((m) => m.key === mood)!;
  return (
    <section className="hero-card glass-panel fade-in">
      <div key={current.key} className="hero-bg-image hero-animate" style={{ backgroundImage: `url(${current.backgroundImage})` }} />
      <div className="hero-bg-gradient" />
      <div className="hero-content">
        <p className="eyebrow">Mood Mirror</p>
        <h1>Найди то, что подходит твоему состоянию.</h1>
        <p className="hero-text">Фильмы, музыка, книги, идеи, чем заняться, и поддержка — всё собрано так, чтобы интерфейс не спорил с твоим настроением, а подхватывал его.</p>
        <MoodSelector />
        <div className="hero-actions">
          <button className="primary-cta" onClick={() => navigate("/")}>Посмотреть подборки</button>
          <button className="secondary-cta" onClick={() => navigate("/favorites")}>Открыть избранное</button>
        </div>
      </div>
    </section>
  );
}
