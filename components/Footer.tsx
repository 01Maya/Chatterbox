import Logo from "./Logo";
import { BRAND, NAV } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p className="footer-tag">
            Friendly one-to-one English lessons, online.
          </p>
        </div>
        <nav aria-label="Footer">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {BRAND.whatsappLabel}
          </a>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>
          &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
