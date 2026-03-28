"use client";

import { useState } from "react";

export default function MentorshipForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          data as unknown as Record<string, string>
        ).toString(),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-gold/30 p-12 text-center">
        <span className="text-gold/40 text-xl block mb-6">✦</span>
        <h3 className="font-heading text-2xl text-navy font-light mb-3">
          Application received.
        </h3>
        <p className="font-body text-sm text-navy/55 leading-relaxed">
          I will review your application and be in touch within 3 to 5 business
          days.
        </p>
      </div>
    );
  }

  return (
    <form
      name="mentorship-application"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Netlify Forms detection */}
      <input type="hidden" name="form-name" value="mentorship-application" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 block mb-3">
          Full name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full border border-navy/15 bg-transparent px-5 py-4 font-body text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-rosewood/50 transition-colors duration-200"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 block mb-3">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-navy/15 bg-transparent px-5 py-4 font-body text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-rosewood/50 transition-colors duration-200"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 block mb-3">
          Where are you right now in your leadership?
        </label>
        <textarea
          name="leadership_now"
          required
          rows={5}
          className="w-full border border-navy/15 bg-transparent px-5 py-4 font-body text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-rosewood/50 transition-colors duration-200 resize-none"
          placeholder="Be as specific as you can."
        />
      </div>

      <div>
        <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 block mb-3">
          What is the main pattern you want to change?
        </label>
        <textarea
          name="pattern_to_change"
          required
          rows={5}
          className="w-full border border-navy/15 bg-transparent px-5 py-4 font-body text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-rosewood/50 transition-colors duration-200 resize-none"
          placeholder="What keeps showing up that you are ready to stop repeating?"
        />
      </div>

      <div>
        <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 block mb-3">
          How did you find Soft Power Method?
        </label>
        <input
          type="text"
          name="how_found"
          className="w-full border border-navy/15 bg-transparent px-5 py-4 font-body text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-rosewood/50 transition-colors duration-200"
          placeholder="Referral, social media, search, other"
        />
      </div>

      <p className="font-body text-xs text-navy/40 leading-relaxed">
        After submitting, I will review your application. If it is a fit, I will
        reach out to schedule a free 20-minute discovery call before we begin.
      </p>

      {status === "error" && (
        <p className="font-body text-sm text-rosewood">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "This sounds like where I am."}
      </button>
    </form>
  );
}
