"use client";

import { useEffect } from "react";
import Link from "next/link";

// ── REPLACE THIS with your actual Tally form URL ──────────────────
const TALLY_URL = "https://tally.so/r/ZjNr5z";
// ─────────────────────────────────────────────────────────────────

export default function AssessmentPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = TALLY_URL;
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-navy flex items-center justify-center">
      <div className="text-center px-6">
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-px w-12 bg-gold/30" />
          <span className="text-gold/40 text-xs">✦</span>
          <span className="h-px w-12 bg-gold/30" />
        </div>
        <p className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold/50 mb-6">
          The Soft Power Assessment
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl text-ivory font-light leading-tight mb-8">
          Taking you to
          <br />
          <span className="text-gold">the assessment.</span>
        </h1>
        <p className="font-body text-sm text-ivory/40 mb-10">
          You will be redirected automatically.
        </p>
        <a
          href={TALLY_URL}
          className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-gold/60 hover:text-gold transition-colors duration-200 border-b border-gold/30 pb-0.5"
        >
          Click here if not redirected →
        </a>

        <div className="mt-16">
          <Link
            href="/"
            className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-ivory/20 hover:text-ivory/50 transition-colors duration-200"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
