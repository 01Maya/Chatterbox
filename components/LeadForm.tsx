"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND, GOALS, LEVELS, TIMES } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";
type Values = {
  name: string;
  email: string;
  phone: string;
  level: string;
  goal: string;
  time: string;
  message: string;
  plan: string;
  company: string;
};

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  level: "",
  goal: "",
  time: "",
  message: "",
  plan: "Free trial lesson",
  company: "",
};
const GOAL_OPTIONS = [...GOALS.map((g) => g.label), "Something else"];

export default function LeadForm() {
  const [v, setV] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    const onPlan = (e: Event) =>
      setV((s) => ({ ...s, plan: (e as CustomEvent<string>).detail }));
    window.addEventListener("select-plan", onPlan);
    return () => window.removeEventListener("select-plan", onPlan);
  }, []);

  const set =
    (k: keyof Values) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setV((s) => ({ ...s, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: "" }));
    };

  const validate = () => {
    const er: Record<string, string> = {};
    if (v.name.trim().length < 2) er.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      er.email = "Enter a valid email address.";
    if (v.phone && !/^[+()\d\s-]{7,20}$/.test(v.phone.trim()))
      er.phone = "Use digits, spaces and + only.";
    if (!v.level) er.level = "Choose your level.";
    if (!v.goal) er.goal = "Choose your goal.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.error || "Please check the highlighted fields.");
      }
      setStatus("success");
    } catch (err) {
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  };

  const field = (k: keyof Values) => ({
    id: `f-${k}`,
    value: v[k],
    onChange: set(k),
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `e-${k}` : undefined,
  });
  const err = (k: string) =>
    errors[k] ? (
      <p className="field-error" id={`e-${k}`} role="alert">
        {errors[k]}
      </p>
    ) : null;

  return (
    <section id="book" className="section section-violet">
      <div className="wrap book-grid">
        <div className="book-copy">
          <h2 className="h2">Book your free lesson.</h2>
          <p className="lede lede-light">
            Tell us a little about you. {BRAND.tutor} will reply within 24 hours
            with times that suit you.
          </p>
          <ul className="checks checks-light">
            <li>25 minutes, on Zoom or Google Meet</li>
            <li>No payment and no card</li>
            <li>A personal learning plan afterwards</li>
          </ul>
          <p className="book-alt">
            Prefer to chat first?{" "}
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message us on WhatsApp
            </a>
          </p>
        </div>

        <div className="form-card">
          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <motion.div
                key="ok"
                className="form-success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                role="status"
              >
                <svg
                  viewBox="0 0 80 80"
                  width="96"
                  height="96"
                  aria-hidden="true"
                >
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="var(--mint-tint)"
                    stroke="var(--ink)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.path
                    d="M24 41l11 11 21-24"
                    fill="none"
                    stroke="var(--mint-deep)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                </svg>
                <h3 className="h3">Request sent, {v.name.split(" ")[0]}.</h3>
                <p>
                  {BRAND.tutor} will email you at <strong>{v.email}</strong>{" "}
                  within 24 hours with times for your free lesson.
                </p>
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => {
                    setV(EMPTY);
                    setStatus("idle");
                  }}
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="chip-row">
                  <span className="chip">Plan: {v.plan}</span>
                  {v.plan !== "Free trial lesson" && (
                    <button
                      type="button"
                      className="link-btn"
                      onClick={() =>
                        setV((s) => ({ ...s, plan: "Free trial lesson" }))
                      }
                    >
                      Change to free trial
                    </button>
                  )}
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="f-name">Your name</label>
                    <input type="text" autoComplete="name" {...field("name")} />
                    {err("name")}
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">Email</label>
                    <input
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      {...field("email")}
                    />
                    {err("email")}
                  </div>
                  <div className="field">
                    <label htmlFor="f-phone">
                      WhatsApp or phone (optional)
                    </label>
                    <input
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      {...field("phone")}
                    />
                    {err("phone")}
                  </div>
                  <div className="field">
                    <label htmlFor="f-level">Your English level</label>
                    <select {...field("level")}>
                      <option value="">Choose one</option>
                      {LEVELS.map((l) => (
                        <option key={l}>{l}</option>
                      ))}
                    </select>
                    {err("level")}
                  </div>
                  <div className="field">
                    <label htmlFor="f-goal">Your main goal</label>
                    <select {...field("goal")}>
                      <option value="">Choose one</option>
                      {GOAL_OPTIONS.map((g) => (
                        <option key={g}>{g}</option>
                      ))}
                    </select>
                    {err("goal")}
                  </div>
                  <div className="field">
                    <label htmlFor="f-time">
                      Best time to learn (optional)
                    </label>
                    <select {...field("time")}>
                      <option value="">Any time</option>
                      {TIMES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field field-full">
                    <label htmlFor="f-message">
                      Anything we should know? (optional)
                    </label>
                    <textarea rows={3} {...field("message")} />
                  </div>
                </div>

                {/* Honeypot field for bots. Hidden from people and screen readers. */}
                <div className="hp" aria-hidden="true">
                  <label htmlFor="f-company">Company</label>
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...field("company")}
                  />
                </div>

                {serverError && (
                  <p className="form-error" role="alert">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-sun btn-lg btn-block"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Book my free lesson"}
                </button>
                <p className="form-note">
                  We only use your details to arrange your lesson. No spam,
                  ever.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
