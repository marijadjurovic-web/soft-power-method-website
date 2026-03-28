import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Method | Identity-Based Leadership for Women",
  description:
    "The Soft Power Method works through four areas: Identity, Integrity, Stability, and Standards. Built for women in leadership who want sustainable leadership, not more performance. Discover your archetype.",
};

const pillars = [
  {
    number: "01",
    name: "Identity",
    headline: "Knowing who you are when external validation is removed.",
    body: "Most women have built their identity around what they achieve, which makes every setback a threat to self. Identity in leadership is not a soft concept. It is the structural foundation that determines whether your leadership is consistent or reactive. When your sense of self is stable, your leadership becomes consistent. Not because nothing is difficult, but because difficulty no longer destabilizes the person doing the work.",
  },
  {
    number: "02",
    name: "Integrity",
    headline: "Structural alignment between what you think, say, and do.",
    body: "Not moral integrity in the conventional sense. Structural integrity. When these three are misaligned, leadership becomes exhausting. You spend energy managing the gap between who you are and how you present. When they are aligned, decisions become easier. Boundaries hold. The internal negotiation stops.",
  },
  {
    number: "03",
    name: "Stability",
    headline: "The ability to remain clear in the presence of difficulty.",
    body: "Not emotional suppression. The opposite. Emotional regulation in leadership is not about controlling how you feel. It is about choosing how you respond. Stability is what allows you to feel fully and act precisely. It is learnable, and it is the foundation everything else in the method is built on. Without it, the other work cannot hold.",
  },
  {
    number: "04",
    name: "Standards",
    headline: "Self-defined. Not externally imposed.",
    body: "Most women operate by standards set by others: their industry, their past, their fear. Boundaries in leadership start here, with standards that are genuinely yours. Redefining them is not about lowering the bar. It is about making the bar yours. Standards that are truly yours create sustainable leadership, not the chronic exhaustion of performing up to something that was never your own.",
  },
];


export default function TheMethodPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="min-h-[60vh] bg-navy flex items-end relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 100%, rgba(194,166,90,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 w-full relative">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gold/50 text-xs">✦</span>
            <span className="h-px w-10 bg-gold/30" />
            <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
              The Soft Power Method
            </span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-ivory font-light leading-[1.05] max-w-3xl">
            A method for{" "}
            <span className="text-gold">recalibration,</span>
            <br />
            not reinvention.
          </h1>
          <div className="h-px w-20 bg-gold/30 mt-10" />
        </div>
      </section>

      {/* METHOD OVERVIEW */}
      <section className="py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="section-label">Overview</span>
            <h2 className="section-heading text-3xl sm:text-4xl text-navy mb-10">
              Built on a single premise.
            </h2>
            <div className="h-px w-14 bg-gold/40 mb-12" />
            <div className="space-y-5 font-body text-base text-navy/60 leading-relaxed">
              <p>
                Sustainable leadership requires a stable internal foundation.
                Not hardness. Not armor. Foundation. The Soft Power Method
                builds that foundation through four interconnected areas of
                development.
              </p>
              <p>
                When these areas are aligned, leadership becomes less effortful.
                Not because it gets easier. Because you stop working against
                yourself.
              </p>
              <p>
                This is not a framework layered on top of who you are. It is a
                process of returning to who you already are, precisely and
                permanently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="py-36 bg-navy/[0.03] border-y border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-24">
            <span className="section-label">The Four Areas</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy">
              Four areas. One foundation.
            </h2>
          </div>

          <div className="space-y-0">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.name}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 py-20 ${
                  i < pillars.length - 1 ? "border-b border-navy/8" : ""
                }`}
              >
                <div className="md:col-span-1">
                  <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-gold/50">
                    {pillar.number}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-heading text-2xl text-gold font-medium">
                    {pillar.name}
                  </h3>
                </div>
                <div className="md:col-span-9">
                  <p className="font-heading text-xl text-navy font-medium leading-snug mb-6 italic">
                    {pillar.headline}
                  </p>
                  <p className="font-body text-base text-navy/55 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ASSESSMENT */}
      <section className="py-36 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-gold/50 text-xs">✦</span>
              <span className="h-px w-10 bg-gold/30" />
              <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
                The Assessment
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-ivory font-light leading-tight mb-10">
              The Soft Power Assessment.
            </h2>
            <div className="h-px w-14 bg-gold/30 mb-12" />
            <div className="space-y-5 font-body text-base text-ivory/55 mb-14">
              <p>
                The Soft Power Assessment is a diagnostic instrument, not a
                quiz. It was built to act as a mirror: to show you where you
                currently are across the four areas of the method, clearly and
                without flattery.
              </p>
              <p>
                The result places you in one of four developmental positions.
                Not to label you. To orient you. This is the map. The method is
                the territory.
              </p>
            </div>
            <Link href="/assessment" className="btn-primary">
              Take the Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* FOUR ARCHETYPES */}
      <section className="py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="section-label">The Four Positions</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-10">
              Where Are You Now?
            </h2>
            <div className="h-px w-14 bg-gold/40 mb-12" />
            <div className="space-y-6 font-body text-base text-navy/60 mb-14">
              <p>
                The Soft Power Assessment places you in one of four developmental
                positions. Each position has a distinct pattern, a distinct
                pressure point, and a distinct next step.
              </p>
              <p>
                This is not a personality type. It is a map of where you
                currently are, and what the work from here looks like.
              </p>
            </div>
            <Link href="/assessment" className="btn-primary">
              Take the free assessment
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 bg-navy/[0.03] border-t border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <span className="section-label">Ready to Begin</span>
          <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-10 max-w-xl mx-auto">
            Start with the assessment.
            <br />
            It takes 10 minutes.
          </h2>
          <div className="h-px w-14 bg-gold/40 mx-auto mb-14" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="btn-primary">
              Take the Free Assessment
            </Link>
            <Link href="/work-with-me" className="btn-secondary">
              Work With Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
