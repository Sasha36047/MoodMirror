import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { MediaItem, MoodKey } from "../types";
import { useFavorites } from "../hooks/useFavorites";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  sideTitle: string;
  sideText: string;
  loadItems: (mood: MoodKey) => Promise<MediaItem[]>;
  mood: MoodKey;
};

const imageFallback = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%23263347"/><stop offset="1" stop-color="%23121421"/></linearGradient></defs><rect width="800" height="600" fill="url(%23g)"/><text x="50%25" y="50%25" text-anchor="middle" fill="%23dfe7f2" font-size="42" font-family="Arial, sans-serif">Mood Mirror</text></svg>`;

const reveal = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
};

export function TopTenFlowPage({
  eyebrow,
  title,
  description,
  sideTitle,
  sideText,
  loadItems,
  mood,
}: Props) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadItems(mood)
      .then((data) => setItems(data))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, [loadItems, mood]);

  const ranked = items.slice(0, 10);

  return (
    <div className="topten-page">
      <motion.section
        className="category-hero glass-panel"
        initial="hidden"
        animate="visible"
        variants={reveal}
      >
        <div className="category-hero-layout editorial-layout">
          <div className="category-side-card">
            <p className="eyebrow">{eyebrow}</p>
            <h3>{sideTitle}</h3>
            <p>{sideText}</p>
          </div>

          <div className="category-main-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="hero-copy">{description}</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="category-list-scene"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
      >
        <div className="notes-transition-line" />
        <section className="content-section glass-panel">
          <div className="section-header">
            <div>
              <h2>Top 10</h2>
              <p>Спокойный поток карточек: маленькая обложка слева, смысл и настроение справа.</p>
            </div>
          </div>

          <div className="topten-list">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <div key={i} className="rank-row rank-row-skeleton" />)
              : ranked.length ? ranked.map((item, index) => (
                  <motion.article
                    key={`${item.category}-${item.id}`}
                    className="rank-row"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.48, delay: index * 0.04 }}
                  >
                    <div className="rank-index">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <div className="rank-poster">
                      <img src={item.image || imageFallback} alt={item.title} onError={(event) => { event.currentTarget.src = imageFallback; }} />
                    </div>

                    <div className="rank-copy">
                      <div className="rank-copy-head">
                        <div>
                          <h3>{item.title}</h3>
                          {item.subtitle ? <p className="rank-subtitle">{item.subtitle}</p> : null}
                        </div>
                        <button
                          className={`favorite-button inline-favorite ${isFavorite(item) ? "favorite-button-active" : ""}`}
                          onClick={() => toggleFavorite(item)}
                          aria-label="Добавить в избранное"
                        >
                          ★
                        </button>
                      </div>

                      <p className="rank-description">
                        {item.description || "Подборка под текущее настроение без лишнего шума и перегруза."}
                      </p>

                      <div className="rank-meta">
                        {item.tag ? <span className="badge">{item.tag}</span> : null}
                        {item.source ? <span className="badge">{item.source}</span> : null}
                        {item.rating ? <span className="badge">★ {item.rating}</span> : null}
                      </div>
                    </div>
                  </motion.article>
                )) : <div className="notes-empty"><div className="notes-empty-orb">✦</div><h4>Пока здесь пусто.</h4><p>Не удалось загрузить подборку, но это можно поправить чуть позже.</p></div>}
          </div>
        </section>
      </motion.section>
    </div>
  );
}
