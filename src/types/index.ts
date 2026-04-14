export type MoodKey = "happy" | "calm" | "sad" | "energetic" | "tired" | "stressed";
export type MediaCategory = "movies" | "music" | "books" | "activities" | "mind";
export type MediaItem = {
  id: string | number;
  title: string;
  subtitle?: string;
  image: string;
  description?: string;
  tag?: string;
  rating?: number;
  source?: string;
  category: MediaCategory;
  savedMood?: MoodKey;
};
export type MoodMeta = {
  key: MoodKey;
  label: string;
  sidebarIcon: string;
  subtitle: string;
  accent: string;
  glow: string;
  backgroundImage: string;
};
export type NoteItem = {
  id: string;
  text: string;
  createdAt: string;
  mood: MoodKey;
};
