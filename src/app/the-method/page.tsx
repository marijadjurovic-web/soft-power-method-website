import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Method | Identity-Based Leadership for Women",
  description:
    "The Soft Power Method works through four areas — Identity, Integrity, Stability, and Standards — returning women in leadership to their center. Discover the four archetypes: Survival Achiever, Emerging Standard, Regulated Leader, Soft Power Woman.",
};

const pillars = [
  {
    number: "01",
    name: "Identity",
    headline: "Knowing who you are when external validation is removed.",
    body: "Most women have built their identity around what they achieve — which makes every setback a threat to self. Identity work removes that fragility without removing ambition. When your sense of self is stable, your leadership becomes consistent. Not because nothing is difficult, but because difficulty no longer destabilizes the person doing the work.",
  },
  {
    number: "02",
    name: "Integrity",
    headline: "Structural alignment between what you think, say, and do.",
    body: "Not moral integrity in the conventional sense — structural integrity. When these three are misaligned, leadership becomes exhausting. You spend energy managing the gap between who you are and how you present. When they are aligned, leadership becomes natural. Decisions become easier. Boundaries hold themselves. The internal negotiation stops.",
  },
  {
    number: "03",
    name: "Stability",
    headline: "The ability to remain clear in the presence of difficulty.",
    body: "Not emotional suppression — the opposite. Stability is what allows you to feel fully and respond precisely. It is not the absence of reaction; it is the ability to choose your response. This is a learnable skill, and it is the foundation of everything else in the method. Without it, the other work cannot hold.",
  },
  {
    number: "04",
    name: "Standards",
    headline: "Self-defined. Not externally imposed.",
    body: "Most women operate by standards set by others — their industry, their past, their fear, their need for approval. Redefining your standards is not about lowering the bar. It is about making the bar yours. Standards that are genuinely yours create a different quality of leadership — one that is sustainable, consistent, and free from the chronic exhaustion of performing up to something that was never really your own.",
  },
];

const archetypes = [
  {
    name: "Survival Achiever",
    indicator: "01",
    color: "border-rosewood/30 hover:border-rosewood/60",
    accentColor: "text-rosewood",
    description:
      "High output, genuine results, fragile foundation. Operating from threat-avoidance rather than direction. The engine is running, but the fuel is fear. Results are real. The cost is invisible — until it isn't.",
    markers: [
      "Difficulty slowing down or resting without anxiety",
      "Achievement feels relieving, not satisfying",
      "Identity is heavily tied to output and productivity",
      "Chronic low-grade sense of not being enough",
    ],
  },
  {
    name: "Emerging Standard",
    indicator: "02",
    color: "border-blush/40 hover:border-blush/70",
    accentColor: "text-plum",
    description:
      "The old operating system is visibly breaking down. You are beginning to feel the difference between performance and presence. The work of recalibration is beginning — and it is disorienting, because the structures you relied on are no longer working.",
    markers: [
      "Sense that something fundamental needs to change",
      "Starting to question old definitions of success",
      "Inconsistency between internal state and external presentation",
      "Beginning to build internal reference points",
    ],
  },
  {
    name: "Regulated Leader",
    indicator: "03",
    color: "border-gold/30 hover:border-gold/60",
    accentColor: "text-gold",
    description:
      "Internal regulation is established. Identity is clearer. Standards are forming. Leadership is becoming more consistent and less reactive. The foundation is solid enough to build from — and you are beginning to build deliberately.",
    markers: [
      "Emotional regulation is more consistent",
      "Clearer sense of personal values and limits",
      "Less reactivity in difficult situations",
      "Beginning to make decisions from direction rather than avoidance",
    ],
  },
  {
    name: "Soft Power Woman",
    indicator: "04",
    color: "border-navy/30 hover:border-gold/50",
    accentColor: "text-navy",
    description:
      "Fully recalibrated. Authority is internal. Standards are self-defined. Leadership is an expression of who you are, not a performance of what is expected. Influence is a byproduct — consistent, without effort, because it comes from alignment.",
    markers: [
      "Leading from clarity, not from performance",
      "Standards hold under pressure without effort",
      "Identity stable regardless of external conditions",
      "Influence is natural — not engineered",
    ],
  },
];

export default function TheMethodPage() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
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

      {/* ── METHOD OVERVIEW ────────────────────────────────────── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="section-label">Overview</span>
            <h2 className="section-heading text-3xl sm:text-4xl text-navy mb-8">
              Built on a single premise.
            </h2>
            <div className="h-px w-14 bg-gold/40 mb-10" />
            <div className="space-y-5 font-body text-base text-navy/60 leading-relaxed">
              <p>
                The Soft Power Method is built on a single premise: that
                sustainable leadership requires a stable internal foundation.
                Not hardness. Not armor. Foundation.
              </p>
              <p>
                The method works through four interconnected areas of
                development. When these areas are clear and aligned, leadership
                becomes less effortful — not because it gets easier, but because
                you stop working against yourself.
              </p>
              <p>
                This is not a framework you layer on top of who you are. It is a
                process of returning to who you already are — precisely and
                permanently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS ───────────────────────────────────────── */}
      <section className="py-28 bg-navy/[0.03] border-y border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <span className="section-label">The Four Areas</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy">
              Four areas. One foundation.
            </h2>
          </div>

          <div className="space-y-0">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.name}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 py-16 ${
                  i < pillars.length - 1 ? "border-b border-navy/8" : ""
                }`}
              >
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-gold/50">
                    {pillar.number}
                  </span>
                </div>

                {/* Name */}
                <div className="md:col-span-2">
                  <h3 className="font-heading text-2xl text-gold font-medium">
                    {pillar.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <p className="font-heading text-xl text-navy font-medium leading-snug mb-5 italic">
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

      {/* ── THE ASSESSMENT ─────────────────────────────────────── */}
      <section className="py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-gold/50 text-xs">✦</span>
              <span className="h-px w-10 bg-gold/30" />
              <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
                The Assessment
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-ivory font-light leading-tight mb-8">
              The Soft Power Assessment.
            </h2>
            <div className="h-px w-14 bg-gold/30 mb-10" />
            <div className="space-y-5 font-body text-base text-ivory/55 leading-relaxed mb-12">
              <p>
                The Soft Power Assessment is a diagnostic instrument — not a
                quiz. It was designed to act as a mirror: to show you where you
                currently are in your development across the four areas of the
                method, clearly and without flattery.
              </p>
              <p>
                The result places you in one of four developmental positions. Not
                to label you — to orient you. This is the map. The method is the
                territory.
              </p>
            </div>
            <Link href="/assessment" className="btn-primary">
              Take the Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOUR ARCHETYPES ────────────────────────────────────── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <span className="section-label">The Four Positions</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-6">
              Where do you find yourself?
            </h2>
            <p className="font-body text-base text-navy/50 max-w-xl mx-auto leading-relaxed">
              The assessment reveals your current developmental position across
              the four areas. Each position is a stage — not a verdict.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {archetypes.map((archetype) => (
              <div
                key={archetype.name}
                className={`border p-10 transition-colors duration-300 ${archetype.color}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-heading text-2xl text-navy font-medium">
                    {archetype.name}
                  </h3>
                  <span
                    className={`font-body text-[0.65rem] uppercase tracking-[0.2em] ${archetype.accentColor} opacity-60`}
                  >
                    {archetype.indicator}
                  </span>
                </div>
                <div className="h-px bg-navy/8 mb-8" />
                <p className="font-body text-sm text-navy/60 leading-relaxed mb-8">
                  {archetype.description}
                </p>
                <ul className="space-y-2">
                  {archetype.markers.map((marker) => (
                    <li key={marker} className="flex items-start gap-3">
                      <span className="text-gold/50 mt-1 text-xs flex-shrink-0">
                        —
                      </span>
                      <span className="font-body text-sm text-navy/50 leading-relaxed">
                        {marker}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-28 bg-navy/[0.03] border-t border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <span className="section-label">Ready to Begin</span>
          <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-8 max-w-xl mx-auto">
            Start with the assessment.
            <br />
            It takes 10 minutes.
          </h2>
          <div className="h-px w-14 bg-gold/40 mx-auto mb-12" />
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
