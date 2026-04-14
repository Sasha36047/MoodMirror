import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { MoodKey } from "../../types";

interface TextScreenSectionProps {
  mood: MoodKey;
  copy: { lead: string; middle: string; emphasis: string };
}

export function TextScreenSection({ mood, copy }: TextScreenSectionProps) {
  const [highlightActive, setHighlightActive] = useState(false);

  useEffect(() => {
    setHighlightActive(false);
    const timer = window.setTimeout(() => setHighlightActive(true), 1400);
    return () => window.clearTimeout(timer);
  }, [mood]);

  return (
    <motion.section
      className="text-screen-section snap-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-center">
        <div className="text-screen-inner">
          <motion.p
            key={`${mood}-text`}
            className="text-screen-copy"
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{copy.lead} </span>
            <span>{copy.middle} </span>
            <span className={`text-screen-emphasis ${highlightActive ? "text-screen-emphasis-active" : ""}`}>
              {copy.emphasis}
            </span>
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
