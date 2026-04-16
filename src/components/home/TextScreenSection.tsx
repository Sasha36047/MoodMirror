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
  text,
  speed = 65,
  delay = 250,
  onComplete,
}: {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);

    let intervalId: number | undefined;

    const startTimer = window.setTimeout(() => {
      let index = 0;

      intervalId = window.setInterval(() => {
        index += 1;
        setVisibleCount(index);

        if (index >= text.length) {
          window.clearInterval(intervalId);
          onComplete?.();
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, speed, delay, onComplete]);

  return <>{text.slice(0, visibleCount)}</>;
}

export function TextScreenSection({ mood, copy }: TextScreenSectionProps) {
  const [highlightActive, setHighlightActive] = useState(false);

  useEffect(() => {
    setHighlightActive(false);
  }, [mood]);

  const fullText = useMemo(
    () => `${copy.lead} ${copy.middle} ${copy.emphasis}`,
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
            style={{ whiteSpace: "pre-wrap" }}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <TypewriterText
              text={fullText}
              speed={80}
              delay={250}
              onComplete={() => setHighlightActive(true)}
            />
          </motion.p>

          <motion.p
            className={`text-screen-copy text-screen-emphasis-overlay ${
              highlightActive ? "text-screen-emphasis-active" : ""
            }`}
            aria-hidden="true"
            initial={false}
            animate={{ opacity: highlightActive ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{ visibility: "hidden" }}>
              {copy.lead} {copy.middle}{" "}
            </span>
            <span className="text-screen-emphasis">{copy.emphasis}</span>
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}