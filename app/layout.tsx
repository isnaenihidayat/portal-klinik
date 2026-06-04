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
  title: "Klinik & Rumah Bersalin Nur Fajar — Cikarang Pusat, Bekasi",
  description:
    "Klinik & Rumah Bersalin Nur Fajar melayani persalinan, pemeriksaan kehamilan, imunisasi, KB, dokter umum, dan dokter gigi di Cikarang Pusat, Bekasi. Telp (021) 89834783. Melayani BPJS.",
  keywords: [
    "klinik bersalin",
    "rumah bersalin",
    "bidan",
    "bidan cikarang",
    "klinik cikarang",
    "dokter umum cikarang",
    "dokter gigi cikarang",
    "persalinan normal",
    "USG kehamilan",
    "imunisasi anak",
    "KB",
    "BPJS",
    "Cikarang Pusat",
    "Bekasi",
    "Jayamukti",
    "Nur Fajar",
  ],
  openGraph: {
    title: "Klinik & Rumah Bersalin Nur Fajar — Cikarang Pusat, Bekasi",
    description:
      "Mendampingi setiap perjalanan keluarga Anda — persalinan, KB, imunisasi, dokter umum & gigi — di Cikarang Pusat, Bekasi.",
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
