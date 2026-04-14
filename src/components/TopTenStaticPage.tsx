import { motion } from "framer-motion";
import type { MediaItem } from "../types";
import { useFavorites } from "../hooks/useFavorites";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  sideTitle: string;
  sideText: string;
  items: MediaItem[];
};

const reveal = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
};

export function TopTenStaticPage({ eyebrow, title, description, sideTitle, sideText, items }: Props) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const ranked = items.slice(0, 10);

  return (
    <div className="topten-page">
      <motion.section className="category-hero glass-panel" initial="hidden" animate="visible" variants={reveal}>
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

      <motion.section className="category-list-scene" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
        <div className="notes-transition-line" />
        <section className="content-section glass-panel">
          <div className="section-header">
            <div>
              <h2>Top 10</h2>
              <p>Небольшая карточка слева, смысл и короткое описание справа.</p>
            </div>
          </div>

          <div className="topten-list">
            {ranked.map((item, index) => (
              <motion.article
                key={`${item.category}-${item.id}`}
                className="rank-row"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.48, delay: index * 0.04 }}
              >
                <div className="rank-index"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="rank-poster"><img src={item.image} alt={item.title} /></div>
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

                  <p className="rank-description">{item.description || "Подборка без лишнего шума и перегруза."}</p>

                  <div className="rank-meta">
                    {item.tag ? <span className="badge">{item.tag}</span> : null}
                    {item.source ? <span className="badge">{item.source}</span> : null}
                    {item.rating ? <span className="badge">★ {item.rating}</span> : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </motion.section>
    </div>
  );
}
