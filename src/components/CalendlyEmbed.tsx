"use client";

import Script from "next/script";

interface CalendlyEmbedProps {
  url: string;
  height?: number;
}

export default function CalendlyEmbed({ url, height = 700 }: CalendlyEmbedProps) {
  return (
    <div className="w-full">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget w-full"
        data-url={url}
        style={{ minWidth: "320px", height: `${height}px` }}
      />
    </div>
  );
}
