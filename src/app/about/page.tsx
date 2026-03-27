import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Marija Djurović | Founder",
  description:
    "Marija Djurović is the founder of The Soft Power Method — an identity-based leadership methodology for women in leadership. Not a coach. Not a motivator. A pattern recognizer.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="min-h-[60vh] bg-navy flex items-end relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 100%, rgba(194,166,90,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 w-full relative">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gold/50 text-xs">✦</span>
            <span className="h-px w-10 bg-gold/30" />
            <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
              The Founder
            </span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-ivory font-light leading-[1.05] max-w-2xl">
            I am Marija
            <br />
            <span className="text-gold">Djurović.</span>
          </h1>
          <div className="h-px w-20 bg-gold/30 mt-10" />
        </div>
      </section>

      {/* ── INTRO STATEMENT ────────────────────────────────────── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            {/* Photo */}
            <div className="sticky top-28">
              <div className="aspect-[4/5] bg-navy/5 relative overflow-hidden">
                <img
                  src="/images/marija.jpg"
                  alt="Marija Djurović"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-4 border border-gold/15 pointer-events-none" />
              </div>
              <div className="mt-8 pl-2">
                <p className="font-heading text-lg italic text-navy/50 leading-relaxed">
                  "I am not here to motivate you."
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-10">
              <div>
                <span className="section-label">Who I Am</span>
                <h2 className="section-heading text-3xl sm:text-4xl text-navy mb-8">
                  I am not a motivational speaker.
                </h2>
                <div className="h-px w-14 bg-gold/40 mb-8" />
                <div className="space-y-5 font-body text-base text-navy/60 leading-relaxed">
                  <p>
                    I am not here to hype you up, help you push harder, or
                    convince you to believe in yourself more. You have had enough
                    of temporary solutions. What you need — and what I build — is
                    permanent.
                  </p>
                  <p>
                    I have spent years working with women who, by every external
                    measure, were succeeding. Running companies. Leading teams.
                    Closing deals. And privately — eroding. Not because they
                    lacked skill. But because the infrastructure beneath their
                    leadership was built on conditions.
                  </p>
                  <p>
                    On other people&apos;s definitions of enough. On a version of
                    themselves that was constructed to survive, not to lead.
                  </p>
                  <p>
                    I built The Soft Power Method because I kept seeing the same
                    pattern. And because I know what it costs to ignore it.
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-gold/40 pl-8 py-2">
                <p className="font-heading text-2xl italic text-navy/70 leading-relaxed">
                  "I am a pattern recognizer. A structure builder. Not a coach
                  in the conventional sense — something more precise."
                </p>
              </div>

              <div>
                <span className="section-label">My Approach</span>
                <h2 className="section-heading text-3xl sm:text-4xl text-navy mb-8">
                  This is not therapy.
                  <br />
                  It is not coaching.
                </h2>
                <div className="h-px w-14 bg-gold/40 mb-8" />
                <div className="space-y-5 font-body text-base text-navy/60 leading-relaxed">
                  <p>
                    My work is rooted in structure and precision. I do not work
                    with feelings for the sake of feelings. I work with the
                    architecture underneath the feelings — the beliefs, the
                    thresholds, the standards that determine how you show up, what
                    you accept, and what you build.
                  </p>
                  <p>
                    I see where the fractures are. Where the performance is
                    exhausting you. Where you are working against yourself and
                    calling it discipline. And then we build something different.
                  </p>
                  <p>
                    This is methodical recalibration. It takes precision, not
                    effort. And it produces something that holds — under pressure,
                    under growth, under everything that comes with actually leading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDING STATEMENT ─────────────────────────────────── */}
      <section className="py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-gold/50 text-xs">✦</span>
              <span className="h-px w-10 bg-gold/30" />
              <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
                Founding Statement
              </span>
            </div>

            <div className="space-y-6 font-body text-base text-ivory/55 leading-relaxed">
              <p className="font-heading text-2xl sm:text-3xl text-ivory/80 font-light leading-relaxed italic">
                "Soft Power is a leadership method for women who are ready to
                stand fully in who they are."
              </p>
              <p>It stabilizes identity.</p>
              <p>It strengthens integrity.</p>
              <p>It expands influence.</p>
              <p>
                Through structure, standards, and self-regulation, women return
                to their center — and build companies, decisions, and impact from
                that place.
              </p>
              <p className="font-heading text-xl italic text-gold">
                Soft Power does not harden women to make them powerful. It
                refines them.
              </p>
              <p>Here, strength is calm.</p>
              <p>Authority is internal.</p>
              <p>Standards are self-defined.</p>
              <p className="font-heading text-xl italic text-ivory/70">
                This is where leadership becomes aligned, sustainable, and deeply
                embodied.
              </p>
              <p className="font-heading text-2xl italic text-gold mt-8">
                This is the Soft Power Standard.
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-ivory/10">
              <p className="font-heading text-2xl italic text-ivory/50">
                Marija Djurović
              </p>
              <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-gold/40 mt-1">
                The Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <span className="section-label">Next Step</span>
          <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-8 max-w-xl mx-auto">
            Ready to find out where you stand?
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
