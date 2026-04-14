import { motion } from "framer-motion";
import { revealUpBlur } from "../../lib/animations";

interface QuickFitSectionProps {
  noteInsight: string;
  items: Array<{ title: string; text: string }>;
}

export function QuickFitSection({ noteInsight, items }: QuickFitSectionProps) {
  return (
    <motion.section
      className="fit-scene glass-panel snap-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealUpBlur}
    >
      <div className="section-center section-center-wide">
        <div className="fit-head">
          <div>
            <p className="eyebrow">Сейчас тебе подойдёт</p>
            <h2>Три маленьких ориентира на этот момент</h2>
            <p className="fit-copy">{noteInsight}</p>
          </div>
        </div>

        <div className="fit-grid">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className="fit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <span className="fit-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
