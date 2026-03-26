import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Soft Power Method | Leadership for Women",
  description:
    "A leadership methodology for women who are ready to lead from who they actually are — not from who they have been performing to be.",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="min-h-screen bg-navy flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(194,166,90,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            {/* Pre-heading ornament */}
            <div className="flex items-center gap-4 mb-12">
              <span className="text-gold/60 text-xs">✦</span>
              <span className="h-px w-12 bg-gold/30" />
              <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/50">
                The Soft Power Method
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-[4.5rem] text-ivory leading-[1.08] mb-10 font-light">
              Strength is calm.
              <br />
              <span className="text-gold">Authority is internal.</span>
              <br />
              Standards are self-defined.
            </h1>

            <div className="h-px w-20 bg-gold/30 mb-10" />

            <p className="font-body text-base sm:text-lg text-ivory/55 leading-relaxed max-w-xl mb-12">
              The Soft Power Method is a leadership methodology for women who
              are ready to lead from who they actually are — not from who they
              have been performing to be.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment" className="btn-primary">
                Take the Free Assessment
              </Link>
              <Link href="/the-method" className="btn-ghost">
                Discover the Method
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS SOFT POWER ─────────────────────────────────── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-label">The Method</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-8">
              This is not about becoming more.
            </h2>
            <div className="h-px w-14 bg-gold/40 mx-auto mb-10" />
            <p className="font-body text-base text-navy/55 leading-relaxed mb-6">
              Most leadership development asks women to add — more skills, more
              confidence, more strategy. The Soft Power Method removes. It
              strips back the accumulated performance and returns you to a
              foundation that is yours.
            </p>
            <p className="font-heading text-xl italic text-navy/70 leading-relaxed">
              Not softer. Not harder. More precisely yourself.
            </p>
          </div>
        </div>
      </section>

      {/* ── THREE PRINCIPLES ───────────────────────────────────── */}
      <section className="py-28 bg-navy/[0.03] border-y border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
            {[
              {
                roman: "I",
                heading: "Know who you are\nwhen no one is watching.",
                body: "Leadership becomes consistent only when your sense of self is not contingent on outcome, approval, or result.",
              },
              {
                roman: "II",
                heading: "Build from alignment,\nnot from effort.",
                body: "When what you think, say, and do are in structural alignment — leading stops feeling like labor.",
              },
              {
                roman: "III",
                heading: "Define your standard.\nThen hold it.",
                body: "Not your industry's standard. Not your past's standard. Not the standard built from fear. Yours.",
              },
            ].map((item) => (
              <div
                key={item.roman}
                className="text-center md:text-left"
              >
                <span className="font-heading text-4xl text-gold/20 block mb-6 font-light">
                  {item.roman}
                </span>
                <h3 className="font-heading text-2xl text-navy leading-snug mb-5 font-medium whitespace-pre-line">
                  {item.heading}
                </h3>
                <p className="font-body text-sm text-navy/50 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDING STATEMENT QUOTE ───────────────────────────── */}
      <section className="py-32 bg-navy relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(194,166,90,0.04) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative">
          <span className="text-gold/25 text-xl block mb-10">✦</span>
          <blockquote className="space-y-2 mb-10">
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-ivory/70 font-light italic leading-relaxed">
              "Soft Power does not harden women
              <br className="hidden sm:block" /> to make them powerful.
            </p>
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-gold italic font-normal leading-relaxed">
              It refines them."
            </p>
          </blockquote>
          <div className="h-px w-12 bg-gold/30 mx-auto mb-8" />
          <cite className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-ivory/30 not-italic">
            Soft Power — Founding Statement
          </cite>
        </div>
      </section>

      {/* ── ASSESSMENT CTA ─────────────────────────────────────── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-label">The Assessment</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-8">
              Where do you actually stand?
            </h2>
            <div className="h-px w-14 bg-gold/40 mx-auto mb-10" />
            <p className="font-body text-base text-navy/55 leading-relaxed mb-12">
              The Soft Power Assessment is a diagnostic instrument — not a quiz.
              It shows you your current position in the development of your
              leadership, clearly and without flattery. The result places you in
              one of four developmental positions. This is your map.
            </p>
            <Link href="/assessment" className="btn-primary">
              Take the Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT MARIJA TEASER ────────────────────────────────── */}
      <section className="py-28 bg-navy/[0.03] border-t border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Text */}
            <div className="order-2 md:order-1">
              <span className="section-label">The Founder</span>
              <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-8">
                I built this because I kept seeing the same pattern.
              </h2>
              <div className="h-px w-14 bg-gold/40 mb-10" />
              <p className="font-body text-base text-navy/55 leading-relaxed mb-6">
                I am Marija Djurović. I am not a motivational speaker. I am not
                here to help you believe in yourself more or push harder. I am a
                pattern recognizer — and what I build with the women I work with
                is permanent.
              </p>
              <p className="font-body text-base text-navy/55 leading-relaxed mb-12">
                Not temporary inspiration. Structural recalibration.
              </p>
              <Link href="/about" className="btn-text">
                About Marija →
              </Link>
            </div>

            {/* Photo */}
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] bg-navy/5 relative overflow-hidden">
                <img
                  src="/images/marija.jpg"
                  alt="Marija Djurović, Founder of The Soft Power Method"
                  className="w-full h-full object-cover object-top"
                />
                {/* Decorative inner border */}
                <div className="absolute inset-4 border border-gold/15 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK WITH ME TEASER ────────────────────────────────── */}
      <section className="py-28 bg-ivory border-t border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-18">
            <span className="section-label">Work With Me</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy">
              Two ways to work together.
              <br />
              Both are structured.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            {[
              {
                title: "Clarity Session",
                detail: "90 minutes · One session",
                price: "500€",
                description:
                  "A single, structured session to identify exactly where you are, what pattern is most active, and what the precise next step is. You leave with a clear picture and a clear direction.",
                cta: "Learn More →",
              },
              {
                title: "1:1 Mentorship",
                detail: "8 weeks · Weekly sessions",
                price: "1.800€",
                description:
                  "Structured recalibration across the four areas of the Soft Power Method — with precision, depth, and a clear arc from start to finish. Not open-ended. Each session has an objective.",
                cta: "Learn More →",
              },
            ].map((service) => (
              <div key={service.title} className="card-bordered">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-2xl text-navy font-medium">
                    {service.title}
                  </h3>
                  <span className="font-heading text-2xl text-gold ml-4">
                    {service.price}
                  </span>
                </div>
                <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/35 block mb-8">
                  {service.detail}
                </span>
                <div className="h-px bg-navy/8 mb-8" />
                <p className="font-body text-sm text-navy/55 leading-relaxed mb-10">
                  {service.description}
                </p>
                <Link href="/work-with-me" className="btn-text">
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
