
# 🏥 Website Klinik & Rumah Bersalin Nur Fajar

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

## 📋 Tentang Proyek

Website company profile untuk **Klinik & Rumah Bersalin Nur Fajar**, klinik bersalin yang berdiri sejak 2009 dan melayani ribuan keluarga di Sleman, Yogyakarta. Website ini dibangun dengan teknologi modern untuk memudahkan pasien menemukan informasi layanan, dokter, jadwal praktik, dan membuat janji temu.

### ✨ Fitur Utama

| Fitur | Keterangan |
|-------|-----------|
| 🌐 **Bilingual** | Tampilan lengkap dalam Bahasa Indonesia & English |
| 📅 **Buat Janji** | Modal booking janji temu terintegrasi |
| 💬 **WhatsApp** | Tombol chat WA mengambang di setiap halaman |
| 📱 **Responsif** | Tampil sempurna di desktop, tablet, dan mobile |
| ♿ **Aksesibel** | Keyboard navigation, ARIA labels, focus visible |
| ⚡ **Performa** | Server-side rendering, optimasi gambar & font otomatis |
| 🎨 **Animasi** | Scroll reveal, hover effects, pulse animation |

---

## 🛠️ Tech Stack

```
Frontend    → Next.js 16 (App Router) + React 19
Bahasa      → TypeScript 5
Styling     → Vanilla CSS (design system kustom)
Font        → Spectral (serif) + Figtree (sans) via next/font
Deploy      → Vercel
Repo        → GitHub
```

---

## 🗂️ Struktur Folder

```
web/
├── app/
│   ├── layout.tsx          # Root layout: font, meta SEO, import CSS
│   └── page.tsx            # Halaman utama → render <SiteApp />
│
├── components/
│   ├── SiteApp.tsx         # Root client component (state: lang, booking)
│   ├── ui/                 # Komponen UI reusable
│   │   ├── Icon.tsx        # SVG icon component (19 ikon)
│   │   ├── Btn.tsx         # Button / link component
│   │   ├── SectionHead.tsx # Eyebrow + heading block
│   │   ├── Placeholder.tsx # Placeholder gambar bergaris
│   │   ├── Carousel.tsx    # Horizontal scroll + prev/next
│   │   └── index.ts        # Barrel export
│   └── sections/           # Komponen per-section halaman
│       ├── TopBar.tsx      # Bar jam buka + telepon
│       ├── Nav.tsx         # Sticky nav, hamburger, lang toggle
│       ├── Hero.tsx        # Hero section
│       ├── Stats.tsx       # Bar angka pencapaian
│       ├── About.tsx       # Tentang klinik
│       ├── Services.tsx    # Layanan & estimasi biaya
│       ├── Doctors.tsx     # Tim dokter & bidan
│       ├── Schedule.tsx    # Jadwal & jam operasional
│       ├── Gallery.tsx     # Galeri fasilitas (mosaic)
│       ├── BookingModal.tsx # Modal janji temu
│       ├── FloatWA.tsx     # Tombol WhatsApp mengambang
│       └── index.ts        # Barrel export
│
├── hooks/
│   └── useScrollReveal.ts  # IntersectionObserver scroll reveal
│
├── lib/
│   └── content.ts          # Konten bilingual ID/EN + TypeScript types
│
├── styles/
│   ├── variables.css       # CSS custom properties (design tokens)
│   └── globals.css         # Global styles & komponen CSS
│
└── public/
    └── images/             # Aset gambar (foto klinik, dokter, dll.)
```

---

## 🚀 Menjalankan Secara Lokal

### Prasyarat

- **Node.js** versi 18 atau lebih baru
- **npm** (sudah termasuk dengan Node.js)

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/isnaenihidayat/portal-klinik.git
cd portal-klinik

# 2. Install dependensi
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Perintah Lainnya

```bash
npm run build   # Build untuk produksi
npm run start   # Jalankan hasil build
npm run lint    # Cek kode dengan ESLint
```

---

## 🎨 Design System

Proyek ini menggunakan design system kustom yang dibangun di atas CSS Custom Properties.

### Palet Warna

| Token | Nilai | Kegunaan |
|-------|-------|---------|
| `--rose-deep` | `#b56b5f` | CTA primer, aksen utama |
| `--rose` | `#d79a90` | Elemen dekoratif |
| `--rose-tint` | `#f7e7e2` | Background card ringan |
| `--sage-deep` | `#6c7d5d` | Aksen sekunder, schedule bg |
| `--ink` | `#3a322d` | Teks utama |
| `--bg` | `#fdfbf9` | Background halaman |
| `--paper` | `#fffdfb` | Background card |

### Tipografi

- **Heading** → `Spectral` (serif, dari Google Fonts)
- **Body** → `Figtree` (sans-serif, dari Google Fonts)

---

## 📄 Halaman & Sections

Website adalah **single-page** dengan navigasi anchor scroll:

| Section | Anchor | Keterangan |
|---------|--------|-----------|
| Hero | `#top` | Headline utama, CTA, chips fitur |
| Tentang | `#tentang` | Profil klinik, 3 keunggulan |
| Layanan | `#layanan` | 6 layanan + estimasi harga |
| Dokter | `#dokter` | Tim medis & jadwal praktik |
| Jadwal | `#jadwal` | Jam operasional + booking CTA |
| Fasilitas | `#fasilitas` | Galeri foto ruangan |
| Artikel | `#artikel` | Tips kesehatan (coming soon) |
| Kontak | `#kontak` | Alamat, telepon, form booking |

---

## 🌐 Dukungan Bahasa

Konten tersedia dalam dua bahasa, dapat beralih via tombol di navbar:

```
🇮🇩 Bahasa Indonesia (default)
🇬🇧 English
```

Preferensi bahasa disimpan di `localStorage` dan persisten antar kunjungan.

---

## 📦 Sprint Progress

| Sprint | Fokus | Status |
|--------|-------|--------|
| **S1** | Fondasi: Next.js setup, design system, komponen UI | ✅ Selesai |
| **S2** | TopBar, Nav, Hero, Stats, About, FloatWA, Modal | ✅ Selesai |
| **S3** | Services, Doctors, Schedule, Gallery + Carousel | ✅ Selesai |
| **S4** | Articles, Testimonials, Contact, Footer | 🔄 Akan datang |
| **S5** | Foto real, SEO lanjutan, Lighthouse, Deploy | 🔄 Akan datang |

---

## ⚙️ Konfigurasi

### Nomor WhatsApp

Ganti nomor WhatsApp klinik di [`lib/content.ts`](lib/content.ts):

```ts
// lib/content.ts
export const WA_NUMBER = "6281234567890"; // ← ganti nomor ini
```

### Informasi Kontak

Semua konten (alamat, telepon, email, jam buka) tersedia di [`lib/content.ts`](lib/content.ts) dalam objek `contact` untuk bahasa Indonesia (`id`) dan English (`en`).

---

## 🚢 Deploy ke Vercel

Cara termudah untuk deploy adalah melalui [Vercel Platform](https://vercel.com):

1. Push repository ke GitHub ✅
2. Import project di [vercel.com/new](https://vercel.com/new)
3. Pilih repository `portal-klinik`
4. Klik **Deploy** — selesai!

Vercel mendeteksi Next.js secara otomatis. Tidak perlu konfigurasi tambahan.

---

## 📝 Lisensi

Proyek ini dikembangkan untuk **Klinik & Rumah Bersalin Nur Fajar**.  
Seluruh konten dan aset visual adalah milik klinik.

---

## 👤 Dibuat Oleh

✍🏼 **Isnaeni Hidayat**  
🏠 Cikarang, Kab. Bekasi, Jawa Barat  
📞 (62) 878-0452-8887 · ✉️ isnaeni.hidayat@outlook.com

</div>
