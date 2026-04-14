import { motion } from "framer-motion";
import type { MoodKey, NoteItem } from "../../types";
import { revealUpBlur } from "../../lib/animations";

interface NotesSectionProps {
  mood: MoodKey;
  notes: NoteItem[];
  draft: string;
  setDraft: (value: string) => void;
  addNote: () => void;
  removeNote: (id: string) => void;
  formatDate: (value: string) => string;
  moodLabelMap: Record<string, string>;
}

export function NotesSection({
  mood,
  notes,
  draft,
  setDraft,
  addNote,
  removeNote,
  formatDate,
  moodLabelMap,
}: NotesSectionProps) {
  const todayCount = notes.filter((note) => {
    const date = new Date(note.createdAt);
    const now = new Date();
    return date.toDateString() === now.toDateString();
  }).length;

  const moodCount = notes.filter((note) => note.mood === mood).length;

  return (
    <motion.section
      className="notes-scene notes-scene-full snap-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealUpBlur}
    >
      <div className="section-center section-center-wide">
        <div className="notes-transition-line" />
        <div className="notes-scene-header">
          <p className="eyebrow">Notes space</p>
          <h1 className="notes-text">Пространство для мыслей</h1>
          <p className="notes-scene-copy">
            Это уже не просто поле ввода, а отдельная тихая сцена, где можно сохранить состояние дня,
            не пытаясь его ускорить или исправить.
          </p>
        </div>

        <div className="notes-analytics glass-panel">
          <div className="notes-analytics-card">
            <span>Сегодня</span>
            <strong>{todayCount}</strong>
            <p>заметок записано</p>
          </div>
          <div className="notes-analytics-card">
            <span>Текущее настроение</span>
            <strong>{moodLabelMap[mood]}</strong>
            <p>основной ритм сцены</p>
          </div>
          <div className="notes-analytics-card">
            <span>Совпадений</span>
            <strong>{moodCount}</strong>
            <p>заметок в этом mood</p>
          </div>
        </div>

        <div className="notes-grid notes-grid-expanded">
          <section className="notes-panel glass-panel">
            <p className="eyebrow">Личный блок</p>
            <h3>Опиши свой день и эмоции</h3>
            <p className="panel-copy">
              Здесь можно без спешки записать мысли, переживания, хорошие моменты или просто
              сохранить состояние этого дня.
            </p>

            <div className="note-composer note-composer-tight">
              <textarea
                className="mood-note mood-note-compact"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Например: сегодня хочется тишины, медленного вечера и чего-то красивого."
              />
              <button className="primary-cta full-width" onClick={addNote}>
                Сохранить заметку
              </button>
            </div>
          </section>

          <section className="notes-panel notes-storage-panel glass-panel">
            <h3 className="notes-saved-title">Твои заметки</h3>
            <div className="notes-list">
              {notes.length ? (
                notes.map((note) => (
                  <motion.div
                    key={note.id}
                    className="note-card"
                    initial={{ opacity: 0, y: 16, scale: 0.985 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.35 }}
                  >
                    <button className="note-delete" onClick={() => removeNote(note.id)} aria-label="Удалить заметку">
                      ×
                    </button>
                    <div className="note-meta">
                      <span className="note-mood-badge">{moodLabelMap[note.mood] || note.mood}</span>
                      <span className="note-date">{formatDate(note.createdAt)}</span>
                    </div>
                    <p>{note.text}</p>
                  </motion.div>
                ))
              ) : (
                <div className="notes-empty">
                  <div className="notes-empty-icon">✦</div>
                  <h4 className="notes-empty-title">Пока здесь тихо.</h4>
                  <p className="notes-empty-text">Можно оставить первую мысль дня. Иногда достаточно одного предложения, чтобы почувствовать опору.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </motion.section>
  );
}
