import { TMDB_API_KEY } from "../config/api";
import { moodGenreMap, moodBookQueryMap } from "../data/moods";
import { musicByMood } from "../data/musicData";
import type { MediaItem, MoodKey } from "../types";

const moodMusicTerms: Record<MoodKey, string[]> = {
  happy: ["feel good pop", "sunny indie", "happy album"],
  calm: ["ambient chill", "soft piano", "calm instrumental"],
  sad: ["indie melancholy", "sad acoustic", "night piano"],
  energetic: ["workout electronic", "energy rock", "dance album"],
  tired: ["soft acoustic", "slow evening", "rest piano"],
  stressed: ["relax ambient", "lofi calm", "meditation music"],
};

const movieFallbacks: Record<MoodKey, MediaItem[]> = {
  happy: [
    { id: "fh1", title: "Невероятная жизнь Уолтера Митти", subtitle: "2013", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80", description: "Светлая история про движение, мечту и жизнь шире привычного.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "fh2", title: "Ла-Ла Ленд", subtitle: "2016", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80", description: "Красивый, музыкальный и очень живой фильм.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "fh3", title: "1+1", subtitle: "2011", image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80", description: "Тёплое кино про дружбу и лёгкость.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
  ],
  calm: [
    { id: "fc1", title: "Патерсон", subtitle: "2016", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", description: "Медленное, тихое и очень внимательное кино.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "fc2", title: "Трудности перевода", subtitle: "2003", image: "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=900&q=80", description: "Кино с мягкой атмосферой и красивой паузой.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "fc3", title: "До рассвета", subtitle: "1995", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80", description: "Разговорный, воздушный и живой фильм.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
  ],
  sad: [
    { id: "fs1", title: "Манчестер у моря", subtitle: "2016", image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=900&q=80", description: "Честное и тихое кино для сложного состояния.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "fs2", title: "Она", subtitle: "2013", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80", description: "Мягкая история о близости и тепле.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "fs3", title: "Голубой Валентин", subtitle: "2010", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80", description: "Тихое кино с сильной эмоциональной глубиной.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
  ],
  energetic: [
    { id: "fe1", title: "Драйв", subtitle: "2011", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80", description: "Стиль, ритм и плотная энергия.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "fe2", title: "Одержимость", subtitle: "2014", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80", description: "Очень сильный темп и напряжение.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "fe3", title: "Малыш на драйве", subtitle: "2017", image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=900&q=80", description: "Музыка, скорость и стиль.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
  ],
  tired: [
    { id: "ft1", title: "Мой сосед Тоторо", subtitle: "1988", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80", description: "Очень мягкое и тёплое кино.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "ft2", title: "Амели", subtitle: "2001", image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80", description: "Лёгкое и уютное пространство внутри фильма.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "ft3", title: "Кэрол", subtitle: "2015", image: "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=900&q=80", description: "Тихий визуальный комфорт.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
  ],
  stressed: [
    { id: "fstr1", title: "Душа", subtitle: "2020", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80", description: "Мягкий и светлый фильм, который помогает выдохнуть.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "fstr2", title: "Хороший год", subtitle: "2006", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", description: "Кино про замедление и возвращение к себе.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
    { id: "fstr3", title: "Полночь в Париже", subtitle: "2011", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80", description: "Красивый, лёгкий фильм для разгрузки головы.", tag: "Fallback", source: "Mood Mirror", category: "movies" },
  ],
};

const bookFallbacks: Record<MoodKey, MediaItem[]> = {
  happy: [
    { id:"bh1", title:"Атомные привычки", subtitle:"Джеймс Клир", image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80", description:"Про маленькие шаги и большие изменения.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"bh2", title:"Big Magic", subtitle:"Элизабет Гилберт", image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80", description:"Лёгкая книга о творчестве.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"bh3", title:"Проект счастье", subtitle:"Гретхен Рубин", image:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80", description:"Про настроение и маленькие ритуалы.", tag:"Fallback", source:"Mood Mirror", category:"books" }
  ],
  calm: [
    { id:"bc1", title:"Сила настоящего", subtitle:"Экхарт Толле", image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80", description:"Про тишину, внимание и внутреннюю паузу.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"bc2", title:"Письма к молодому поэту", subtitle:"Райнер Мария Рильке", image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80", description:"Медленные, глубокие тексты.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"bc3", title:"Тишина", subtitle:"Тит Нат Хан", image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80", description:"Книга для мягкого замедления.", tag:"Fallback", source:"Mood Mirror", category:"books" }
  ],
  sad: [
    { id:"bs1", title:"Человек в поисках смысла", subtitle:"Виктор Франкл", image:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80", description:"Когда нужна опора, а не шум.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"bs2", title:"Бегущая с волками", subtitle:"Кларисса Пинкола Эстес", image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80", description:"Глубокая книга для проживания эмоций.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"bs3", title:"Сказать жизни «Да!»", subtitle:"Виктор Франкл", image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80", description:"Тёплая и важная книга.", tag:"Fallback", source:"Mood Mirror", category:"books" }
  ],
  energetic: [
    { id:"be1", title:"Поток", subtitle:"Михай Чиксентмихайи", image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80", description:"Про вовлечённость и энергию.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"be2", title:"Начни с почему", subtitle:"Саймон Синек", image:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80", description:"Когда хочется ритма и направления.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"be3", title:"Думай медленно… решай быстро", subtitle:"Даниэль Канеман", image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80", description:"Для энергии, которую хочется направить умно.", tag:"Fallback", source:"Mood Mirror", category:"books" }
  ],
  tired: [
    { id:"bt1", title:"Зачем мы спим", subtitle:"Мэттью Уокер", image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80", description:"Про отдых и восстановление.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"bt2", title:"Essentialism", subtitle:"Грег МакКеон", image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80", description:"Как оставить только важное.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"bt3", title:"Тишина", subtitle:"Тит Нат Хан", image:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80", description:"Мягкая книга, когда нужно снизить темп.", tag:"Fallback", source:"Mood Mirror", category:"books" }
  ],
  stressed: [
    { id:"bstr1", title:"Четыре тысячи недель", subtitle:"Оливер Беркман", image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80", description:"Очень заземляет, когда всё срочно.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"bstr2", title:"Wherever You Go, There You Are", subtitle:"Джон Кабат-Зинн", image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80", description:"Про mindfulness без лишнего пафоса.", tag:"Fallback", source:"Mood Mirror", category:"books" },
    { id:"bstr3", title:"Тревожный мозг", subtitle:"Кэтрин Питтман", image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80", description:"Когда хочется понять, что делать со стрессом.", tag:"Fallback", source:"Mood Mirror", category:"books" }
  ],
};

function upscaleArtwork(url?: string) {
  if (!url) return "";
  return url.replace(/\/\d+x\d+bb\./, "/600x600bb.");
}

export async function fetchMoviesByMood(mood: MoodKey): Promise<MediaItem[]> {
  if (!TMDB_API_KEY || TMDB_API_KEY.includes("PASTE_")) return movieFallbacks[mood];
  try {
    const genre = moodGenreMap[mood];
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=ru-RU&sort_by=popularity.desc&with_genres=${genre}`;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);
    const response = await fetch(url, { signal: controller.signal });
    window.clearTimeout(timeout);
    if (!response.ok) throw new Error(`TMDb error: ${response.status}`);
    const data = await response.json();
    const results = (data.results || []).slice(0, 18).map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      subtitle: movie.release_date?.slice(0, 4) || "Фильм",
      image: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
      description: movie.overview || "Фильм, который может подойти под текущее настроение.",
      rating: typeof movie.vote_average === "number" ? Number(movie.vote_average.toFixed(1)) : undefined,
      tag: "TMDb",
      source: "TMDb",
      category: "movies",
    }));
    return results.length ? results : movieFallbacks[mood];
  } catch (error) {
    console.error("Ошибка при загрузке фильмов:", error);
    return movieFallbacks[mood];
  }
}

export async function fetchSpotifyByMood(mood: MoodKey): Promise<MediaItem[]> {
  const terms = moodMusicTerms[mood];
  try {
    const responses = await Promise.all(
      terms.map((term) =>
        fetch(`/api/music/search?term=${encodeURIComponent(term)}&media=music&entity=album,song&limit=8&lang=en_us`)
          .then((r) => (r.ok ? r.json() : { results: [] }))
          .catch(() => ({ results: [] }))
      )
    );

    const flat = responses.flatMap((r: any) => (Array.isArray(r.results) ? r.results : []));
    const unique = new Map<string, MediaItem>();

    for (const item of flat) {
      const title = item.collectionName || item.trackName;
      const artist = item.artistName;
      if (!title || !artist) continue;
      const key = `${title}-${artist}`.toLowerCase();
      if (unique.has(key)) continue;

      unique.set(key, {
        id: String(item.collectionId || item.trackId || key),
        title,
        subtitle: artist,
        image:
          upscaleArtwork(item.artworkUrl100) ||
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
        description: item.primaryGenreName
          ? `Жанр: ${item.primaryGenreName}.`
          : "Музыкальная рекомендация под текущее настроение.",
        tag: item.collectionType === "Album" ? "Альбом" : item.primaryGenreName || "Музыка",
        source: "Apple iTunes",
        category: "music",
      });
      if (unique.size >= 12) break;
    }

    const mapped = Array.from(unique.values());
    return mapped.length ? mapped : musicByMood[mood];
  } catch (error) {
    console.error("Ошибка при загрузке музыки из Apple:", error);
    return musicByMood[mood] || [];
  }
}

export async function fetchBooksByMood(mood: MoodKey): Promise<MediaItem[]> {
  try {
    const fallbackImages = [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80"
    ];
    const response = await fetch(`/api/books/search.json?q=${encodeURIComponent(moodBookQueryMap[mood] || "psychology")}&limit=18`);
    if (!response.ok) throw new Error(`Open Library error: ${response.status}`);
    const data = await response.json();
    const docs = Array.isArray(data.docs) ? data.docs : [];
    if (!docs.length) return bookFallbacks[mood];
    return docs.slice(0, 18).map((book: any, index: number) => ({
      id: book.key || `book-${index}`,
      title: book.title || "Без названия",
      subtitle: book.author_name?.[0] || "Автор неизвестен",
      image: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : fallbackImages[index % fallbackImages.length],
      description: "Книга, которая может хорошо лечь на текущее состояние.",
      tag: book.first_publish_year ? String(book.first_publish_year) : "Книга",
      source: "Open Library",
      category: "books",
    }));
  } catch (error) {
    console.error("Ошибка при загрузке книг:", error);
    return bookFallbacks[mood];
  }
}
