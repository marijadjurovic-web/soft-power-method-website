"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/the-method", label: "The Method" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navBg = isScrolled || !isHomePage || isMenuOpen
    ? "bg-ivory border-b border-navy/10 shadow-sm"
    : "bg-transparent border-b border-transparent";

  const textColor = isScrolled || !isHomePage || isMenuOpen ? "text-navy" : "text-ivory";
  const logoColor = isScrolled || !isHomePage || isMenuOpen ? "border-gold text-gold" : "border-gold/70 text-gold";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-300 ${logoColor}`}>
            <span className="font-heading text-xs font-medium tracking-wide">SP</span>
          </div>
          <span className={`font-body text-[0.65rem] uppercase tracking-[0.25em] hidden sm:block transition-colors duration-300 ${textColor === "text-ivory" ? "text-ivory/70" : "text-navy/60"}`}>
            The Soft Power Method
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-[0.65rem] uppercase tracking-[0.18em] transition-colors duration-200 ${
                pathname === link.href
                  ? "text-gold"
                  : `${textColor} opacity-70 hover:opacity-100`
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/assessment"
            className={`font-body text-[0.65rem] uppercase tracking-[0.18em] px-5 py-2.5 transition-all duration-200 ${
              isScrolled || !isHomePage
                ? "bg-navy text-ivory hover:bg-gold hover:text-navy"
                : "border border-gold/60 text-gold hover:bg-gold hover:text-navy"
            }`}
          >
            Free Assessment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-px transition-all duration-200 ${textColor === "text-ivory" ? "bg-ivory" : "bg-navy"} ${
              isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`w-5 h-px transition-all duration-200 ${textColor === "text-ivory" ? "bg-ivory" : "bg-navy"} ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-px transition-all duration-200 ${textColor === "text-ivory" ? "bg-ivory" : "bg-navy"} ${
              isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-ivory border-t border-navy/10`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-[0.65rem] uppercase tracking-[0.18em] py-3 border-b border-navy/5 transition-colors duration-200 ${
                pathname === link.href ? "text-gold" : "text-navy/60 hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/assessment"
            className="font-body text-[0.65rem] uppercase tracking-[0.18em] px-5 py-3.5 bg-navy text-ivory text-center mt-4 hover:bg-gold hover:text-navy transition-all duration-200"
          >
            Free Assessment
          </Link>
        </div>
      </div>
    </header>
  );
}
