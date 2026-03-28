"use client";

import { useState } from "react";

// NOTE: Configure email notifications in Netlify Dashboard → Forms → contact → Notifications
// Send to: hello@thesoftpowermethod.com

export default function ContactForm() {
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
      <div className="border border-gold/30 p-16 text-center">
        <span className="text-gold/50 text-xl block mb-6">✦</span>
        <h3 className="font-heading text-3xl text-navy font-light mb-4">
          Message received.
        </h3>
        <p className="font-body text-sm text-navy/55">
          I will be in touch within 2 to 3 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 block mb-3">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-navy/15 bg-transparent px-5 py-4 font-body text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-rosewood/40 transition-colors duration-200"
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
            className="w-full border border-navy/15 bg-transparent px-5 py-4 font-body text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-rosewood/40 transition-colors duration-200"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-navy/40 block mb-3">
          Your message
        </label>
        <textarea
          name="message"
          required
          rows={7}
          className="w-full border border-navy/15 bg-transparent px-5 py-4 font-body text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-rosewood/40 transition-colors duration-200 resize-none"
          placeholder="Tell me what brought you here and what you are looking for."
        />
      </div>

      {status === "error" && (
        <p className="font-body text-sm text-rosewood">
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
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
