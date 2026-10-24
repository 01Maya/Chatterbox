"use client";
import { motion } from "framer-motion";
import { STORIES } from "@/lib/content";

export default function Stories() {
  return (
    <section id="results" className="section section-ink">
      <div className="wrap">
        <h2 className="h2">Real students. Real sentences. Real progress.</h2>
        <p className="lede lede-light">
          Every student starts with sentences like the ones on the left.
        </p>

        <div className="stories">
          {STORIES.map((s, i) => (
            <motion.article
              key={s.name}
              className="story"
              whileHover={{ y: -6, rotate: i % 2 ? 0.8 : -0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <div className="bubble bubble-learner">
                <span className="strike">{s.before}</span>
              </div>
              <div className="bubble bubble-tutor right">
                <strong>{s.after}</strong>
              </div>
              <blockquote>{s.quote}</blockquote>
              <p className="story-who">
                <strong>{s.name}</strong>, {s.role}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
