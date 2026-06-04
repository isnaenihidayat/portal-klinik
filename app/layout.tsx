import type { Metadata } from "next";
import { Spectral, Figtree } from "next/font/google";
import "@/styles/globals.css";

/* ----------------------------------------------------------------
   Google Fonts via next/font — zero layout shift, auto-preload
   ---------------------------------------------------------------- */
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

/* ----------------------------------------------------------------
   Default metadata (SEO Sprint 5 akan memperkuat ini)
   ---------------------------------------------------------------- */
export const metadata: Metadata = {
  title: "Klinik & Rumah Bersalin Nur Fajar — Sleman, Yogyakarta",
  description:
    "Klinik & Rumah Bersalin Nur Fajar melayani persalinan, pemeriksaan kehamilan, imunisasi, dan kesehatan keluarga di Sleman, Yogyakarta. IGD 24 Jam. Melayani BPJS.",
  keywords: [
    "klinik bersalin",
    "rumah bersalin",
    "bidan",
    "dokter kandungan",
    "persalinan normal",
    "USG kehamilan",
    "imunisasi anak",
    "BPJS",
    "Sleman",
    "Yogyakarta",
  ],
  openGraph: {
    title: "Klinik & Rumah Bersalin Nur Fajar",
    description:
      "Mendampingi setiap perjalanan keluarga Anda — dari kehamilan, persalinan, hingga tumbuh kembang si kecil.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${spectral.variable} ${figtree.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
