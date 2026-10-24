"use client";
import { motion } from "framer-motion";
import { STEPS } from "@/lib/content";

export default function Steps() {
  return (
    <section id="how" className="section">
      <div className="wrap">
        <h2 className="h2">Three steps from "hello" to fluent conversation.</h2>

        <div className="steps-wrap">
          <motion.span
            className="steps-line"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
          <ol className="steps">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                className="step"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 110,
                  damping: 18,
                }}
              >
                <span className="step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="h4">{s.title}</h3>
                <p>{s.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="center">
          <a href="#book" className="btn btn-sun btn-lg">
            Book your free lesson
          </a>
        </div>
      </div>
    </section>
  );
}
