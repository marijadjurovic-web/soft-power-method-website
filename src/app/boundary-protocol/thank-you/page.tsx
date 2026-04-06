import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You have it | The Boundary Protocol",
  description: "Your copy of The Boundary Protocol is on its way.",
  robots: { index: false, follow: false },
};

export default function BoundaryProtocolThankYouPage() {
  return (
    <section className="min-h-screen bg-navy flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(194,166,90,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full relative">
        <div className="max-w-xl">
          <span className="text-gold/30 text-2xl block mb-12">✦</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-ivory font-light leading-[1.05] mb-8">
            You have it.
          </h1>
          <div className="h-px w-14 bg-gold/30 mb-10" />
          <div className="space-y-5 font-body text-base text-ivory/55">
            <p>
              Check your email for your download link. If you do not see it
              within a few minutes, check your spam folder.
            </p>
            <p>Welcome to the Soft Power Method.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
