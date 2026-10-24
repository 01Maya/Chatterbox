"use client";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/content";

export default function WhatsAppButton() {
  const [isObstructed, setIsObstructed] = useState(false);

  useEffect(() => {
    const targets = [
      document.getElementById("book"),
      document.querySelector(".footer"),
    ].filter((target): target is HTMLElement => target instanceof HTMLElement);
    if (targets.length === 0) return;

    const visibleTargets = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleTargets.add(entry.target);
          else visibleTargets.delete(entry.target);
        }
        setIsObstructed(visibleTargets.size > 0);
      },
      { threshold: 0.05 },
    );
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  if (isObstructed) return null;

  return (
    <a
      className="whatsapp-button"
      href={BRAND.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle aria-hidden="true" size={22} strokeWidth={2.2} />
      <span>Chat with us</span>
    </a>
  );
}
