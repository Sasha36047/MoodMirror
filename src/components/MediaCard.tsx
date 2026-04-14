import type { MediaItem } from "../types";

const imageFallback = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%23263347"/><stop offset="1" stop-color="%23121421"/></linearGradient></defs><rect width="800" height="600" fill="url(%23g)"/><text x="50%25" y="50%25" text-anchor="middle" fill="%23dfe7f2" font-size="42" font-family="Arial, sans-serif">Mood Mirror</text></svg>`;

type Props = {
  item: MediaItem;
  onToggleFavorite?: (item: MediaItem) => void;
  favorite?: boolean;
  compact?: boolean;
};

export function MediaCard({ item, onToggleFavorite, favorite, compact }: Props) {
  return (
    <article className={`media-card fade-in ${compact ? "media-card-compact" : ""}`}>
      <div className="media-image-wrap">
        <img
          className="media-image"
          src={item.image || imageFallback}
          alt={item.title}
          onError={(event) => {
            event.currentTarget.src = imageFallback;
          }}
        />
        <div className="media-overlay netflix-overlay">
          <div className="media-badges">
            {item.tag && <span className="badge">{item.tag}</span>}
            {item.rating ? <span className="badge">★ {item.rating}</span> : null}
          </div>
          {onToggleFavorite ? (
            <button
              className={`favorite-button ${favorite ? "favorite-button-active" : ""}`}
              onClick={() => onToggleFavorite(item)}
              aria-label="Добавить в избранное"
            >
              ★
            </button>
          ) : null}
          <div className="media-hover-content">
            <h4>{item.title}</h4>
            {item.subtitle ? <p>{item.subtitle}</p> : null}
            {item.description ? <span>{item.description}</span> : null}
          </div>
        </div>
      </div>
      <div className="media-content">
        <h3>{item.title}</h3>
        {item.subtitle && <p className="media-subtitle">{item.subtitle}</p>}
      </div>
    </article>
  );
}
