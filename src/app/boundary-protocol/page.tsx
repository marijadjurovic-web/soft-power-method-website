import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Boundary Protocol | Soft Power Method",
  description:
    "A tactical protocol for women who over-explain, feel guilty after saying no, freeze in the moment, or go back to manage other people's discomfort. Language, structure, and repetition for real moments.",
};

const parts = [
  {
    number: "Part One",
    name: "Spot It",
    body: "How to recognize when your body is saying no before your mouth says yes.",
  },
  {
    number: "Part Two",
    name: "Say It",
    body: "How to state a boundary simply, clearly, and without over-explaining.",
  },
  {
    number: "Part Three",
    name: "Survive It",
    body: "How to stop collapsing after the boundary through guilt, scanning, and self-doubt.",
  },
  {
    number: "Part Four",
    name: "Hold It",
    body: "How to repeat the boundary and follow through when someone pushes back.",
  },
  {
    number: "Final Section",
    name: "When Your Mind Goes Blank",
    body: "Emergency phrases for the freeze response.",
  },
];

const forYouIf = [
  "You say yes before checking yourself.",
  "You explain too much once you finally say no.",
  "You feel guilty after being clear.",
  "You freeze when caught off guard.",
  "You know what you want to say, but lose access to it in the moment.",
];

const promise = [
  "A clearer sense of when your body is signaling no.",
  "Cleaner language for real moments.",
  "Less over-explaining.",
  "Less collapse after clarity.",
  "A stronger ability to hold the line when pressure comes back.",
];

const faqs = [
  {
    q: "What is this?",
    a: "A tactical boundary protocol in PDF form.",
  },
  {
    q: "Who is it for?",
    a: "For women who over-explain, feel guilty after no, freeze in real moments, or struggle to hold a boundary once it is stated.",
  },
  {
    q: "Is this coaching?",
    a: "No. It is a practical protocol.",
  },
  {
    q: "How will I receive it?",
    a: "You will get instant access after purchase.",
  },
  {
    q: "Is this a full course?",
    a: "No. It is a focused tactical product designed to help you in one specific area.",
  },
  {
    q: "What happens after this?",
    a: "If you want to understand the deeper pattern underneath the boundary struggle, the next step is a Soft Power Clarity Session.",
  },
];

const PAYPAL_URL = "https://paypal.com/PLACEHOLDER";

export default function BoundaryProtocolPage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[65vh] bg-navy flex items-end relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 40% 100%, rgba(194,166,90,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24 w-full relative">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-gold/50 text-xs">✦</span>
            <span className="h-px w-10 bg-gold/30" />
            <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
              Soft Power Method
            </span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-[4.5rem] text-ivory font-light leading-[1.05] max-w-3xl mb-6">
            THE BOUNDARY PROTOCOL
          </h1>
          <p className="font-heading text-xl sm:text-2xl text-gold italic font-light mb-10 max-w-2xl">
            How to Set a Boundary, Survive the Discomfort, and Hold It
          </p>
          <div className="h-px w-20 bg-gold/30 mb-10" />
          <p className="font-body text-base text-ivory/50 leading-relaxed max-w-xl mb-12">
            For the woman whose body says no, but whose mouth still says yes. A
            tactical protocol for women who over-explain, feel guilty after
            saying no, freeze in the moment, or go back to manage other
            people&apos;s discomfort. This is not theory. It is language,
            structure, and repetition for real moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={PAYPAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get the protocol — €29
            </a>
          </div>
          <p className="font-body text-[0.6rem] uppercase tracking-[0.2em] text-ivory/25 mt-5">
            Instant access &middot; PDF format &middot; Soft Power Method
          </p>
        </div>
      </section>

      {/* SECTION 2 — The real problem */}
      <section className="py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="section-heading text-3xl sm:text-4xl text-navy mb-10">
              You do not struggle to set boundaries.
            </h2>
            <div className="h-px w-14 bg-gold/40 mb-12" />
            <div className="space-y-6 font-body text-base text-navy/60">
              <p>
                You struggle with what happens after. The guilt. The scan for
                danger. The urge to explain. The impulse to go back and soften
                what was already true.
              </p>
              <p>
                That is where most women lose themselves. Not because they do
                not know better. Because their body still reads clarity like
                risk.
              </p>
              <p className="font-medium text-navy/80">
                The Boundary Protocol is built for that exact sequence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — What this is + CTA */}
      <section className="py-36 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-gold/50 text-xs">✦</span>
              <span className="h-px w-10 bg-gold/30" />
              <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
                What This Is
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-ivory font-light leading-tight mb-10">
              What this is
            </h2>
            <div className="h-px w-14 bg-gold/30 mb-12" />
            <div className="space-y-6 font-body text-base text-ivory/55 mb-14">
              <p>
                The Boundary Protocol is a tactical PDF designed to help you
                recognize when a boundary is needed, say it simply, survive the
                discomfort that follows, hold it when someone pushes back, and
                respond when your mind goes blank.
              </p>
              <p className="font-medium text-ivory/80">
                This is not a mindset pep talk. It is a practical protocol for
                real situations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={PAYPAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get the protocol — €29
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — What's inside */}
      <section className="py-36 bg-ivory border-y border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-24">
            <span className="section-label">The Contents</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy">
              Inside The Boundary Protocol
            </h2>
          </div>
          <div className="space-y-0 max-w-4xl mx-auto">
            {parts.map((part, i) => (
              <div
                key={part.number}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 py-10 ${
                  i < parts.length - 1 ? "border-b border-navy/8" : ""
                }`}
              >
                <div className="md:col-span-2">
                  <span className="font-body text-[0.6rem] uppercase tracking-[0.2em] text-gold/50 block mb-1">
                    {part.number}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-heading text-xl text-navy font-medium">
                    {part.name}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="font-body text-sm text-navy/55">
                    {part.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Who this is for */}
      <section className="py-36 bg-navy/[0.03]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="section-label">Who This Is For</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-12">
              This is for you if
            </h2>
            <div className="space-y-0 mb-12">
              {forYouIf.map((line, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-6 py-6 ${
                    i < forYouIf.length - 1 ? "border-b border-navy/8" : ""
                  }`}
                >
                  <span className="font-body text-[0.65rem] text-blush/60 uppercase tracking-[0.15em] w-5 flex-shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading text-xl text-navy/80 font-light italic">
                    {line}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-rosewood/70 uppercase tracking-[0.15em]">
              You do not need more awareness. You need a cleaner protocol.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Why this works */}
      <section className="py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="section-label">The Reason</span>
            <h2 className="section-heading text-3xl sm:text-4xl text-navy mb-10">
              Why this works
            </h2>
            <div className="h-px w-14 bg-gold/40 mb-12" />
            <div className="space-y-6 font-body text-base text-navy/60">
              <p>
                Most boundary advice stops at &ldquo;just say no.&rdquo; That
                is not enough. Because the hard part is rarely the sentence
                itself. The hard part is what your body does after.
              </p>
              <p>
                This protocol does not only help you say the boundary. It helps
                you stay with yourself after you say it.
              </p>
              <p className="font-medium text-navy/80">
                That is where clean boundaries are built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Product promise */}
      <section className="py-36 bg-[#111825]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-gold/50 text-xs">✦</span>
              <span className="h-px w-10 bg-gold/30" />
              <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
                The Result
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-ivory font-light leading-tight mb-12">
              What you leave with
            </h2>
            <div className="space-y-0 mb-14">
              {promise.map((line, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-6 py-6 ${
                    i < promise.length - 1 ? "border-b border-ivory/8" : ""
                  }`}
                >
                  <span className="font-body text-[0.65rem] text-gold/35 uppercase tracking-[0.15em] w-5 flex-shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading text-xl text-ivory/75 font-light">
                    {line}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-ivory/35 uppercase tracking-[0.15em]">
              Not perfection. Not performance. A usable shift.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Brand bridge */}
      <section className="py-36 bg-ivory border-t border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="section-label">From the Soft Power Method</span>
            <h2 className="section-heading text-3xl sm:text-4xl text-navy mb-10">
              From the Soft Power Method
            </h2>
            <div className="h-px w-14 bg-gold/40 mb-12" />
            <div className="space-y-6 font-body text-base text-navy/60">
              <p>
                The Boundary Protocol is a tactical entry point into the Soft
                Power world. It focuses on one specific area: what happens when
                you know the truth, but struggle to hold it under pressure.
              </p>
              <p>
                If this opens something deeper for you, that is not failure. It
                means there is a larger pattern underneath it. This protocol
                helps you in the moment. The deeper work comes later.
              </p>
            </div>
            <div className="mt-12">
              <Link href="/work-with-me" className="btn-text">
                Learn about the Clarity Session →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section className="py-36 bg-navy/[0.03] border-t border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="section-label">Questions</span>
            <h2 className="section-heading text-3xl sm:text-4xl text-navy mb-16">
              Questions
            </h2>
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`py-8 ${
                    i < faqs.length - 1 ? "border-b border-navy/8" : ""
                  }`}
                >
                  <p className="font-heading text-lg text-navy font-medium mb-3">
                    {faq.q}
                  </p>
                  <p className="font-body text-sm text-navy/55">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — Final CTA */}
      <section className="py-40 bg-navy relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(194,166,90,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="max-w-xl">
            <span className="text-gold/25 text-xl block mb-10">✦</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-ivory font-light leading-tight mb-4">
              The Boundary Protocol
            </h2>
            <p className="font-heading text-xl text-gold italic font-light mb-10">
              How to Set a Boundary, Survive the Discomfort, and Hold It
            </p>
            <div className="h-px w-14 bg-gold/30 mb-10" />
            <p className="font-body text-base text-ivory/50 mb-12">
              A tactical protocol for women who over-explain, freeze, and feel
              guilty after no.
            </p>
            <a
              href={PAYPAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get the protocol — €29
            </a>
            <p className="font-body text-[0.6rem] uppercase tracking-[0.2em] text-ivory/25 mt-5">
              Instant access &middot; PDF format
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
