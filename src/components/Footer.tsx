import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/the-method", label: "The Method" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/speaking", label: "Speaking" },
  { href: "/assessment", label: "Free Assessment" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">

          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="The Soft Power Method"
                className="w-10 h-10 object-contain"
              />
              <span className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-ivory/40">
                The Soft Power Method
              </span>
            </div>
            <p className="font-body text-sm text-ivory/40 leading-relaxed">
              A leadership methodology for women who are ready to stand fully in who they are.
            </p>
            <div className="h-px w-10 bg-gold/30" />
            <p className="font-body text-xs text-ivory/30">
              Founded by Marija Djurović
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-gold mb-8">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-ivory/40 hover:text-ivory/80 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quote column */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-gold mb-8">
                The Standard
              </p>
              <blockquote className="space-y-1">
                <p className="font-heading text-xl italic text-ivory/60 leading-relaxed">
                  "Strength is calm.
                </p>
                <p className="font-heading text-xl italic text-ivory/60 leading-relaxed">
                  Authority is internal.
                </p>
                <p className="font-heading text-xl italic text-ivory/80 leading-relaxed">
                  Standards are self-defined."
                </p>
                <footer className="pt-4">
                  <cite className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-gold/60 not-italic">
                    — Soft Power Founding Statement
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-ivory/20">
            © {new Date().getFullYear()} The Soft Power Method. All rights reserved.
          </p>
          <p className="font-body text-xs text-ivory/20">
            thesoftpowermethod.com
          </p>
        </div>
      </div>
    </footer>
  );
}
