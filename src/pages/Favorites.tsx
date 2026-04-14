import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useFavorites } from "../hooks/useFavorites";
import { favoriteCategoryLabels, favoriteMoodLabels, favoriteMoodOrder } from "../data/favoritesConfig";
import type { MediaCategory } from "../types";
import { revealUpBlur } from "../lib/animations";

export function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const [category, setCategory] = useState<"all" | MediaCategory>("all");

  const filtered = useMemo(
    () => favorites.filter((item) => category === "all" || item.category === category),
    [favorites, category]
  );

  const grouped = useMemo(
    () =>
      favoriteMoodOrder
        .map((mood) => ({
          mood,
          label: favoriteMoodLabels[mood],
          items: filtered.filter((item) => item.savedMood === mood),
        }))
        .filter((group) => group.items.length > 0),
    [filtered]
  );

  return (
    <div className="favorites-page">
      <motion.section className="category-hero glass-panel" initial="hidden" animate="visible" variants={revealUpBlur}>
        <div className="favorites-hero">
          <div className="favorites-copy">
            <p className="eyebrow">Избранное</p>
            <h1>Личная коллекция того, к чему хочется вернуться.</h1>
            <p className="hero-copy">
              Здесь всё собрано спокойнее и компактнее: без рейтингов и больших плиток, только сохранённые вещи,
              которые действительно откликнулись.
            </p>
          </div>

          <div className="favorites-filters">
            {favoriteCategoryLabels.map((item) => (
              <button
                key={item.key}
                className={`chip-filter ${category === item.key ? "chip-filter-active" : ""}`}
                onClick={() => setCategory(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="favorites-collection glass-panel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={revealUpBlur}
      >
        {grouped.length === 0 ? (
          <div className="favorites-empty">
            <div className="favorites-empty-orb">★</div>
            <h2>Пока здесь тихо.</h2>
            <p>Когда начнёшь сохранять фильмы, музыку, книги и опоры, они появятся здесь аккуратной коллекцией.</p>
          </div>
        ) : (
          <div className="favorites-mood-sections">
            {grouped.map((group) => (
              <section key={group.mood} className="favorites-mood-block">
                <div className="favorites-mood-head">
                  <p className="eyebrow">Настроение</p>
                  <h2>{group.label}</h2>
                </div>

                <div className="favorites-library-grid">
                  {group.items.map((item, index) => (
                    <motion.article
                      key={`${item.category}-${item.id}-${item.savedMood || "none"}-${index}`}
                      className="favorite-library-card"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                    >
                      <button
                        className="favorite-remove-button"
                        onClick={() => toggleFavorite(item)}
                        aria-label="Убрать из избранного"
                      >
                        ×
                      </button>

                      <div className="favorite-library-thumb">
                        <img src={item.image || imageFallback} alt={item.title} onError={(event) => { event.currentTarget.src = imageFallback; }} />
                      </div>

                      <div className="favorite-library-copy">
                        <div className="favorite-library-meta">
                          {item.category ? (
                            <span className="badge">
                              {favoriteCategoryLabels.find((entry) => entry.key === item.category)?.label || item.category}
                            </span>
                          ) : null}
                          {item.tag ? <span className="badge">{item.tag}</span> : null}
                        </div>

                        <h3>{item.title}</h3>
                        {item.subtitle ? <p className="favorite-library-subtitle">{item.subtitle}</p> : null}
                        <p className="favorite-library-description">
                          {item.description || "Сохранённая вещь, к которой захочется вернуться чуть позже."}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </motion.section>
    </div>
  );
}
