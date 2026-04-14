import { useEffect, useState } from "react";
import type { MediaItem, MoodKey } from "../types";
import { useFavorites } from "../hooks/useFavorites";
import { MediaCard } from "./MediaCard";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  sideTitle: string;
  sideText: string;
  loadItems: (mood: MoodKey) => Promise<MediaItem[]>;
  mood: MoodKey;
};

export function CategoryFlowPage({
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

  return (
    <div className="category-flow-page">
      <section className="category-hero glass-panel fade-in">
        <div className="category-hero-layout">
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
      </section>

      <section className="category-list-scene fade-in">
        <div className="notes-transition-line" />
        <section className="content-section glass-panel">
          <div className="section-header">
            <div>
              <h2>{title}</h2>
              <p>Листай ниже — все карточки собраны в одном спокойном потоке.</p>
            </div>
          </div>

          <div className="category-grid">
            {loading
              ? Array.from({ length: 9 }).map((_, i) => <div key={i} className="media-card skeleton-card" />)
              : items.map((item) => (
                  <MediaCard
                    key={`${item.category}-${item.id}`}
                    item={item}
                    onToggleFavorite={toggleFavorite}
                    favorite={isFavorite(item)}
                  />
                ))}
          </div>
        </section>
      </section>
    </div>
  );
}
