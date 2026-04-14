export function SettingsPage() {
  return (
    <div className="page-stack">
      <section className="glass-panel content-section fade-in">
        <div className="section-header"><div><h2>Настройки</h2><p>Где вставить ключ для фильмов.</p></div></div>
        <div className="settings-block"><h3>TMDb</h3><p>Получить ключ: https://www.themoviedb.org/settings/api</p><p>Вставить в файл: <code>src/config/api.ts</code> → <code>TMDB_API_KEY</code></p></div>
        <div className="settings-block"><h3>Книги</h3><p>Работают через Open Library без ключа. CORS уже обойдён через Vite proxy.</p></div>
        <div className="settings-block"><h3>Музыка</h3><p>Сейчас реализована красивая локальная подборка без Spotify, чтобы всё работало стабильно.</p></div>
      </section>
    </div>
  );
}
