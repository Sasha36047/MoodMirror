import { useEffect, useMemo, useState } from "react";
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
  highlightActive,
  onComplete,
}: {
  beforeText: string;
  emphasisText: string;
  speed?: number;
  delay?: number;
  highlightActive: boolean;
  onComplete?: () => void;
}) {
  const fullText = useMemo(
    () => `${beforeText}${emphasisText}`,
    [beforeText, emphasisText]
  );

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);

    let intervalId: number | undefined;

    const startTimer = window.setTimeout(() => {
      let index = 0;

      intervalId = window.setInterval(() => {
        index += 1;
        setVisibleCount(index);

        if (index >= fullText.length) {
          window.clearInterval(intervalId);
          onComplete?.();
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [fullText, speed, delay, onComplete]);

  const beforeLength = beforeText.length;

  const visibleBefore = fullText.slice(0, Math.min(visibleCount, beforeLength));
  const visibleEmphasis =
    visibleCount > beforeLength
      ? fullText.slice(beforeLength, visibleCount)
      : "";

  return (
    <>
      <span>{visibleBefore}</span>
      <span
        className={`text-screen-emphasis ${
          highlightActive ? "text-screen-emphasis-active" : ""
        }`}
      >
        {visibleEmphasis}
      </span>
    </>
  );
}

export function TextScreenSection({ mood, copy }: TextScreenSectionProps) {
  const [highlightActive, setHighlightActive] = useState(false);

  useEffect(() => {
    setHighlightActive(false);
  }, [mood]);

  const beforeText = useMemo(
    () => `${copy.lead} ${copy.middle} `,
    [copy]
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
            key={`${mood}-text`}
            className="text-screen-copy"
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <TypewriterText
              beforeText={beforeText}
              emphasisText={copy.emphasis}
              speed={78}
              delay={250}
              highlightActive={highlightActive}
              onComplete={() => setHighlightActive(true)}
            />
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}