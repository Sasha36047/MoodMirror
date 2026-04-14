import type { ComponentType } from "react";
import {
  Bookmark,
  BookOpen,
  Clapperboard,
  CloudMoon,
  Flower2,
  Home,
  Moon,
  Music,
  SlidersHorizontal,
  Sparkles,
  Wind,
  Zap,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useMood } from "../context/MoodContext";
import type { MoodKey } from "../types";

type Props = { expanded: boolean; setExpanded: (expanded: boolean) => void };

const items = [
  { icon: Home, label: "Главная", to: "/" },
  { icon: Clapperboard, label: "Фильмы", to: "/movies" },
  { icon: Music, label: "Музыка", to: "/music" },
  { icon: BookOpen, label: "Книги", to: "/books" },
  { icon: Sparkles, label: "Чем заняться", to: "/activities" },
  { icon: Bookmark, label: "Избранное", to: "/favorites" },
  { icon: SlidersHorizontal, label: "Настройки", to: "/settings" },
];

const moodMeta: Record<MoodKey, { label: string; icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }> }> = {
  happy: { label: "Радость", icon: Sparkles },
  calm: { label: "Спокойствие", icon: Wind },
  sad: { label: "Грусть", icon: Moon },
  energetic: { label: "Энергия", icon: Zap },
  tired: { label: "Усталость", icon: CloudMoon },
  stressed: { label: "Стресс", icon: Flower2 },
};

export function Sidebar({ expanded, setExpanded }: Props) {
  const { mood } = useMood();
  const currentMood = moodMeta[mood];
  const MoodIcon = currentMood.icon;

  return (
    <aside
      className={`sidebar glass-panel ${expanded ? "sidebar-expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="brand-mark">
        <div className="brand-orb" aria-hidden="true">
          <MoodIcon size={20} strokeWidth={1.9} />
        </div>
        <div className={`brand-copy ${expanded ? "brand-copy-visible" : ""}`}>
          <strong>Mood Mirror</strong>
          <span>{currentMood.label}</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-item ${isActive ? "nav-item-active" : ""}`}
            >
              <span className="nav-icon">
                <Icon size={22} strokeWidth={1.9} />
              </span>
              <span className={`nav-label ${expanded ? "nav-label-visible" : ""}`}>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
