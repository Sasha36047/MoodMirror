import { useCallback } from "react";
import { TopTenFlowPage } from "../components/TopTenFlowPage";
import { useMood } from "../context/MoodContext";
import { fetchSpotifyByMood } from "../utils/api";

export function MusicPage() {
  const { mood } = useMood();
  const loadItems = useCallback(fetchSpotifyByMood, []);

  return (
    <TopTenFlowPage
      eyebrow="Музыка"
      title="Топ 10 музыкальных карточек для нужного ритма."
      description="Этот экран работает на Apple iTunes Search API и показывает более живую и разнообразную музыку: разные исполнители, разные обложки и спокойный поток рекомендаций."
      sideTitle="Apple iTunes"
      sideText="Музыкальные карточки теперь приходят из Apple и выглядят живее: меньше ощущения повтора, больше ощущения реальной подборки."
      loadItems={loadItems}
      mood={mood}
    />
  );
}
