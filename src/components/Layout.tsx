import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { useMood } from "../context/MoodContext";
import { moods } from "../data/moods";

export function Layout() {
  const [expanded, setExpanded] = useState(false);
  const { mood } = useMood();
  const currentMood = moods.find((m) => m.key === mood)!;

  return (
    <div className={`app-shell ${expanded ? "app-shell-expanded" : ""}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMood.key}
          className="app-scene app-scene-animated"
          style={{ backgroundImage: `url(${currentMood.backgroundImage})` }}
          initial={{ opacity: 0, scale: 1.04, filter: "blur(18px) brightness(0.45)" }}
          animate={{ opacity: 1, scale: 1.02, filter: "blur(10px) brightness(0.58)" }}
          exit={{ opacity: 0, scale: 1.01, filter: "blur(18px) brightness(0.42)" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="app-scene-overlay" />
        </motion.div>
      </AnimatePresence>

      <Sidebar expanded={expanded} setExpanded={setExpanded} />

      <main className="main-column">
        <Outlet />
      </main>
    </div>
  );
}
