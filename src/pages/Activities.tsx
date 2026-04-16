import { useMood } from "../context/MoodContext";
import { activitiesByMood } from "../data/activities";
import { TopTenStaticPage } from "../components/TopTenStaticPage";

export function ActivitiesPage() {
  const { mood } = useMood();

  return (
    <TopTenStaticPage
      eyebrow="Чем заняться"
      title="Топ подборка идей, которые не спорят с твоим состоянием."
      description="Вместо тяжёлой сетки здесь спокойный editorial-формат: идея, короткий смысл и возможность просто пролистать вниз, пока что-то не откликнется."
      sideTitle="Лёгкий формат"
      sideText="Для идей особенно важно не перегрузить экран. Поэтому здесь всё собрано как спокойная подборка, а не как доска из огромных карточек."
      items={activitiesByMood[mood]}
    />
  );
}
