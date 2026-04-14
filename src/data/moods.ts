import type { MoodMeta, MoodKey } from "../types";
export const moods: MoodMeta[] = [
    { key: "happy", label: "Радость", sidebarIcon: "☀", subtitle: "Что-то яркое, живое и лёгкое.", accent: "#ffb36a", glow: "rgba(255, 179, 106, 0.45)", backgroundImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80" },
    { key: "calm", label: "Спокойствие", sidebarIcon: "≋", subtitle: "Тишина, воздух и мягкий ритм.", accent: "#7cc8ff", glow: "rgba(124, 200, 255, 0.42)", backgroundImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
    { key: "sad", label: "Грусть", sidebarIcon: "☾", subtitle: "Честные вещи, которые проживаются мягко.", accent: "#8f7dff", glow: "rgba(143, 125, 255, 0.42)", backgroundImage: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1400&q=80" },
    { key: "energetic", label: "Энергия", sidebarIcon: "↯", subtitle: "Движение, темп и желание действовать.", accent: "#ff6b8b", glow: "rgba(255, 107, 139, 0.45)", backgroundImage: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1600&q=80" },
    { key: "tired", label: "Усталость", sidebarIcon: "☁", subtitle: "Без давления, помягче и потише.", accent: "#9ac7b8", glow: "rgba(154, 199, 184, 0.38)", backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80" },
    { key: "stressed", label: "Стресс", sidebarIcon: "✦", subtitle: "Что-то заземляющее и спокойное.", accent: "#78a6ff", glow: "rgba(120, 166, 255, 0.40)", backgroundImage: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80" }
];
export const moodGenreMap: Record<MoodKey, string> = { happy: "35", calm: "10749", sad: "18", energetic: "28", tired: "16", stressed: "10751" };
export const moodBookQueryMap: Record<MoodKey, string> = {
    happy: "self growth happiness", sad: "healing psychology", calm: "mindfulness poetry",
    energetic: "motivation success", stressed: "stress relief anxiety", tired: "rest recovery burnout"
};
