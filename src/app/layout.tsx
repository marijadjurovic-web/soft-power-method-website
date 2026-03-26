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
    default: "The Soft Power Method | Marija Djurović",
    template: "%s | The Soft Power Method",
  },
  description:
    "A leadership methodology for women who are ready to stand fully in who they are. Built on Identity, Integrity, Stability, and Standards.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thesoftpowermethod.com",
    siteName: "The Soft Power Method",
    title: "The Soft Power Method | Marija Djurović",
    description:
      "A leadership methodology for women who are ready to stand fully in who they are.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-ivory font-body antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
