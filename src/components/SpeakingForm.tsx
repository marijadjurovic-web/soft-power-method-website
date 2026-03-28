"use client";

import { useState } from "react";

const engagementTypes = [
  { value: "keynote", label: "Keynote" },
  { value: "workshop", label: "Workshop" },
  { value: "podcast", label: "Podcast" },
  { value: "other", label: "Other" },
];

export default function SpeakingForm() {
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
        <h3 className="font-heading text-2xl text-ivory font-light mb-3">
          Inquiry received.
        </h3>
        <p className="font-body text-sm text-ivory/55 leading-relaxed">
          I will review the details and be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      name="speaking-inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <input type="hidden" name="form-name" value="speaking-inquiry" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-ivory/40 block mb-3">
            Full name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-ivory/15 bg-transparent px-5 py-4 font-body text-sm text-ivory placeholder:text-ivory/25 focus:outline-none focus:border-gold/40 transition-colors duration-200"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-ivory/40 block mb-3">
            Organization
          </label>
          <input
            type="text"
            name="organization"
            required
            className="w-full border border-ivory/15 bg-transparent px-5 py-4 font-body text-sm text-ivory placeholder:text-ivory/25 focus:outline-none focus:border-gold/40 transition-colors duration-200"
            placeholder="Your organization or event"
          />
        </div>
      </div>

      <div>
        <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-ivory/40 block mb-3">
          Type of engagement
        </label>
        <select
          name="engagement_type"
          required
          defaultValue=""
          className="w-full border border-ivory/15 bg-navy px-5 py-4 font-body text-sm text-ivory focus:outline-none focus:border-gold/40 transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Select a type
          </option>
          {engagementTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-ivory/40 block mb-3">
          Tell me about the opportunity
        </label>
        <textarea
          name="opportunity"
          required
          rows={6}
          className="w-full border border-ivory/15 bg-transparent px-5 py-4 font-body text-sm text-ivory placeholder:text-ivory/25 focus:outline-none focus:border-gold/40 transition-colors duration-200 resize-none"
          placeholder="Format, audience, event context, date if known."
        />
      </div>

      <div>
        <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-ivory/40 block mb-3">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-ivory/15 bg-transparent px-5 py-4 font-body text-sm text-ivory placeholder:text-ivory/25 focus:outline-none focus:border-gold/40 transition-colors duration-200"
          placeholder="your@email.com"
        />
      </div>

      {status === "error" && (
        <p className="font-body text-sm text-blush">
          Something went wrong. Please try again or write directly to{" "}
          <a
            href="mailto:hello@thesoftpowermethod.com"
            className="underline"
          >
            hello@thesoftpowermethod.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Let's talk about your event."}
      </button>
    </form>
  );
}
