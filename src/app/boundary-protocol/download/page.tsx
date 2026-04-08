"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function DownloadContent() {
  const params = useSearchParams();
  const token = params.get("token");

  if (!token) {
    return (
      <div className="text-center">
        <p className="font-heading text-2xl text-ivory/60 mb-8">
          This link is not valid.
        </p>
        <Link
          href="/boundary-protocol/"
          className="text-gold underline underline-offset-4 text-sm"
        >
          Return to The Boundary Protocol
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center max-w-lg mx-auto">
      <p className="section-label text-gold mb-6">Your purchase is confirmed</p>

      <h1 className="font-heading text-4xl md:text-5xl text-ivory mb-8 leading-tight">
        The Boundary Protocol
      </h1>

      <p className="text-ivory/70 mb-12 leading-relaxed">
        Your copy is ready. Click the button below to download the PDF.
        This link is valid for 7 days.
      </p>

      <a
        href={`/api/download?token=${token}`}
        className="inline-block bg-gold text-navy font-semibold px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold/90 transition-colors"
      >
        Download Your Copy
      </a>

      <p className="mt-12 text-ivory/40 text-sm">
        A copy of this link has been sent to your email.
        If your link expires, reply to that email and I will send a new one.
      </p>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center px-6 py-24">
      <Suspense
        fallback={
          <p className="text-ivory/40 text-sm tracking-widest uppercase">
            Loading...
          </p>
        }
      >
        <DownloadContent />
      </Suspense>
    </main>
  );
}
