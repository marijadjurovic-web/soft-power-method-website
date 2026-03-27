import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Soft Power Method | Leadership Methodology for Women",
    template: "%s | The Soft Power Method",
  },
  description:
    "The Soft Power Method is an identity-based leadership methodology for women in leadership. Discover where you stand with the free Soft Power Assessment and work with Marija Djurović.",
  keywords: [
    "women's leadership",
    "leadership coaching for women",
    "identity-based leadership",
    "regulated leader",
    "survival achiever",
    "soft power",
    "women in leadership",
    "leadership methodology",
    "executive coaching women",
    "Marija Djurovic",
    "Soft Power Assessment",
  ],
  authors: [{ name: "Marija Djurović" }],
  creator: "Marija Djurović",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thesoftpowermethod.com",
    siteName: "The Soft Power Method",
    title: "The Soft Power Method | Leadership Methodology for Women",
    description:
      "An identity-based leadership methodology for women who are ready to lead from who they actually are. Take the free Soft Power Assessment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Soft Power Method | Leadership Methodology for Women",
    description:
      "An identity-based leadership methodology for women who are ready to lead from who they actually are.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "The Soft Power Method",
      url: "https://thesoftpowermethod.com",
      description:
        "An identity-based leadership methodology for women in leadership.",
    },
    {
      "@type": "Person",
      name: "Marija Djurović",
      jobTitle: "Founder",
      description:
        "Founder of The Soft Power Method, a leadership methodology for women.",
      worksFor: {
        "@type": "Organization",
        name: "The Soft Power Method",
        url: "https://thesoftpowermethod.com",
      },
      url: "https://thesoftpowermethod.com/about",
    },
    {
      "@type": "Service",
      name: "The Soft Power Method",
      provider: {
        "@type": "Person",
        name: "Marija Djurović",
      },
      description:
        "Identity-based leadership methodology and executive coaching for women in leadership.",
      url: "https://thesoftpowermethod.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ivory font-body antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
