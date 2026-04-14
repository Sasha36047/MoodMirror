import { useCallback } from "react";
import { TopTenFlowPage } from "../components/TopTenFlowPage";
import { useMood } from "../context/MoodContext";
import { fetchMoviesByMood } from "../utils/api";

export function MoviesPage() {
  const { mood } = useMood();
  const loadItems = useCallback(fetchMoviesByMood, []);

  return (
    <TopTenFlowPage
      eyebrow="Фильмы"
      title="Топ 10 фильмов под твоё состояние."
      description="Не тяжёлый каталог, а аккуратная подборка: каждая позиция имеет своё место, короткое описание и ощущается как редакторский выбор под текущее настроение."
      sideTitle="Формат легче"
      sideText="Слева маленькая карточка, справа — смысл и настроение. Так страницу проще читать и приятнее пролистывать вниз."
      loadItems={loadItems}
      mood={mood}
    />
  );
}
