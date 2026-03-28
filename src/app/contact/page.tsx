import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Get in Touch",
  description:
    "Get in touch with Marija Djurović. For inquiries about the Clarity Session, Soft Power Mentorship, or speaking engagements. hello@thesoftpowermethod.com",
};

export default function ContactPage() {
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
      <section className="py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Info */}
            <div className="lg:col-span-4">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-heading text-3xl text-navy mb-10">
                For inquiries about working together.
              </h2>
              <div className="h-px w-14 bg-blush/40 mb-12" />
              <div className="space-y-5 font-body text-sm text-navy/55 leading-relaxed">
                <p>
                  Use the form for inquiries about the Clarity Session, Soft
                  Power Mentorship, speaking engagements, or anything else.
                </p>
                <p>
                  I read every message personally. Response time is typically
                  2–3 business days.
                </p>
              </div>

              <div className="mt-10">
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 mb-2">
                  Email directly
                </p>
                <a
                  href="mailto:hello@thesoftpowermethod.com"
                  className="font-body text-sm text-rosewood hover:text-navy transition-colors duration-200"
                >
                  hello@thesoftpowermethod.com
                </a>
              </div>

              <div className="mt-14 space-y-8">
                {[
                  {
                    label: "Clarity Session",
                    detail: "90 min",
                  },
                  {
                    label: "Soft Power Mentorship",
                    detail: "6 weeks",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-l-2 border-blush/30 pl-6"
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
              <p className="font-body text-sm text-navy/55 leading-relaxed mb-10">
                Didn&apos;t find what you were looking for? Not sure where to
                start? Write directly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
