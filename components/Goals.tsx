"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GOALS } from "@/lib/content";

export default function Goals() {
  const [active, setActive] = useState(0);
  const goal = GOALS[active];

  return (
    <section id="goals" className="section section-white">
      <div className="wrap">
        <h2 className="h2">Pick your goal. We build the lessons around it.</h2>
        <p className="lede">
          No fixed textbook. Every lesson is shaped by what you want to do with
          English.
        </p>

        <div className="goals">
          <div
            className="goal-tabs"
            role="tablist"
            aria-label="Choose your goal"
          >
            {GOALS.map((g, i) => (
              <button
                key={g.id}
                role="tab"
                id={`tab-${g.id}`}
                aria-selected={active === i}
                aria-controls={`panel-${g.id}`}
                tabIndex={active === i ? 0 : -1}
                className={`goal-tab ${active === i ? "is-active" : ""}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" || e.key === "ArrowRight")
                    setActive((i + 1) % GOALS.length);
                  if (e.key === "ArrowUp" || e.key === "ArrowLeft")
                    setActive((i - 1 + GOALS.length) % GOALS.length);
                }}
              >
                {active === i && (
                  <motion.span
                    layoutId="goal-pill"
                    className="goal-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="goal-tab-label">{g.label}</span>
              </button>
            ))}
          </div>

          <div className="goal-panel-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={goal.id}
                role="tabpanel"
                id={`panel-${goal.id}`}
                aria-labelledby={`tab-${goal.id}`}
                className="goal-panel"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="h3">{goal.headline}</h3>
                <p>{goal.blurb}</p>
                <ul className="session-list">
                  {goal.session.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="before-after" aria-label="Example correction">
                  <div className="bubble bubble-learner">
                    <span className="strike">{goal.before}</span>
                  </div>
                  <div className="bubble bubble-tutor right">
                    <strong>{goal.after}</strong>
                  </div>
                </div>
                <a href="#book" className="btn btn-violet">
                  Start with a free lesson
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
