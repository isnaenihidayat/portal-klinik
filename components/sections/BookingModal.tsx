"use client";

import { useState, useEffect } from "react";
import { Icon, Btn } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface BookingModalProps {
  t: SiteContent;
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ t, open, onClose }: BookingModalProps) {
  const [done, setDone] = useState(false);

  // Reset to form view each time modal opens
  useEffect(() => {
    if (open) setDone(false);
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const c = t.contact;
  const b = t.booking;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="modal-close" onClick={onClose} aria-label={b.close}>
          <Icon name="close" size={22} />
        </button>

        {done ? (
          /* ── Success state ── */
          <div className="modal-success">
            <span className="modal-success-ic">
              <Icon name="check" size={36} />
            </span>
            <p>{b.success}</p>
            <Btn variant="primary" onClick={onClose}>
              {b.close}
            </Btn>
          </div>
        ) : (
          /* ── Form state ── */
          <>
            <h3 className="modal-title" id="modal-title">
              {b.title}
            </h3>
            <p className="modal-desc">{b.desc}</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label className="field">
                <span>{c.form.name}</span>
                <input
                  type="text"
                  required
                  placeholder={c.form.name}
                  autoComplete="name"
                />
              </label>

              <label className="field">
                <span>{c.form.phone}</span>
                <input
                  type="tel"
                  required
                  placeholder="08xx xxxx xxxx"
                  autoComplete="tel"
                />
              </label>

              <div className="field-row">
                <label className="field">
                  <span>{c.form.service}</span>
                  <select required defaultValue="">
                    <option value="" disabled>
                      —
                    </option>
                    {t.services.items.map((it, i) => (
                      <option key={i} value={it.name}>
                        {it.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="field">
                  <span>{c.form.date}</span>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </label>
              </div>

              <Btn variant="primary" icon="check" full type="submit">
                {c.form.submit}
              </Btn>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
