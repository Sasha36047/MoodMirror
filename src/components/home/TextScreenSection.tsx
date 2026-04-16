import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { MoodKey } from "../../types";

interface TextScreenSectionProps {
  mood: MoodKey;
  copy: {
    lead: string;
    middle: string;
    emphasis: string;
  };
}

function TypewriterText({
  beforeText,
  emphasisText,
  speed = 78,
  delay = 250,
  mood,
}: {
  beforeText: string;
  emphasisText: string;
  speed?: number;
  delay?: number;
  mood: MoodKey;
}) {
  const fullText = useMemo(
    () => `${beforeText}${emphasisText}`,
    [beforeText, emphasisText]
  );

  const [visibleCount, setVisibleCount] = useState(0);
  const [highlightActive, setHighlightActive] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    setVisibleCount(0);
    setHighlightActive(false);
    completedRef.current = false;

    let intervalId: number | undefined;

    const startTimer = window.setTimeout(() => {
      let index = 0;

      intervalId = window.setInterval(() => {
        index += 1;
        setVisibleCount(index);

        if (index >= fullText.length) {
          window.clearInterval(intervalId);
          if (!completedRef.current) {
            completedRef.current = true;
            setHighlightActive(true);
          }
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [fullText, speed, delay, mood]);

  const beforeLength = beforeText.length;
  const visibleBefore = fullText.slice(0, Math.min(visibleCount, beforeLength));
  const visibleEmphasis =
    visibleCount > beforeLength
      ? fullText.slice(beforeLength, visibleCount)
      : "";

  return (
    <span className="text-screen-typewriter-layer" aria-live="polite">
      <span>{visibleBefore}</span>
      <span
        className={`text-screen-emphasis ${
          highlightActive ? "text-screen-emphasis-active" : ""
        }`}
      >
        {visibleEmphasis}
      </span>
    </span>
  );
}

export function TextScreenSection({ mood, copy }: TextScreenSectionProps) {
  const beforeText = useMemo(
    () => `${copy.lead} ${copy.middle} `,
    [copy]
  );

  const fullText = useMemo(
    () => `${beforeText}${copy.emphasis}`,
    [beforeText, copy.emphasis]
  );

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
            key={mood}
            className="text-screen-copy text-screen-copy-shell"
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-screen-copy-placeholder">{fullText}</span>

            <TypewriterText
              beforeText={beforeText}
              emphasisText={copy.emphasis}
              speed={78}
              delay={250}
              mood={mood}
            />
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}