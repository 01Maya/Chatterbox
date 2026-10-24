"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND } from "@/lib/content";

const DEMOS = [
  {
    sentence: [
      "Yesterday I ",
      " to the office and ",
      " the plan ",
      " my manager.",
    ],
    fixes: [
      {
        wrong: "goed",
        right: "went",
        note: "Go is irregular. The past tense is went, not goed.",
      },
      {
        wrong: "discuss",
        right: "discussed",
        note: "Add -ed to talk about the past: discussed.",
      },
      {
        wrong: "in",
        right: "with",
        note: "We discuss something with a person.",
      },
    ],
  },
  {
    sentence: ["I ", " a new language because I ", " to speak ", " people."],
    fixes: [
      {
        wrong: "am learn",
        right: "am learning",
        note: "Use am + verb-ing for something happening now: am learning.",
      },
      {
        wrong: "want",
        right: "want",
        note: "This one is already correct.",
      },
      {
        wrong: "to",
        right: "with",
        note: "We speak with people, not speak to people in this context.",
      },
    ],
  },
  {
    sentence: ["She ", " me yesterday because she ", " help ", " her project."],
    fixes: [
      {
        wrong: "call",
        right: "called",
        note: "For a completed action in the past, use called.",
      },
      {
        wrong: "need",
        right: "needed",
        note: "The past tense of need is needed.",
      },
      {
        wrong: "in",
        right: "with",
        note: "You help someone with a project.",
      },
    ],
  },
  {
    sentence: [
      "I have ",
      " this book three times and I ",
      " it ",
      " my friends.",
    ],
    fixes: [
      {
        wrong: "readed",
        right: "read",
        note: "The past participle of read is still read.",
      },
      {
        wrong: "recommend",
        right: "recommended",
        note: "Use recommended because the action has already happened.",
      },
      {
        wrong: "for",
        right: "to",
        note: "We recommend something to someone.",
      },
    ],
  },
  {
    sentence: [
      "Tomorrow I ",
      " to the gym because I ",
      " to get better ",
      " English.",
    ],
    fixes: [
      {
        wrong: "go",
        right: "will go",
        note: "Use will go when talking about a future plan or decision.",
      },
      {
        wrong: "want",
        right: "want",
        note: "This one is already correct.",
      },
      {
        wrong: "at",
        right: "at",
        note: "This one is already correct.",
      },
    ],
  },
];

export default function CorrectionDemo() {
  const [currentCard, setCurrentCard] = useState(0);
  const [fixed, setFixed] = useState<boolean[]>(
    DEMOS[0].fixes.map(() => false),
  );

  const demo = DEMOS[currentCard];
  const count = fixed.filter(Boolean).length;
  const done = count === demo.fixes.length;
  const isLastCard = currentCard === DEMOS.length - 1;

  const fix = (index: number) => {
    setFixed((prev) => prev.map((value, i) => (i === index ? true : value)));
  };

  const nextCard = () => {
    if (currentCard < DEMOS.length - 1) {
      const next = currentCard + 1;
      setCurrentCard(next);
      setFixed(DEMOS[next].fixes.map(() => false));
    }
  };

  const reset = () => {
    setCurrentCard(0);
    setFixed(DEMOS[0].fixes.map(() => false));
  };

  const word = (index: number) => {
    const fixData = demo.fixes[index];
    const isFixed = fixed[index];

    return (
      <button
        key={`${currentCard}-${index}`}
        type="button"
        className={`fix ${isFixed ? "is-fixed" : "is-wrong"}`}
        onClick={() => fix(index)}
        disabled={isFixed}
        aria-label={
          isFixed
            ? `Fixed: ${fixData.right}`
            : `Fix the mistake: ${fixData.wrong}`
        }
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={isFixed ? "right" : "wrong"}
            initial={isFixed ? { y: -14, opacity: 0, scale: 0.7 } : false}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 16,
            }}
          >
            {isFixed ? fixData.right : fixData.wrong}
          </motion.span>
        </AnimatePresence>
      </button>
    );
  };

  return (
    <div className="demo">
      <div className="demo-head">
        <span className="avatar" aria-hidden="true">
          {BRAND.tutor[0]}
        </span>

        <div>
          <p className="demo-name">{BRAND.tutor}, your tutor</p>

          <p className="demo-status">
            <span className="dot" aria-hidden="true" />
            Reviewing your message
          </p>
        </div>

        <span className="demo-card-count" role="status" aria-live="polite">
          Example {currentCard + 1} of {DEMOS.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard}
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -30,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          <div className="bubble bubble-learner">
            <p className="demo-sentence">
              {demo.sentence[0]}
              {word(0)}
              {demo.sentence[1]}
              {word(1)}
              {demo.sentence[2]}
              {word(2)}
              {demo.sentence[3]}
            </p>
          </div>

          <p className="demo-hint">
            {done
              ? "Great job! All mistakes are fixed."
              : "Tap the underlined words to fix them."}
          </p>

          <div
            className="progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={demo.fixes.length}
            aria-valuenow={count}
            aria-label="Mistakes fixed"
          >
            <motion.div
              className="progress-fill"
              animate={{
                width: `${(count / demo.fixes.length) * 100}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 18,
              }}
            />
          </div>

          <p className="progress-label">
            {count} of {demo.fixes.length} mistakes fixed
          </p>

          <div className="notes" aria-live="polite">
            <AnimatePresence initial={false}>
              {demo.fixes.map((fixData, index) =>
                fixed[index] ? (
                  <motion.div
                    key={`${currentCard}-${fixData.right}`}
                    className="bubble bubble-tutor"
                    initial={{
                      opacity: 0,
                      scale: 0.85,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    {fixData.note}
                  </motion.div>
                ) : null,
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {done && !isLastCard && (
          <motion.div
            key="next"
            className="demo-next"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
          >
            <button
              type="button"
              className="btn btn-sun btn-sm"
              onClick={nextCard}
            >
              Next lesson →
            </button>
          </motion.div>
        )}

        {done && isLastCard && (
          <motion.div
            key="complete"
            className="demo-done"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
          >
            <p>That&apos;s the kind of feedback you get in every lesson.</p>

            <div className="demo-done-actions">
              <a href="#book" className="btn btn-sun btn-sm">
                Book your free lesson
              </a>

              <button type="button" className="link-btn" onClick={reset}>
                Try again
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="demo-dots" aria-hidden="true">
        {DEMOS.map((_, index) => (
          <span
            key={index}
            className={`demo-dot ${
              index === currentCard ? "active" : ""
            } ${index < currentCard ? "completed" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
