import { useMemo } from "react";
import { useMood } from "../context/MoodContext";
import { moods } from "../data/moods";
import { supportByMood } from "../data/support";
import { moodPhrases, personalizedCopy, quickFitByMood, textScreenCopy } from "../data/homeContent";
import { useFavorites } from "../hooks/useFavorites";
import { useNotes } from "../hooks/useNotes";
import { HeroSection } from "../components/home/HeroSection";
import { QuickFitSection } from "../components/home/QuickFitSection";
import { TextScreenSection } from "../components/home/TextScreenSection";
import { NotesSection } from "../components/home/NotesSection";
import { SupportSection } from "../components/home/SupportSection";

export function HomePage() {
  const { mood, previousMood } = useMood();
  const currentMood = useMemo(() => moods.find((item) => item.key === mood)!, [mood]);
  const { toggleFavorite, isFavorite } = useFavorites();
  const { notes, draft, setDraft, addNote, removeNote, formatDate, moodLabelMap } = useNotes();

  const personalization =
    previousMood && previousMood !== mood
      ? `В прошлый раз ты выбирал ${moodLabelMap[previousMood] || previousMood.toString().toLowerCase()}. Сейчас ритм немного другой — подстроимся под него.`
      : personalizedCopy[mood];

  const noteInsight = notes[0]
    ? `Последняя заметка звучит как ${moodLabelMap[notes[0].mood] || notes[0].mood}. Экран уже подстроился под это состояние.`
    : `Пока заметок нет, поэтому рекомендации опираются на выбранное настроение — ${moodLabelMap[mood]}.`;

  return (
    <div className="flow-page snap-page">
      <HeroSection
        currentMood={currentMood}
        mood={mood}
        moodPhrase={moodPhrases[mood]}
        personalization={personalization}
      />

      <QuickFitSection noteInsight={noteInsight} items={quickFitByMood[mood]} />

      <TextScreenSection mood={mood} copy={textScreenCopy[mood]} />

      <NotesSection
        mood={mood}
        notes={notes}
        draft={draft}
        setDraft={setDraft}
        addNote={addNote}
        removeNote={removeNote}
        formatDate={formatDate}
        moodLabelMap={moodLabelMap}
      />

      <SupportSection items={supportByMood[mood]} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
    </div>
  );
}
