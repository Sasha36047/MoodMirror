import { motion } from "framer-motion";
import { MoodSelector } from "../MoodSelector";
import type { MoodKey } from "../../types";
import { revealUpBlur } from "../../lib/animations";

interface HeroSectionProps {
  currentMood: {
    label: string;
    subtitle: string;
  };
  mood: MoodKey;
  moodPhrase: string;
  personalization: string;
}

export function HeroSection({ currentMood, moodPhrase, personalization }: HeroSectionProps) {
  return (
    <motion.section
      className="hero-stage glass-panel hero-stage-full snap-section"
      initial="hidden"
      animate="visible"
      variants={revealUpBlur}
    >
      <div className="hero-topbar">
        <span className="hero-brand-pill">Mood Mirror</span>
        <span className="hero-chip">{currentMood.label}</span>
      </div>

      <div className="hero-layout">
        <motion.div
          className="hero-info-card"
          initial={{ opacity: 0, x: -18, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          <p>Сегодня тебе может подойти:</p>
          <strong>{moodPhrase}</strong>
        </motion.div>

        <div className="hero-copy-block hero-copy-block-refined">
          <p className="eyebrow">Mood based recommendations</p>
          <h1>Найди то, что откликается именно сейчас.</h1>
          <p className="hero-copy">{personalization}</p>
          <p className="hero-copy hero-copy-secondary">
            Фильмы, музыка, книги, идеи для паузы и личные заметки — всё собрано в одном спокойном
            пространстве, чтобы не перегружать, а мягко поддерживать твой день.
          </p>
          <MoodSelector />
        </div>

        <motion.div
          className="hero-info-card hero-info-card-right"
          initial={{ opacity: 0, x: 18, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
        >
          <p>Фокус экрана</p>
          <strong>{currentMood.subtitle}</strong>
        </motion.div>
      </div>
    </motion.section>
  );
}
