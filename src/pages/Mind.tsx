import { motion } from "framer-motion";
import { useMood } from "../context/MoodContext";
import { supportByMood } from "../data/support";
import { useFavorites } from "../hooks/useFavorites";

const reveal = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export function MindPage() {
  const { mood } = useMood();
  const { toggleFavorite, isFavorite } = useFavorites();
  const items = supportByMood[mood];

  return (
    <div className="support-page">
      <motion.section className="category-hero glass-panel" initial="hidden" animate="visible" variants={reveal}>
        <div className="support-page-hero">
          <div className="support-hero-copy">
            <p className="eyebrow">Поддержка</p>
            <h1>Небольшие опоры, которые не спорят с твоим состоянием.</h1>
            <p className="hero-copy">
              Здесь нет тяжёлого каталога. Только короткие мягкие карточки, которые помогают сохранить ритм,
              выдохнуть и не перегружать день.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="support-masonry-scene glass-panel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
      >
        <div className="support-masonry-head">
          <div>
            <p className="eyebrow">Сейчас может помочь</p>
            <h2>Мягкий шахматный ритм</h2>
          </div>
        </div>

        <div className="support-staggered-grid">
          {items.map((item, index) => (
            <motion.article
              key={`${item.category}-${item.id}`}
              className={`support-stagger-card ${index % 2 ? "support-stagger-card-offset" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="support-stagger-thumb">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="support-stagger-copy">
                <div className="support-stagger-meta">
                  {item.tag ? <span className="badge">{item.tag}</span> : null}
                </div>

                <h3>{item.title}</h3>
                {item.subtitle ? <p>{item.subtitle}</p> : null}
                <span>{item.description}</span>

                <button
                  className={`favorite-button support-inline-favorite ${isFavorite(item) ? "favorite-button-active" : ""}`}
                  onClick={() => toggleFavorite(item)}
                  aria-label="Добавить в избранное"
                >
                  ★
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
