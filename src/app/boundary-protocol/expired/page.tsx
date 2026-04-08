import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link Expired – The Boundary Protocol",
  robots: { index: false, follow: false },
};

export default function ExpiredPage() {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-lg mx-auto">
        <p className="section-label text-gold mb-6">Download link expired</p>

        <h1 className="font-heading text-4xl md:text-5xl text-ivory mb-8 leading-tight">
          This link is no longer active.
        </h1>

        <p className="text-ivory/70 mb-12 leading-relaxed">
          Download links are valid for 7 days after purchase.
          If you believe this is an error, reply to your purchase confirmation
          email and I will send you a new link.
        </p>

        <a
          href="mailto:hello@thesoftpowermethod.com"
          className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-colors"
        >
          Contact Marija
        </a>

        <p className="mt-12">
          <Link
            href="/boundary-protocol/"
            className="text-ivory/40 text-sm underline underline-offset-4 hover:text-ivory/70 transition-colors"
          >
            Return to The Boundary Protocol
          </Link>
        </p>
      </div>
    </main>
  );
}
