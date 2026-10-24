import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { BRAND } from "@/lib/content";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} | One-to-one English lessons online`,
  description:
    "Live one-to-one English lessons with a friendly, certified tutor. Book a free 25-minute trial lesson and get a personal learning plan.",
  openGraph: {
    title: `${BRAND.name} | One-to-one English lessons online`,
    description:
      "Speak English like you mean it. Book a free trial lesson today.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F7FF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
