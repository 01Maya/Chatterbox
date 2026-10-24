"use client";
import { motion, type Variants } from "framer-motion";
import CorrectionDemo from "./CorrectionDemo";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <motion.div
          className="hero-copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={item}>
            Speak English <br className="br-d" />
            like you mean it.
          </motion.h1>
          <motion.p variants={item} className="lede">
            One-to-one online lessons with a certified tutor who corrects you
            kindly, in the moment, and builds every lesson around what you need
            to say.
          </motion.p>
          <motion.div variants={item} className="hero-actions">
            <a href="#book" className="btn btn-sun btn-lg">
              Book your free lesson
            </a>
            <a href="#how" className="btn btn-ghost btn-lg">
              See how it works
            </a>
          </motion.div>
          <motion.ul
            variants={item}
            className="checks"
            aria-label="Trial lesson details"
          >
            <li>Free 25-minute trial</li>
            <li>No card needed</li>
            <li>Reply within 24 hours</li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero-demo"
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 16,
            delay: 0.45,
          }}
        >
          <div className="hero-shape" aria-hidden="true" />
          <svg
            className="hero-scribble"
            viewBox="0 0 100 70"
            aria-hidden="true"
          >
            <path d="M5 50 C25 15 44 62 62 28 S84 10 95 22" />
          </svg>
          <div className="badge" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <path
                  id="badge-circle"
                  d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                />
              </defs>
              <circle
                cx="60"
                cy="60"
                r="58"
                fill="var(--sun)"
                stroke="var(--ink)"
                strokeWidth="2.5"
              />
              <g className="badge-spin">
                <text
                  fontSize="11.5"
                  fontWeight="700"
                  fill="var(--ink)"
                  letterSpacing="1.2"
                >
                  <textPath href="#badge-circle">
                    Your first lesson is free * Your first lesson is free *
                  </textPath>
                </text>
              </g>
              <text
                x="60"
                y="68"
                textAnchor="middle"
                fontSize="24"
                fontWeight="800"
                fill="var(--ink)"
                fontFamily="var(--font-display)"
              >
                Free
              </text>
            </svg>
          </div>
          <CorrectionDemo />
        </motion.div>
      </div>
    </section>
  );
}
