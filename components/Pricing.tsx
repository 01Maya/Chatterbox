"use client";
import { motion } from "framer-motion";
import { PLANS } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="wrap">
        <h2 className="h2">Simple prices. Start for free.</h2>
        <p className="lede">
          Your first lesson costs nothing. After that, choose what fits you.
        </p>

        <div className="plans">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              className={`plan ${p.featured ? "plan-featured" : ""}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.12,
                type: "spring",
                stiffness: 110,
                damping: 18,
              }}
            >
              {p.featured && <span className="plan-tag">Most chosen</span>}
              <h3 className="h4">{p.name}</h3>
              <p className="plan-price">{p.price}</p>
              <p className="plan-unit">{p.unit}</p>
              <ul className="plan-features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#book"
                className={`btn ${p.featured ? "btn-sun" : "btn-ghost"} btn-block`}
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("select-plan", { detail: p.name }),
                  )
                }
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
