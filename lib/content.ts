// Bilingual content dictionary — Klinik & Rumah Bersalin Nur Fajar
// Converted from: project/content.jsx

export type Locale = "id" | "en";

export interface NavLink {
  id: string;
  label: string;
}

export interface ServiceItem {
  name: string;
  desc: string;
  price: string;
  icon: string;
}

export interface DoctorItem {
  name: string;
  role: string;
  days: string;
  imgLabel: string;
}

export interface HourItem {
  day: string;
  time: string;
}

export interface GalleryItem {
  label: string;
}

export interface ArticleItem {
  tag: string;
  title: string;
  date: string;
  imgLabel: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface SiteContent {
  locale: Locale;
  nav: {
    brandName: string;
    brandSub: string;
    links: NavLink[];
    cta: string;
    langLabel: string;
  };
  topbar: {
    hours: string;
    call: string;
    phone: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: string[];
    cardTitle: string;
    cardBig: string;
    cardDesc: string;
    imgLabel: string;
  };
  stats: Array<{ value: string; label: string }>;
  about: {
    eyebrow: string;
    title: string;
    desc: string;
    points: Array<{ title: string; desc: string }>;
    imgLabel: string;
  };
  services: {
    eyebrow: string;
    title: string;
    desc: string;
    priceNote: string;
    detailCta: string;
    items: ServiceItem[];
  };
  doctors: {
    eyebrow: string;
    title: string;
    desc: string;
    schedule: string;
    items: DoctorItem[];
  };
  schedule: {
    eyebrow: string;
    title: string;
    desc: string;
    hoursTitle: string;
    hours: HourItem[];
    ctaTitle: string;
    ctaDesc: string;
    cta: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    desc: string;
    items: GalleryItem[];
  };
  articles: {
    eyebrow: string;
    title: string;
    desc: string;
    readMore: string;
    items: ArticleItem[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: TestimonialItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    address: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    hoursLabel: string;
    hoursVal: string;
    mapLabel: string;
    formTitle: string;
    form: {
      name: string;
      phone: string;
      service: string;
      date: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    tagline: string;
    explore: string;
    services: string;
    contactTitle: string;
    rights: string;
    made: string;
  };
  booking: {
    title: string;
    desc: string;
    success: string;
    close: string;
  };
}

export const WA_NUMBER = "6281234567890"; // ← ganti nomor WhatsApp klinik (nomor HP, bukan telepon kabel)
export const MAPS_URL = "https://maps.app.goo.gl/yv9XkT8tzTvEKBgZA";

export const waLink = (text?: string): string =>
  `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const CONTENT: Record<Locale, SiteContent> = {
  id: {
    locale: "id",
    nav: {
      brandName: "Nur Fajar",
      brandSub: "Klinik & Rumah Bersalin",
      links: [
        { id: "tentang", label: "Tentang" },
        { id: "layanan", label: "Layanan" },
        { id: "dokter", label: "Dokter" },
        { id: "jadwal", label: "Jadwal" },
        { id: "fasilitas", label: "Fasilitas" },
        { id: "artikel", label: "Artikel" },
        { id: "kontak", label: "Kontak" },
      ],
      cta: "Buat Janji",
      langLabel: "EN",
    },
    topbar: {
      hours: "Buka Senin–Sabtu · Cikarang Pusat, Bekasi",
      call: "Telepon",
      phone: "(021) 89834783",
    },
    hero: {
      eyebrow: "Merawat Bunda & Buah Hati Sejak 2006",
      title: "Tempat yang hangat untuk\nmenyambut kehidupan baru",
      desc: "Klinik & Rumah Bersalin Nur Fajar mendampingi setiap langkah perjalanan Anda — dari kehamilan, persalinan, hingga tumbuh kembang si kecil — dengan tim yang penuh kasih dan fasilitas yang nyaman.",
      ctaPrimary: "Buat Janji Temu",
      ctaSecondary: "Chat WhatsApp",
      chips: ["Melayani BPJS", "Bidan & Dokter Berpengalaman", "Ruang Persalinan Nyaman"],
      cardTitle: "IGD & Persalinan",
      cardBig: "24 Jam",
      cardDesc: "Siap melayani Anda kapan pun, tanpa perjanjian.",
      imgLabel: "foto bunda & bayi",
    },
    stats: [
      { value: "15+", label: "Tahun melayani" },
      { value: "8.000+", label: "Persalinan berhasil" },
      { value: "5", label: "Dokter & bidan" },
      { value: "4,9/5", label: "Penilaian pasien" },
    ],
    about: {
      eyebrow: "Tentang Kami",
      title: "Pelayanan kesehatan keluarga yang menenangkan",
      desc: "Berdiri sejak 2006, Nur Fajar tumbuh menjadi rumah kedua bagi ribuan keluarga. Kami percaya momen kehamilan dan kelahiran layak ditemani rasa aman, hangat, dan dimengerti.",
      points: [
        { title: "Berfokus pada keluarga", desc: "Suami & keluarga dilibatkan dalam setiap proses, dari kontrol hingga persalinan." },
        { title: "Tenaga medis tersertifikasi", desc: "Dokter spesialis, dokter umum, dan bidan berpengalaman yang siaga setiap hari." },
        { title: "Fasilitas bersih & nyaman", desc: "Ruang periksa, persalinan, dan rawat inap yang higienis dan menenangkan." },
      ],
      imgLabel: "foto suasana klinik",
    },
    services: {
      eyebrow: "Layanan & Estimasi Biaya",
      title: "Perawatan lengkap untuk setiap tahap",
      desc: "Beragam layanan kesehatan untuk bunda, bayi, dan keluarga. Hubungi kami untuk info biaya & ketersediaan — kami siap membantu klaim BPJS dan asuransi.",
      priceNote: "mulai dari",
      detailCta: "Buat janji",
      items: [
        { name: "Persalinan Normal", desc: "Pendampingan persalinan oleh bidan & dokter, termasuk rawat inap.", price: "Rp 3.500.000", icon: "baby" },
        { name: "Pemeriksaan Kehamilan & USG", desc: "Kontrol rutin kehamilan dengan USG untuk memantau si kecil.", price: "Rp 150.000", icon: "scan" },
        { name: "Imunisasi & Tumbuh Kembang", desc: "Imunisasi lengkap dan pemantauan tumbuh kembang anak.", price: "Rp 100.000", icon: "shield" },
        { name: "Keluarga Berencana (KB)", desc: "Konsultasi dan layanan KB: suntik, pil, implan, dan IUD.", price: "Rp 80.000", icon: "heart" },
        { name: "Pemeriksaan Umum", desc: "Konsultasi dokter umum untuk keluhan kesehatan sehari-hari.", price: "Rp 50.000", icon: "stetho" },
        { name: "Laboratorium", desc: "Cek darah, urine, dan pemeriksaan penunjang lainnya.", price: "Rp 75.000", icon: "flask" },
      ],
    },
    doctors: {
      eyebrow: "Tim Medis",
      title: "Ditemani tangan yang berpengalaman",
      desc: "Tim tenaga medis kami siap mendampingi Anda dengan sepenuh hati.",
      schedule: "Jadwal",
      items: [
        { name: "Nur Fajriani", role: "Bidan", days: "Hubungi klinik untuk jadwal", imgLabel: "foto bidan" },
        { name: "Novia Putri Amd.keb., CHE", role: "Bidan", days: "Hubungi klinik untuk jadwal", imgLabel: "foto bidan" },
        { name: "Drg. Retno Palupi", role: "Dokter Gigi", days: "Hubungi klinik untuk jadwal", imgLabel: "foto dokter" },
        { name: "Dr. Ernasari", role: "Dokter Umum", days: "Hubungi klinik untuk jadwal", imgLabel: "foto dokter" },
        { name: "Shinta, S.Farm, Apt.", role: "Apoteker", days: "Hubungi klinik untuk jadwal", imgLabel: "foto apoteker" },
      ],
    },
    schedule: {
      eyebrow: "Jadwal & Janji Temu",
      title: "Atur kunjungan Anda dengan mudah",
      desc: "Lihat jam praktik di bawah, lalu buat janji lewat WhatsApp atau formulir. Untuk keadaan darurat, IGD kami buka 24 jam.",
      hoursTitle: "Jam Operasional",
      hours: [
        { day: "Senin – Jumat", time: "07.00 – 21.00" },
        { day: "Sabtu", time: "07.00 – 20.00" },
        { day: "Ahad & Libur", time: "08.00 – 16.00" },
        { day: "IGD & Persalinan", time: "24 Jam" },
      ],
      ctaTitle: "Siap berkunjung?",
      ctaDesc: "Buat janji temu dan tim kami akan mengonfirmasi jadwal Anda.",
      cta: "Buat Janji Sekarang",
    },
    gallery: {
      eyebrow: "Fasilitas",
      title: "Ruang yang dirancang untuk ketenangan",
      desc: "Setiap sudut kami siapkan agar Anda dan keluarga merasa nyaman.",
      items: [
        { label: "ruang persalinan" },
        { label: "kamar rawat inap" },
        { label: "ruang USG" },
        { label: "ruang tunggu" },
        { label: "ruang periksa" },
        { label: "area bermain anak" },
      ],
    },
    articles: {
      eyebrow: "Artikel & Tips",
      title: "Bacaan untuk perjalanan Anda",
      desc: "Tips kesehatan dari tim medis kami untuk bunda dan keluarga.",
      readMore: "Baca selengkapnya",
      items: [
        { tag: "Kehamilan", title: "Nutrisi penting di trimester pertama", date: "12 Mei 2026", imgLabel: "ilustrasi artikel" },
        { tag: "Bayi", title: "Panduan jadwal imunisasi dasar lengkap", date: "28 April 2026", imgLabel: "ilustrasi artikel" },
        { tag: "Ibu", title: "Mengenali tanda persalinan sudah dekat", date: "5 April 2026", imgLabel: "ilustrasi artikel" },
      ],
    },
    testimonials: {
      eyebrow: "Kata Mereka",
      title: "Dipercaya keluarga di sekitar kita",
      items: [
        { quote: "Bidan dan dokternya sabar sekali menemani proses persalinan anak pertama saya. Rasanya seperti ditemani keluarga sendiri.", name: "Dewi Lestari", role: "Ibu dari Arka" },
        { quote: "Kontrol kehamilan selalu nyaman, antrean tertib, dan penjelasan dokternya mudah dimengerti. Sangat direkomendasikan.", name: "Putri Maharani", role: "Pasien sejak 2021" },
        { quote: "Tempatnya bersih, pelayanannya ramah, dan biayanya transparan. Imunisasi anak saya juga lengkap di sini.", name: "Bayu Saputra", role: "Ayah dari Kayla" },
      ],
    },
    contact: {
      eyebrow: "Kontak & Lokasi",
      title: "Kami menanti kunjungan Anda",
      address: "Jl. Tapir III No.18 Rt.05/Rw.10, Jayamukti, Kec. Cikarang Pusat, Kab. Bekasi, Jawa Barat 17530",
      phoneLabel: "Telepon",
      phone: "(021) 89834783",
      emailLabel: "Email",
      email: "nurfajar.klinik@gmail.com",
      hoursLabel: "Jam Buka",
      hoursVal: "Senin–Sabtu · Hubungi klinik untuk jam lengkap",
      mapLabel: "Lihat di Google Maps",
      formTitle: "Buat Janji Temu",
      form: {
        name: "Nama lengkap",
        phone: "Nomor telepon / WhatsApp",
        service: "Layanan",
        date: "Tanggal kunjungan",
        message: "Catatan (opsional)",
        submit: "Kirim Permintaan",
      },
    },
    footer: {
      tagline: "Mendampingi setiap perjalanan keluarga Anda dengan penuh kasih.",
      explore: "Jelajahi",
      services: "Layanan",
      contactTitle: "Kontak",
      rights: "Hak cipta dilindungi.",
      made: "Klinik & Rumah Bersalin Nur Fajar",
    },
    booking: {
      title: "Buat Janji Temu",
      desc: "Isi data di bawah, tim kami akan menghubungi untuk mengonfirmasi.",
      success: "Terima kasih! Permintaan janji temu Anda telah kami terima. Tim kami akan menghubungi Anda segera.",
      close: "Tutup",
    },
  },

  en: {
    locale: "en",
    nav: {
      brandName: "Nur Fajar",
      brandSub: "Clinic & Maternity Home",
      links: [
        { id: "tentang", label: "About" },
        { id: "layanan", label: "Services" },
        { id: "dokter", label: "Doctors" },
        { id: "jadwal", label: "Schedule" },
        { id: "fasilitas", label: "Facilities" },
        { id: "artikel", label: "Articles" },
        { id: "kontak", label: "Contact" },
      ],
      cta: "Book a Visit",
      langLabel: "ID",
    },
    topbar: {
      hours: "Mon–Sat · Cikarang Pusat, Bekasi",
      call: "Call",
      phone: "(021) 89834783",
    },
    hero: {
      eyebrow: "Caring for Mothers & Little Ones Since 2009",
      title: "A warm place to\nwelcome new life",
      desc: "Nur Fajar Clinic & Maternity Home walks with you through every step — from pregnancy and birth to your child's growth — with a caring team and comfortable facilities.",
      ctaPrimary: "Book an Appointment",
      ctaSecondary: "Chat on WhatsApp",
      chips: ["BPJS Accepted", "Experienced Doctors & Midwives", "Comfortable Birthing Rooms"],
      cardTitle: "ER & Delivery",
      cardBig: "24 Hours",
      cardDesc: "Ready to serve you anytime, no appointment needed.",
      imgLabel: "mother & baby photo",
    },
    stats: [
      { value: "15+", label: "Years of service" },
      { value: "8,000+", label: "Successful births" },
      { value: "12", label: "Doctors & midwives" },
      { value: "4.9/5", label: "Patient rating" },
    ],
    about: {
      eyebrow: "About Us",
      title: "Family healthcare that puts you at ease",
      desc: "Established in 2009, Nur Fajar has grown into a second home for thousands of families. We believe pregnancy and birth deserve to be met with safety, warmth, and understanding.",
      points: [
        { title: "Family-centered", desc: "Partners and family are included in every step, from check-ups to delivery." },
        { title: "Certified medical team", desc: "Specialists, general practitioners, and experienced midwives on duty daily." },
        { title: "Clean & comfortable", desc: "Examination, birthing, and inpatient rooms that are hygienic and calming." },
      ],
      imgLabel: "clinic interior photo",
    },
    services: {
      eyebrow: "Services & Estimated Cost",
      title: "Complete care for every stage",
      desc: "A range of health services for mothers, babies, and families. Contact us for pricing & availability — we help with BPJS and insurance claims.",
      priceNote: "starting from",
      detailCta: "Book a visit",
      items: [
        { name: "Normal Delivery", desc: "Birth support by midwives & doctors, including inpatient stay.", price: "Rp 3,500,000", icon: "baby" },
        { name: "Prenatal Check-up & Ultrasound", desc: "Routine pregnancy check-ups with ultrasound to monitor your baby.", price: "Rp 150,000", icon: "scan" },
        { name: "Immunization & Child Growth", desc: "Complete immunization and child growth monitoring.", price: "Rp 100,000", icon: "shield" },
        { name: "Family Planning (KB)", desc: "Consultation and family planning: injection, pill, implant, and IUD.", price: "Rp 80,000", icon: "heart" },
        { name: "General Check-up", desc: "General practitioner consultation for everyday health concerns.", price: "Rp 50,000", icon: "stetho" },
        { name: "Laboratory", desc: "Blood tests, urine tests, and other supporting examinations.", price: "Rp 75,000", icon: "flask" },
      ],
    },
    doctors: {
      eyebrow: "Medical Team",
      title: "In experienced, caring hands",
      desc: "Our medical team is ready to support you wholeheartedly.",
      schedule: "Schedule",
      items: [
        { name: "Nur Fajriani", role: "Midwife", days: "Contact clinic for schedule", imgLabel: "midwife photo" },
        { name: "Novia Putri Amd.keb., CHE", role: "Midwife", days: "Contact clinic for schedule", imgLabel: "midwife photo" },
        { name: "Drg. Retno Palupi", role: "Dentist", days: "Contact clinic for schedule", imgLabel: "doctor photo" },
        { name: "Dr. Ernasari", role: "General Practitioner", days: "Contact clinic for schedule", imgLabel: "doctor photo" },
        { name: "Shinta, S.Farm, Apt.", role: "Pharmacist", days: "Contact clinic for schedule", imgLabel: "pharmacist photo" },
      ],
    },
    schedule: {
      eyebrow: "Schedule & Appointments",
      title: "Plan your visit with ease",
      desc: "See practice hours below, then book via WhatsApp or the form. For emergencies, our ER is open 24 hours.",
      hoursTitle: "Operating Hours",
      hours: [
        { day: "Monday – Friday", time: "7am – 9pm" },
        { day: "Saturday", time: "7am – 8pm" },
        { day: "Sunday & Holidays", time: "8am – 4pm" },
        { day: "ER & Delivery", time: "24 Hours" },
      ],
      ctaTitle: "Ready to visit?",
      ctaDesc: "Book an appointment and our team will confirm your schedule.",
      cta: "Book Now",
    },
    gallery: {
      eyebrow: "Facilities",
      title: "Spaces designed for calm",
      desc: "Every corner is prepared so you and your family feel comfortable.",
      items: [
        { label: "birthing room" },
        { label: "inpatient room" },
        { label: "ultrasound room" },
        { label: "waiting area" },
        { label: "examination room" },
        { label: "kids play area" },
      ],
    },
    articles: {
      eyebrow: "Articles & Tips",
      title: "Reading for your journey",
      desc: "Health tips from our medical team for mothers and families.",
      readMore: "Read more",
      items: [
        { tag: "Pregnancy", title: "Essential nutrition in the first trimester", date: "May 12, 2026", imgLabel: "article illustration" },
        { tag: "Baby", title: "A complete basic immunization schedule guide", date: "Apr 28, 2026", imgLabel: "article illustration" },
        { tag: "Mother", title: "Recognizing the signs that labor is near", date: "Apr 5, 2026", imgLabel: "article illustration" },
      ],
    },
    testimonials: {
      eyebrow: "What They Say",
      title: "Trusted by families around us",
      items: [
        { quote: "The midwife and doctor were so patient throughout my first delivery. It felt like being accompanied by my own family.", name: "Dewi Lestari", role: "Mother of Arka" },
        { quote: "Prenatal check-ups are always comfortable, the queue is orderly, and the doctor's explanations are easy to understand. Highly recommended.", name: "Putri Maharani", role: "Patient since 2021" },
        { quote: "The place is clean, the service is friendly, and the costs are transparent. My child's immunizations are complete here too.", name: "Bayu Saputra", role: "Father of Kayla" },
      ],
    },
    contact: {
      eyebrow: "Contact & Location",
      title: "We look forward to your visit",
      address: "Jl. Tapir III No.18 Rt.05/Rw.10, Jayamukti, Cikarang Pusat, Bekasi, West Java 17530",
      phoneLabel: "Phone",
      phone: "(021) 89834783",
      emailLabel: "Email",
      email: "nurfajar.klinik@gmail.com",
      hoursLabel: "Opening Hours",
      hoursVal: "Mon–Sat · Contact clinic for full hours",
      mapLabel: "View on Google Maps",
      formTitle: "Book an Appointment",
      form: {
        name: "Full name",
        phone: "Phone / WhatsApp number",
        service: "Service",
        date: "Visit date",
        message: "Note (optional)",
        submit: "Send Request",
      },
    },
    footer: {
      tagline: "Walking with your family through every journey, with love.",
      explore: "Explore",
      services: "Services",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      made: "Nur Fajar Clinic & Maternity Home",
    },
    booking: {
      title: "Book an Appointment",
      desc: "Fill in the form below and our team will reach out to confirm.",
      success: "Thank you! Your appointment request has been received. Our team will contact you shortly.",
      close: "Close",
    },
  },
};
