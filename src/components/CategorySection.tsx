import type { MediaItem } from "../types";
import { MediaCard } from "./MediaCard";
import { SectionHeader } from "./SectionHeader";
type Props = { title: string; subtitle: string; items: MediaItem[];
  loading?: boolean; to?: string; onToggleFavorite?: (item: MediaItem) => void; isFavorite?: (item: MediaItem) => boolean; };
export function CategorySection({ title, subtitle, items, to, onToggleFavorite, isFavorite, loading }: Props) {
  return (
    <section className="content-section glass-panel">
      <SectionHeader title={title} subtitle={subtitle} to={to} />
      <div className="media-grid">
        {loading
  ? Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="media-card skeleton-card"></div>
    ))
  : items.map((item) => (
      <MediaCard key={`${item.category}-${item.id}`} item={item} onToggleFavorite={onToggleFavorite} favorite={isFavorite?.(item)} />
    ))}
      </div>
    </section>
  );
}
