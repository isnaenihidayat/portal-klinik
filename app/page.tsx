// Sprint 1 — Halaman verifikasi design system
// Pada Sprint 2, file ini akan diganti dengan komponen section lengkap

import { Icon, Btn, SectionHead, Placeholder } from "@/components/ui";

export default function HomePage() {
  return (
    <main style={{ padding: "60px 28px", maxWidth: "900px", margin: "0 auto" }}>
      {/* ── Verifikasi font ──────────────────────────────────────── */}
      <section style={{ marginBottom: "60px" }}>
        <h1 style={{ marginBottom: "12px" }}>Klinik & Rumah Bersalin Nur Fajar</h1>
        <p style={{ color: "var(--ink-soft)", fontSize: "19px", marginBottom: "8px" }}>
          Font Spectral (serif) & Figtree (sans) — design system aktif ✓
        </p>
        <p style={{ fontFamily: "var(--serif)", fontSize: "22px", fontStyle: "italic" }}>
          Tempat yang hangat untuk menyambut kehidupan baru
        </p>
      </section>

      {/* ── Verifikasi warna ─────────────────────────────────────── */}
      <section style={{ marginBottom: "60px" }}>
        <SectionHead
          eyebrow="Design System"
          title="Warna & Token"
          desc="Semua CSS custom properties dari variables.css aktif."
        />
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {[
            ["--rose-deep",  "Rose Deep"],
            ["--rose",       "Rose"],
            ["--rose-soft",  "Rose Soft"],
            ["--rose-tint",  "Rose Tint"],
            ["--sage-deep",  "Sage Deep"],
            ["--sage",       "Sage"],
            ["--sage-tint",  "Sage Tint"],
            ["--cream",      "Cream"],
            ["--ink",        "Ink"],
            ["--ink-soft",   "Ink Soft"],
          ].map(([v, label]) => (
            <div key={v} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  background: `var(${v})`,
                  border: "1px solid var(--line)",
                }}
              />
              <span style={{ fontSize: "11px", color: "var(--muted)", marginTop: "6px", display: "block" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Verifikasi Button ────────────────────────────────────── */}
      <section style={{ marginBottom: "60px" }}>
        <h3 style={{ marginBottom: "16px" }}>Buttons</h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <Btn variant="primary" icon="calendar">Buat Janji Temu</Btn>
          <Btn variant="ghost"   icon="whatsapp">Chat WhatsApp</Btn>
        </div>
      </section>

      {/* ── Verifikasi Icon ──────────────────────────────────────── */}
      <section style={{ marginBottom: "60px" }}>
        <h3 style={{ marginBottom: "16px" }}>Icons</h3>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", color: "var(--rose-deep)" }}>
          {["baby","scan","shield","heart","stetho","flask","phone","clock","pin","mail","calendar","check","arrow","star","whatsapp","menu","close","quote"].map((n) => (
            <Icon key={n} name={n} size={24} />
          ))}
        </div>
      </section>

      {/* ── Verifikasi Placeholder ───────────────────────────────── */}
      <section>
        <h3 style={{ marginBottom: "16px" }}>Placeholder</h3>
        <div style={{ maxWidth: "400px" }}>
          <Placeholder label="foto bunda & bayi" ratio="4 / 3" />
        </div>
      </section>
    </main>
  );
}
