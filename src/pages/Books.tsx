import { useCallback } from "react";
import { TopTenFlowPage } from "../components/TopTenFlowPage";
import { useMood } from "../context/MoodContext";
import { fetchBooksByMood } from "../utils/api";

export function BooksPage() {
  const { mood } = useMood();
  const loadItems = useCallback(fetchBooksByMood, []);

  return (
    <TopTenFlowPage
      eyebrow="Книги"
      title="Топ 10 книг, которые могут откликнуться сейчас."
      description="Здесь всё тоже устроено как мягкая редакторская витрина: обложка, краткий смысл и спокойный вертикальный ритм без перегруза большими карточками."
      sideTitle="Спокойный выбор"
      sideText="Книга не должна спорить с состоянием. Такой формат даёт больше воздуха и помогает выбирать без спешки."
      loadItems={loadItems}
      mood={mood}
    />
  );
}
