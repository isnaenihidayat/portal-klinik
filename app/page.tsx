import { SiteApp } from "@/components/SiteApp";

/**
 * Root page — delegates all rendering to SiteApp (client component).
 * Keeping this as a Server Component means Next.js can still emit
 * the correct HTML shell and metadata from layout.tsx.
 */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Klinik & Rumah Bersalin Nur Fajar",
  alternateName: "Nur Fajar",
  url: "https://nurfajar.id",
  telephone: "(021) 89834783",
  email: "nurfajar.klinik@gmail.com",
  foundingDate: "2006",
  description:
    "Klinik & Rumah Bersalin Nur Fajar melayani persalinan, KB, imunisasi, dokter umum, dan dokter gigi di Cikarang Pusat, Bekasi. Melayani BPJS.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Tapir III No.18 Rt.05/Rw.10, Jayamukti",
    addressLocality: "Cikarang Pusat",
    addressRegion: "Jawa Barat",
    postalCode: "17530",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.3173,
    longitude: 107.1451,
  },
  hasMap: "https://maps.app.goo.gl/yv9XkT8tzTvEKBgZA",
  medicalSpecialty: ["Midwifery", "General Practice", "Dentistry", "Pharmacy"],
  priceRange: "Rp",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, BPJS, Transfer",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteApp />
    </>
  );
}
