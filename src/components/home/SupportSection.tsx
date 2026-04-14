import { motion } from "framer-motion";
import { MediaCard } from "../MediaCard";
import type { MediaItem } from "../../types";
import { revealUpBlur } from "../../lib/animations";

interface SupportSectionProps {
  items: MediaItem[];
  toggleFavorite: (item: MediaItem) => void;
  isFavorite: (item: MediaItem) => boolean;
}

export function SupportSection({ items, toggleFavorite, isFavorite }: SupportSectionProps) {
  return (
    <motion.section
      className="support-scene snap-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealUpBlur}
    >
      <div className="section-center section-center-wide">
        <div className="glass-panel support-scene-panel">
          <div className="section-head support-head">
            <div>
              <p className="eyebrow">Тихая опора</p>
              <h2>Поддержка на сейчас</h2>
              <p className="support-copy">
                Небольшие карточки и короткие мысли, которые помогают собраться, выдохнуть и не спорят с твоим состоянием.
              </p>
            </div>
          </div>

          <div className="support-layout">
            <div className="support-info">
              <div className="support-text-card">
                <h3>Мягкий ритм вместо давления</h3>
                <p>
                  Здесь нет ощущения, что нужно срочно стать продуктивнее. Этот блок задуман как спокойная пауза:
                  несколько маленьких опор, немного воздуха и пространство для выдоха.
                </p>
              </div>
            </div>

            <div className="support-cards">
              {items.slice(0, 3).map((item, index) => (
                <motion.div
                  key={`${item.category}-${item.id}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                >
                  <MediaCard item={item} onToggleFavorite={toggleFavorite} favorite={isFavorite(item)} compact />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
