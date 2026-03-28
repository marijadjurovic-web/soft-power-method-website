import type { Metadata } from "next";
import Link from "next/link";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import MentorshipForm from "@/components/MentorshipForm";

export const metadata: Metadata = {
  title: "Work With Me | Clarity Session & Soft Power Mentorship",
  description:
    "Two ways to work with Marija Djurović: the 90-minute Clarity Session (500€) and the Soft Power Mentorship (1.200€). Structured leadership coaching for women — no open-ended programs, no fluff.",
};

export default function WorkWithMePage() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="min-h-[55vh] bg-navy flex items-end relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 20% 100%, rgba(194,166,90,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 w-full relative">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gold/50 text-xs">✦</span>
            <span className="h-px w-10 bg-gold/30" />
            <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/40">
              Work With Me
            </span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-ivory font-light leading-[1.05] max-w-2xl">
            Two ways.
            <br />
            <span className="text-gold">Both structured.</span>
          </h1>
          <div className="h-px w-20 bg-gold/30 mt-10" />
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────────── */}
      <section className="py-32 bg-ivory border-b border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="font-body text-base text-navy/60 leading-relaxed mb-5">
                There are two ways to work with me. Both are structured. Neither
                is open-ended. I do not run ongoing, indefinite programs. I run
                precise processes with a clear beginning, a clear objective, and a
                clear end.
              </p>
              <p className="font-body text-base text-navy/60 leading-relaxed">
                If you are unsure which is right for you, start with the Clarity
                Session. It will show you exactly where you are. And what the
                right next step is.
              </p>
            </div>
            <div className="aspect-[4/5] bg-navy/5 relative overflow-hidden">
              <img
                src="/marija-work.JPG"
                alt="Marija Djurović"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-4 border border-gold/15 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CLARITY SESSION ────────────────────────────────────── */}
      <section id="clarity-session" className="py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Label */}
            <div className="lg:col-span-1 lg:pt-2">
              <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-blush/60 [writing-mode:vertical-lr] rotate-180 hidden lg:block">
                01
              </span>
              <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-blush/60 lg:hidden">
                01
              </span>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="font-heading text-4xl sm:text-5xl text-navy font-medium mb-3">
                  Clarity Session
                </h2>
                <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/35">
                  90 minutes · One session
                </span>
              </div>

              <div className="h-px bg-navy/8" />

              <div className="space-y-5 font-body text-base text-navy/60 leading-relaxed">
                <p>
                  A single, structured 90-minute session designed for one
                  purpose: clarity.
                </p>
                <p>
                  We identify where you are in your leadership development, what
                  pattern is most active, and what the precise next step is. You
                  leave with a clear picture and a clear direction.
                </p>
                <p className="font-medium text-navy/80">
                  This is not a discovery call. It is a working session.
                </p>
              </div>

              <div>
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 mb-6">
                  What happens
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      step: "Before",
                      description:
                        "Short written intake form. 10 minutes, designed to orient the session precisely.",
                    },
                    {
                      step: "Session",
                      description:
                        "90-minute structured diagnostic conversation. We work through your current position across the four areas of the method.",
                    },
                    {
                      step: "After",
                      description:
                        "Written summary of findings and one clear next step. Not a vague action list. One precise direction.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-6">
                      <span className="font-body text-[0.65rem] uppercase tracking-[0.15em] text-rosewood/60 w-14 flex-shrink-0 pt-0.5">
                        {item.step}
                      </span>
                      <span className="font-body text-sm text-navy/55 leading-relaxed">
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 mb-6">
                  This is for you if
                </p>
                <ul className="space-y-3">
                  {[
                    "You need clarity before committing to a longer process",
                    "You want a precise outside perspective on a specific leadership challenge",
                    "Something has shifted and you need to understand what",
                    "You are at a decision point and need structural clarity, not encouragement",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-blush/60 mt-1 text-xs flex-shrink-0">
                        ·
                      </span>
                      <span className="font-body text-sm text-navy/55 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Calendly embed */}
              <div className="pt-6">
                <div className="h-px bg-blush/30 mb-10" />
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-rosewood/60 mb-3">
                  Book Your Session
                </p>
                <p className="font-body text-sm text-navy/50 leading-relaxed mb-8">
                  Select a time below. Complete payment via PayPal after booking
                  to confirm your spot.
                </p>
                <CalendlyEmbed
                  url="https://calendly.com/mariyadjurovicmd/softpower-clarity"
                  height={680}
                />
              </div>
            </div>

            {/* Price card */}
            <div className="lg:col-span-4">
              <div className="border border-navy/10 p-14 sticky top-28">
                <p className="font-heading text-5xl text-gold mb-2">500€</p>
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/35 mb-8">
                  One session · 90 minutes
                </p>
                <div className="h-px bg-navy/8 mb-8" />
                <ul className="space-y-3 mb-10">
                  {[
                    "Video session (Zoom)",
                    "Pre-session intake",
                    "Written summary & next step",
                    "Payment secures your booking",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-blush/60 mt-0.5 text-xs">✦</span>
                      <span className="font-body text-sm text-navy/55">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* PayPal payment button */}
                <a
                  href="https://paypal.me/thesoftpowermethod/500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full block text-center"
                >
                  Pay 500€ via PayPal
                </a>
                <p className="font-body text-xs text-navy/30 text-center mt-4 leading-relaxed">
                  Book your time above, then complete payment to confirm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-6 py-2">
          <span className="flex-1 h-px bg-blush/25" />
          <span className="text-blush/30 text-xs">✦</span>
          <span className="flex-1 h-px bg-blush/25" />
        </div>
      </div>

      {/* ── SOFT POWER MENTORSHIP ──────────────────────────────── */}
      <section id="mentorship" className="py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Label */}
            <div className="lg:col-span-1 lg:pt-2">
              <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-blush/60 [writing-mode:vertical-lr] rotate-180 hidden lg:block">
                02
              </span>
              <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-blush/60 lg:hidden">
                02
              </span>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="font-heading text-4xl sm:text-5xl text-navy font-medium mb-3">
                  Soft Power Mentorship
                </h2>
                <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/35">
                  6 weeks · Weekly sessions
                </span>
              </div>

              <div className="h-px bg-navy/8" />

              <div className="space-y-5 font-body text-base text-navy/60 leading-relaxed">
                <p className="font-heading text-xl italic text-navy/70">
                  A 6-week structural recalibration for women who are already
                  achieving, but not from stability.
                </p>
                <p>
                  We work through the four areas of the Soft Power Method:
                  Identity, Integrity, Stability, and Standards. Each session
                  has a clear objective. Each week builds on the last. The arc
                  is deliberate.
                </p>
                <p className="font-medium text-navy/80">
                  This is not coaching in the conventional sense. It is
                  methodical recalibration for women in leadership who are
                  ready to lead from structure, not from pressure.
                </p>
              </div>

              <div>
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 mb-6">
                  The arc
                </p>
                <div className="space-y-4">
                  {[
                    {
                      weeks: "Week 1-2",
                      focus: "Identity",
                      description:
                        "Assessment review and deep work on identity. Who you are outside of achievement, performance, and approval.",
                    },
                    {
                      weeks: "Week 3-4",
                      focus: "Integrity",
                      description:
                        "Identifying and closing the gaps between what you think, say, and do. Where the structural fractures are.",
                    },
                    {
                      weeks: "Week 5-6",
                      focus: "Stability, Standards, Integration",
                      description:
                        "Emotional regulation as a leadership tool. Redefining your standards. Integrating the work across all four areas.",
                    },
                  ].map((item) => (
                    <div
                      key={item.weeks}
                      className="grid grid-cols-12 gap-4 py-4 border-b border-navy/6 last:border-0"
                    >
                      <span className="col-span-3 font-body text-[0.65rem] uppercase tracking-[0.15em] text-navy/30">
                        {item.weeks}
                      </span>
                      <div className="col-span-9">
                        <span className="font-heading text-base text-gold font-medium block mb-1">
                          {item.focus}
                        </span>
                        <span className="font-body text-sm text-navy/50 leading-relaxed">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 mb-6">
                  This is for you if
                </p>
                <ul className="space-y-3">
                  {[
                    "You know something fundamental needs to shift — not just a surface behavior",
                    "You are willing to do precise, deliberate work over six weeks",
                    "You want a structured process, not open-ended support",
                    "You are ready for the full recalibration process",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-blush/60 mt-1 text-xs flex-shrink-0">
                        ·
                      </span>
                      <span className="font-body text-sm text-navy/55 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price card */}
            <div className="lg:col-span-4">
              <div className="border border-navy/10 p-14 sticky top-28">
                <p className="font-heading text-5xl text-gold mb-2">1.200€</p>
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/35 mb-8">
                  6 weeks · Weekly sessions
                </p>
                <div className="h-px bg-navy/8 mb-8" />
                <ul className="space-y-3 mb-10">
                  {[
                    "Free 20-min discovery call",
                    "6 × 60-minute video sessions",
                    "Pre-program assessment review",
                    "Session notes & materials",
                    "Application required",
                    "Limited availability",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-blush/60 mt-0.5 text-xs">✦</span>
                      <span className="font-body text-sm text-navy/55">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#mentorship-form"
                  className="btn-primary w-full block text-center"
                >
                  Apply Below
                </a>
              </div>
            </div>
          </div>

          {/* Application form */}
          {/* Discovery call */}
          <div className="mt-20 pt-16 border-t border-blush/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-1" />
              <div className="lg:col-span-10">
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-rosewood/60 mb-6">
                  Before We Begin
                </p>
                <h3 className="font-heading text-3xl text-navy font-light leading-tight mb-8">
                  A free 20-minute call. Not a sales call.
                </h3>
                <div className="h-px w-10 bg-blush/40 mb-10" />
                <div className="space-y-4 font-body text-base text-navy/60 leading-relaxed max-w-2xl">
                  <p>
                    Before the program begins, there is a free 20-minute
                    discovery call. This call is a mutual decision. Both Marija
                    and the client decide together whether the work is the right
                    fit.
                  </p>
                  <p>
                    It is not a sales call. It is an assessment from both sides.
                    After the call, if both agree, we build the schedule and
                    plan together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Application form */}
          <div id="mentorship-form" className="mt-20 pt-16 border-t border-blush/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-rosewood/60 mb-6">
                  Apply
                </p>
                <h3 className="font-heading text-3xl text-navy font-light leading-tight mb-8">
                  Apply for Soft Power Mentorship
                </h3>
                <div className="h-px w-10 bg-blush/40 mb-10" />
                <p className="font-body text-sm text-navy/55 leading-relaxed">
                  I review every application personally. If the fit is right, I
                  will be in touch within 3 to 5 business days to schedule the
                  discovery call.
                </p>
              </div>
              <div className="lg:col-span-8">
                <MentorshipForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING NOTE ───────────────────────────────────────── */}
      <section className="py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="font-heading text-2xl sm:text-3xl italic text-ivory/60 leading-relaxed mb-8">
              "If you are unsure where to start —{" "}
              <span className="text-gold">start with the Assessment.</span>
              <br />
              It will show you exactly where you are."
            </p>
            <Link href="/assessment" className="btn-primary">
              Take the Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
