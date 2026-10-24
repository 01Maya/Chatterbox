"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function StickyCta() {
  const [past, setPast] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const target = document.getElementById("book");
    let io: IntersectionObserver | undefined;
    if (target) {
      io = new IntersectionObserver(
        ([entry]) => setFormVisible(entry.isIntersecting),
        { threshold: 0.1 },
      );
      io.observe(target);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {past && !formVisible && (
        <motion.div
          className="sticky-cta"
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <a href="#book" className="btn btn-sun btn-block">
            Book your free lesson
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
