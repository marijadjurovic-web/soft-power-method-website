"use client";

import { useState } from "react";
import type { Metadata } from "next";

const subjects = [
  { value: "clarity-session", label: "Clarity Session" },
  { value: "mentorship", label: "1:1 Mentorship" },
  { value: "speaking", label: "Speaking Engagement" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          data as unknown as Record<string, string>
        ).toString(),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="min-h-[50vh] bg-navy flex items-end relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 100%, rgba(194,166,90,0.06) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 w-full relative">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gold/50 text-xs">✦</span>
            <span className="h-px w-10 bg-gold/30" />
            <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
              Contact
            </span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-ivory font-light leading-[1.05]">
            Get in touch.
          </h1>
          <div className="h-px w-20 bg-gold/30 mt-10" />
        </div>
      </section>

      {/* ── CONTACT FORM ───────────────────────────────────────── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Info */}
            <div className="lg:col-span-4">
              <span className="section-label">Inquiries</span>
              <h2 className="section-heading text-3xl text-navy mb-8">
                For inquiries about working together.
              </h2>
              <div className="h-px w-14 bg-gold/40 mb-10" />
              <div className="space-y-5 font-body text-sm text-navy/55 leading-relaxed">
                <p>
                  Use the form for inquiries about the Clarity Session, 1:1
                  Mentorship, speaking engagements, or anything else.
                </p>
                <p>
                  I read every message personally. Response time is typically
                  2–3 business days.
                </p>
              </div>

              <div className="mt-16 space-y-8">
                {[
                  {
                    label: "Clarity Session",
                    detail: "90 min · 500€",
                  },
                  {
                    label: "1:1 Mentorship",
                    detail: "8 weeks · 1.800€",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-l-2 border-gold/30 pl-6"
                  >
                    <p className="font-heading text-lg text-navy font-medium mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/35">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              {status === "success" ? (
                <div className="border border-gold/30 p-16 text-center">
                  <span className="text-gold/50 text-xl block mb-6">✦</span>
                  <h3 className="font-heading text-3xl text-navy font-light mb-4">
                    Message received.
                  </h3>
                  <p className="font-body text-sm text-navy/55">
                    I will be in touch within 2–3 business days.
                  </p>
                </div>
              ) : (
                /* Netlify Forms: the hidden form ensures Netlify detects it at build time */
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 block mb-3">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full border border-navy/15 bg-transparent px-5 py-4 font-body text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-gold/60 transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 block mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full border border-navy/15 bg-transparent px-5 py-4 font-body text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-gold/60 transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 block mb-3">
                      Subject
                    </label>
                    <select
                      name="subject"
                      required
                      className="w-full border border-navy/15 bg-ivory px-5 py-4 font-body text-sm text-navy focus:outline-none focus:border-gold/60 transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>
                        Select a subject
                      </option>
                      {subjects.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 block mb-3">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={7}
                      className="w-full border border-navy/15 bg-transparent px-5 py-4 font-body text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-gold/60 transition-colors duration-200 resize-none"
                      placeholder="Tell me what brought you here and what you are looking for."
                    />
                  </div>

                  {status === "error" && (
                    <p className="font-body text-sm text-rosewood">
                      Something went wrong. Please try again or contact directly
                      by email.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
