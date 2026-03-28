import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Soft Power Method | Leadership Methodology for Women",
  description:
    "The Soft Power Method helps women lead with identity, structure, and stability. Not through pressure, overextension, or self-abandonment. Take the free Soft Power Assessment.",
};

const recognitionPoints = [
  "You are functioning, but everything feels heavy.",
  "You carry more than you should and call it responsibility.",
  "You make decisions, then question them after.",
  "You are capable of more, but not like this.",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
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
            <div className="flex items-center gap-4 mb-12">
              <span className="text-gold/60 text-xs">✦</span>
              <span className="h-px w-12 bg-gold/30" />
              <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/50">
                The Soft Power Method
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-[4.5rem] text-ivory leading-[1.08] mb-8 font-light">
              You do not need to become
              <br />
              someone new.
              <br />
              <span className="text-gold">
                You need to stop leading from pressure.
              </span>
            </h1>

            <div className="h-px w-20 bg-gold/30 mb-8" />

            <p className="font-body text-base sm:text-lg text-ivory/55 leading-relaxed max-w-xl mb-12">
              Soft Power Method helps women lead with identity, structure, and
              stability. Not through pressure, overextension, or
              self-abandonment.
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

      {/* RECOGNITION BLOCK */}
      <section className="py-32 bg-ivory border-b border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="section-label">Recognition</span>
            <h2 className="section-heading text-3xl sm:text-4xl text-navy mb-12">
              You might recognize yourself here if
            </h2>
            <div className="space-y-0">
              {recognitionPoints.map((point, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-6 py-6 ${
                    i < recognitionPoints.length - 1
                      ? "border-b border-navy/8"
                      : ""
                  }`}
                >
                  <span className="font-body text-[0.65rem] text-blush/60 uppercase tracking-[0.15em] w-5 flex-shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading text-xl text-navy/80 font-light leading-snug italic">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <p className="font-heading text-lg italic text-rosewood/70">
                Pressure is not ambition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SOFT POWER */}
      <section className="py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mx-auto text-center">
            <span className="section-label">The Method</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-10">
              This is not about becoming more.
            </h2>
            <div className="h-px w-14 bg-gold/40 mx-auto mb-12" />
            <p className="font-body text-base text-navy/55 mb-10">
              Most leadership approaches ask women to add. More strategy, more
              confidence, more performance. The Soft Power Method works at the
              level of identity and structure. It removes the accumulated
              performance and returns you to a foundation that holds.
            </p>
            <p className="font-heading text-xl italic text-navy/70 mb-6">
              Not softer. Not harder. More precisely yourself.
            </p>
            <p className="font-body text-sm text-rosewood/70 uppercase tracking-[0.15em]">
              You do not need more strategy. You need stability.
            </p>
          </div>
        </div>
      </section>

      {/* THREE PRINCIPLES */}
      <section className="py-36 bg-[#111825]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              {
                roman: "I",
                heading: "Know who you are\nwhen no one is watching.",
                body: "Leadership becomes consistent only when your sense of self is not contingent on outcome, approval, or result. Identity in leadership is the foundation, not a starting point.",
              },
              {
                roman: "II",
                heading: "Build from alignment,\nnot from effort.",
                body: "When what you think, say, and do are in structural alignment, leading stops feeling like labor. The effort required drops. The results do not.",
              },
              {
                roman: "III",
                heading: "Define your standard.\nThen hold it.",
                body: "Not your industry standard. Not the standard built from fear. Yours. Standards that are genuinely yours create sustainable leadership, not performance.",
              },
            ].map((item) => (
              <div key={item.roman} className="text-center md:text-left">
                <span className="font-heading text-4xl text-gold/35 block mb-8 font-light">
                  {item.roman}
                </span>
                <h3 className="font-heading text-2xl text-ivory leading-snug mb-6 font-medium whitespace-pre-line">
                  {item.heading}
                </h3>
                <p className="font-body text-sm text-ivory/45">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDING STATEMENT QUOTE */}
      <section className="py-40 bg-navy relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(194,166,90,0.04) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative">
          <span className="text-gold/25 text-xl block mb-12">✦</span>
          <blockquote className="space-y-2 mb-14">
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-ivory/70 font-light italic leading-relaxed">
              "Soft Power does not harden women
              <br className="hidden sm:block" /> to make them powerful.
            </p>
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-gold italic font-normal leading-relaxed">
              It refines them."
            </p>
          </blockquote>
          <div className="h-px w-12 bg-gold/30 mx-auto mb-10" />
          <p className="font-heading text-lg italic text-ivory/30 mb-4">
            Real power should feel clean.
          </p>
          <cite className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-ivory/20 not-italic">
            The Soft Power Founding Statement
          </cite>
        </div>
      </section>

      {/* ASSESSMENT CTA */}
      <section className="py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mx-auto text-center">
            <span className="section-label">The Assessment</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-10">
              Where do you actually stand?
            </h2>
            <div className="h-px w-14 bg-gold/40 mx-auto mb-12" />
            <p className="font-body text-base text-navy/55 mb-14">
              The Soft Power Assessment is a diagnostic instrument, not a quiz.
              It shows your current position in leadership development, clearly
              and without flattery. The result places you in one of four
              positions. This is your map.
            </p>
            <Link href="/assessment" className="btn-primary">
              Take the Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT MARIJA TEASER */}
      <section className="py-36 bg-navy/[0.03] border-t border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <span className="section-label">The Founder</span>
              <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-10">
                I built this because I kept seeing the same pattern.
              </h2>
              <div className="h-px w-14 bg-gold/40 mb-12" />
              <p className="font-body text-base text-navy/55 mb-6">
                I am Marija Djurović. I am not a motivational speaker. I am not
                here to help you believe in yourself more or push harder. I am a
                pattern recognizer. What I build with the women I work with is
                permanent.
              </p>
              <p className="font-body text-base text-navy/55 mb-14">
                Not temporary inspiration. Structural recalibration.
              </p>
              <Link href="/about" className="btn-text">
                About Marija →
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] bg-navy/5 relative overflow-hidden">
                <img
                  src="/images/marija.jpg"
                  alt="Marija Djurović, Founder of The Soft Power Method"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-4 border border-gold/15 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK WITH ME TEASER */}
      <section className="py-36 bg-ivory border-t border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <span className="section-label">Work With Me</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy">
              Two ways to work together.
              <br />
              Both are structured.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-20">
            {[
              {
                title: "Clarity Session",
                detail: "90 minutes · One session",
                description:
                  "A single, structured session to identify where you are, what pattern is most active, and what the precise next step is. You leave with a clear picture and a clear direction.",
                cta: "Learn More →",
              },
              {
                title: "Soft Power Mentorship",
                detail: "6 weeks · Weekly sessions",
                description:
                  "A 6-week structural recalibration for women who are already achieving, but not from stability.",
                cta: "Learn More →",
              },
            ].map((service) => (
              <div key={service.title} className="card-bordered">
                <h3 className="font-heading text-2xl text-navy font-medium mb-3">
                  {service.title}
                </h3>
                <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/35 block mb-10">
                  {service.detail}
                </span>
                <div className="h-px bg-blush/25 mb-10" />
                <p className="font-body text-sm text-navy/55 mb-12">
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
