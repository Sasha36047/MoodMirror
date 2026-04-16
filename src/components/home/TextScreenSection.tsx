import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { MoodKey } from "../../types";

interface TextScreenSectionProps {
  mood: MoodKey;
  copy: { lead: string; middle: string; emphasis: string };
}

function TypewriterLine({
  text,
  speed = 26,
  delay = 0,
  className = "",
  onComplete,
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}) {
  const characters = useMemo(() => Array.from(text), [text]);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);

    let intervalId: number | undefined;
    const startTimer = window.setTimeout(() => {
      let index = 0;

      intervalId = window.setInterval(() => {
        index += 1;
        setVisibleCount(index);

        if (index >= characters.length) {
          window.clearInterval(intervalId);
          onComplete?.();
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [characters, speed, delay, onComplete]);

  return (
    <span className={className}>
      {characters.slice(0, visibleCount).map((char, index) => (
        <span key={`${char}-${index}`} className="text-screen-char">
          {char}
        </span>
      ))}
    </span>
  );
}

export function TextScreenSection({ mood, copy }: TextScreenSectionProps) {
  const [highlightActive, setHighlightActive] = useState(false);

  useEffect(() => {
    setHighlightActive(false);
  }, [mood]);

  const leadDelay = 250;
  const middleDelay = leadDelay + copy.lead.length * 26 + 250;
  const emphasisDelay = middleDelay + copy.middle.length * 26 + 250;

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
            <TypewriterLine text={copy.lead} delay={leadDelay} />
            <span> </span>
            <TypewriterLine text={copy.middle} delay={middleDelay} />
            <span> </span>
            <TypewriterLine
              text={copy.emphasis}
              delay={emphasisDelay}
              className={`text-screen-emphasis ${highlightActive ? "text-screen-emphasis-active" : ""}`}
              onComplete={() => setHighlightActive(true)}
            />
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}