import { BRAND } from "@/lib/content";

export default function Logo() {
  return (
    <span className="logo">
      <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
        <path
          d="M6 4h24a4 4 0 0 1 4 4v15a4 4 0 0 1-4 4H16l-8 7v-7H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"
          fill="var(--violet)"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="11" cy="15.5" r="2" fill="#fff" />
        <circle cx="18" cy="15.5" r="2" fill="#fff" />
        <circle cx="25" cy="15.5" r="2" fill="var(--sun)" />
      </svg>
      <span>{BRAND.short}</span>
    </span>
  );
}
