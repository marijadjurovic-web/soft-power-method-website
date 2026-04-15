import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Soft Power Assessment | Soft Power Method",
  description:
    "Find the pattern currently shaping how you lead under pressure. In less than 10 minutes, the Soft Power Assessment will show you where you are really leading from.",
};

const TALLY_URL = "https://tally.so/r/ZjNr5z";

const whatYouGet = [
  "The pattern currently shaping your decisions under pressure",
  "The Soft Power type you are operating from right now",
  "A deeper reflection sent to your email",
  "Clearer language for what has felt true in your body, but hard to name",
];

const forWhoItems = [
  "Says yes before checking herself",
  "Over-explains after saying no",
  "Feels composed on the outside but braced underneath",
  "Knows something is off, but has not fully named the pattern yet",
  "Is done performing strength and ready for clarity",
];

const patterns = [
  { name: "Survival Achiever", tagline: "Capable. Reliable. Internally braced." },
  { name: "Emerging Standard", tagline: "Awake to the gap. Still negotiating herself." },
  { name: "Regulated Leader", tagline: "Clearer decisions. Less collapse under pressure." },
  { name: "Soft Power Woman", tagline: "Stable authority. Standards that hold." },
];

export default function AssessmentPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#111825] py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-gold mb-8">Soft Power Assessment</p>
          <h1 className="font-heading text-5xl md:text-6xl text-ivory leading-tight mb-8">
            Find the pattern currently shaping how you lead under pressure.
          </h1>
          <p className="text-ivory/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            In less than 10 minutes, the Soft Power Assessment will show you
            where you are really leading from and what that pattern may be
            costing you in your decisions, standards, energy, and relationships.
          </p>
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-navy font-semibold px-12 py-4 text-sm tracking-widest uppercase hover:bg-gold/90 transition-colors mb-5"
          >
            Start the Assessment
          </a>
          <p className="text-ivory/40 text-sm">
            Free · Takes less than 10 minutes · Result + deeper reflection by email
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-ivory py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-heading text-3xl md:text-4xl text-navy leading-snug mb-10">
            You are not too much. You are not behind. You are not confused.
          </p>
          <div className="space-y-6 text-navy/70 text-lg leading-relaxed">
            <p>
              But you may be leading from a pattern that was built for pressure,
              not for you.
            </p>
            <p>
              That matters. Because the pattern underneath your leadership shapes
              everything: how you decide, what you tolerate, what you carry, how
              often you override yourself, and how much of your life still
              depends on self-abandonment.
            </p>
            <p className="text-navy font-medium">
              The Soft Power Assessment helps you see that clearly.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-navy py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-gold mb-10">What you will get</p>
          <ul className="space-y-6 mb-14">
            {whatYouGet.map((item) => (
              <li key={item} className="flex items-start gap-5">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span className="font-heading text-2xl text-ivory leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-navy font-semibold px-12 py-4 text-sm tracking-widest uppercase hover:bg-gold/90 transition-colors"
          >
            See My Pattern
          </a>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="bg-ivory py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="section-label text-rosewood mb-10">
            This is for the woman who
          </p>
          <ul className="space-y-6">
            {forWhoItems.map((item) => (
              <li
                key={item}
                className="border-l-2 border-gold pl-6 font-heading text-2xl md:text-3xl text-navy leading-snug"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="bg-[#111825] py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-gold mb-12">The four patterns</p>
          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {patterns.map((p) => (
              <div
                key={p.name}
                className="border border-ivory/10 p-8 hover:border-gold/30 transition-colors"
              >
                <p className="font-heading text-2xl text-ivory mb-2">{p.name}</p>
                <p className="text-ivory/55 leading-relaxed">{p.tagline}</p>
              </div>
            ))}
          </div>
          <p className="font-heading text-xl md:text-2xl text-ivory/60 leading-relaxed italic">
            You are not taking this to be labeled. You are taking it to be
            located accurately.
          </p>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="bg-ivory py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-navy/70 text-lg leading-relaxed mb-12">
            This is not a personality test. It is a clarity tool. It will not
            tell you who you should become. It will show you how you are
            currently operating when pressure enters the room. That is where
            change becomes possible.
          </p>
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-ivory font-semibold px-12 py-4 text-sm tracking-widest uppercase hover:bg-navy/90 transition-colors"
          >
            Start the Assessment
          </a>
        </div>
      </section>

      {/* SECTION 7 */}
      <section className="bg-navy py-36 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-heading text-3xl md:text-4xl text-ivory leading-snug mb-12">
            You do not need more information. You need a clear read on what is
            actually running you. Start there.
          </p>
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-navy font-semibold px-12 py-4 text-sm tracking-widest uppercase hover:bg-gold/90 transition-colors"
          >
            Take the Free Assessment
          </a>
        </div>
      </section>
    </main>
  );
}
