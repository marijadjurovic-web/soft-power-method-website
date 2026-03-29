import type { Metadata } from "next";
import Link from "next/link";
import SpeakingForm from "@/components/SpeakingForm";

export const metadata: Metadata = {
  title: "Speaking | Keynotes and Workshops for Organizations",
  description:
    "Keynotes and workshops on leadership under pressure, burnout as a structural issue, boundaries in leadership, and sustainable performance. Not motivational speaking. Pattern recognition.",
};

const topics = [
  {
    number: "01",
    title: "Leadership under pressure",
    body: "How high-performing people lose stability, and how to rebuild it. What actually happens in the nervous system and the identity when pressure becomes chronic, and what it takes to lead clearly from inside that.",
  },
  {
    number: "02",
    title: "Burnout as a structural issue",
    body: "Not a lack of motivation, but a misalignment in how people lead themselves. Burnout is not fixed by rest. It is fixed by restructuring the internal operating system that produces it.",
  },
  {
    number: "03",
    title: "Boundaries in leadership",
    body: "Clear, direct, and without damaging relationships. What boundaries actually are, why most people do them wrong, and how to hold them from a place of identity rather than reaction.",
  },
  {
    number: "04",
    title: "Sustainable performance",
    body: "How to grow without creating internal collapse. The difference between performance built on identity and performance built on conditions, and why only one of them compounds over time.",
  },
];

const formats = [
  {
    name: "Keynote",
    duration: "30 to 45 min",
    detail: "A focused, high-impact session on one core topic. Designed for conferences, company events, and leadership days.",
  },
  {
    name: "Extended keynote + Q&A",
    duration: "60 min",
    detail: "Deeper exploration of the topic followed by a structured Q&A. Allows the audience to apply the ideas directly to their context.",
  },
  {
    name: "Workshop / team session",
    duration: "90 to 120 min",
    detail: "Interactive format for smaller groups. Combines structured input with practical work. Designed for leadership teams and development programs.",
  },
  {
    name: "Custom format",
    duration: "Variable",
    detail: "Custom formats can be shaped around the event, organization, or specific challenge. Get in touch to discuss.",
  },
];

const audiences = [
  "Companies and leadership teams",
  "Founders and entrepreneurs",
  "Women leadership programs",
  "HR and people development teams",
];

const differences = [
  "Recognition of their actual patterns, not a generic framework applied from outside",
  "Practical shifts they can apply immediately, not ideas that require months to implement",
  "A different way of leading, not just a different way of thinking about leading",
];

export default function SpeakingPage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[65vh] bg-navy flex items-end relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 100%, rgba(194,166,90,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24 w-full relative">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-gold/50 text-xs">✦</span>
            <span className="h-px w-10 bg-gold/30" />
            <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
              Speaking
            </span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-[4.5rem] text-ivory font-light leading-[1.05] max-w-3xl mb-8">
            Leadership is not built in theory.
            <br />
            <span className="text-gold">
              It is built in the moments people usually avoid.
            </span>
          </h1>
          <div className="h-px w-20 bg-gold/30 mb-8" />
          <p className="font-body text-base sm:text-lg text-ivory/50 leading-relaxed max-w-xl">
            Keynotes and workshops for organizations that want sustainable
            performance, not burnout.
          </p>
        </div>
      </section>

      {/* WHAT I SPEAK ABOUT */}
      <section className="py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="section-label">What I Speak About</span>
              <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-10">
                What happens behind performance.
              </h2>
              <div className="h-px w-14 bg-gold/40 mb-12" />
              <div className="space-y-5 font-body text-base text-navy/60 leading-relaxed">
                <p>
                  I speak about what happens behind performance. Not strategy.
                  Not trends. But what actually shapes how people lead, decide,
                  and operate under pressure.
                </p>
                <p>
                  The topics I work with are not theoretical. They come from
                  years of working directly with founders, leaders, and teams
                  who were performing well on the outside and eroding on the
                  inside.
                </p>
                <p>
                  The work is precise. The language is direct. The effect is
                  recognition, not inspiration.
                </p>
              </div>
            </div>
            <div className="lg:pt-16">
              <div className="border-l-2 border-blush/30 pl-8 py-4 space-y-4">
                <p className="font-heading text-2xl italic text-navy/60 leading-relaxed">
                  "People do not leave my sessions with motivation.
                </p>
                <p className="font-heading text-2xl italic text-navy/70 leading-relaxed">
                  They leave with recognition."
                </p>
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-rosewood/60 pt-2">
                  Marija Djurovic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE TOPICS */}
      <section className="py-36 bg-navy/[0.03] border-y border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-24">
            <span className="section-label">Core Topics</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy">
              Four areas. One thread.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic) => (
              <div
                key={topic.number}
                className="border border-navy/10 p-14 hover:border-blush/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-8">
                  <h3 className="font-heading text-2xl text-navy font-medium leading-tight pr-4">
                    {topic.title}
                  </h3>
                  <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-gold/50 flex-shrink-0">
                    {topic.number}
                  </span>
                </div>
                <div className="h-px bg-navy/8 mb-8" />
                <p className="font-body text-sm text-navy/55 leading-relaxed">
                  {topic.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-36 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-gold/50 text-xs">✦</span>
              <span className="h-px w-10 bg-gold/30" />
              <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
                Formats
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-ivory font-light leading-tight max-w-xl">
              Structured for your event or organization.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {formats.map((format, i) => (
              <div
                key={format.name}
                className={`p-14 border-navy/15 ${
                  i % 2 === 0 ? "border-r" : ""
                } ${i < 2 ? "border-b" : ""} border`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading text-xl text-ivory font-medium">
                    {format.name}
                  </h3>
                  <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-gold/60 ml-4 flex-shrink-0">
                    {format.duration}
                  </span>
                </div>
                <div className="h-px bg-ivory/8 mb-8" />
                <p className="font-body text-sm text-ivory/45 leading-relaxed">
                  {format.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="section-label">Who This Is For</span>
              <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-10">
                Organizations ready for a different conversation.
              </h2>
              <div className="h-px w-14 bg-gold/40 mb-12" />
              <p className="font-body text-base text-navy/55 leading-relaxed">
                This work is relevant wherever leadership development is taken
                seriously, and wherever the existing approaches are not
                producing lasting change.
              </p>
            </div>
            <div>
              <ul className="space-y-0">
                {audiences.map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-center gap-6 py-7 ${
                      i < audiences.length - 1 ? "border-b border-navy/8" : ""
                    }`}
                  >
                    <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-blush/60 w-6 flex-shrink-0 text-right">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-xl text-navy font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="py-36 bg-navy/[0.03] border-y border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <span className="section-label">What Makes This Different</span>
              <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-8">
                This is not motivational speaking.
              </h2>
              <div className="h-px w-14 bg-gold/40 mx-auto mb-10" />
              <p className="font-body text-base text-navy/55 leading-relaxed">
                Motivation is temporary. Recognition is structural. People leave
                these sessions with something that does not fade by the next
                morning.
              </p>
            </div>
            <div className="space-y-0">
              <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/35 mb-8 text-center">
                People leave with
              </p>
              {differences.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-8 py-10 ${
                    i < differences.length - 1 ? "border-b border-navy/8" : ""
                  }`}
                >
                  <span className="font-body text-[0.65rem] text-rosewood/50 uppercase tracking-[0.2em] w-6 flex-shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading text-xl text-navy font-light leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKING FORM */}
      <section className="py-36 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Info */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-gold/50 text-xs">✦</span>
                <span className="h-px w-10 bg-gold/30" />
                <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
                  Book a Speaking Engagement
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-ivory font-light leading-tight mb-10">
                Bring This To Your Organization
              </h2>
              <div className="h-px w-14 bg-gold/30 mb-12" />
              <div className="space-y-5 font-body text-sm text-ivory/50 leading-relaxed">
                <p>
                  Fill in the form with as much detail as you have. I will
                  review the opportunity and be in touch.
                </p>
                <p>
                  Or reach out directly at{" "}
                  <a
                    href="mailto:hello@thesoftpowermethod.com"
                    className="text-gold/70 hover:text-gold transition-colors duration-200"
                  >
                    hello@thesoftpowermethod.com
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <SpeakingForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy border-t border-ivory/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-sm text-ivory/30 leading-relaxed">
            Not ready to inquire yet?{" "}
            <Link
              href="/the-method"
              className="text-ivory/50 hover:text-gold transition-colors duration-200 underline underline-offset-4"
            >
              Learn more about the method.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
