"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Servicios",         href: "/#servicios"    },
  { label: "Metodologías",      href: "/#metodologias" },
  { label: "¿Por qué Nargtec?", href: "/#porque"       },
  { label: "Contacto",          href: "/contacto"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-void/96 backdrop-blur-xl border-b border-subtle py-2.5 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <Image
            src="/logo1.png"
            alt="Nargtec"
            width={280}
            height={158}
            priority
            className="h-16 md:h-24 w-auto object-contain block transition-transform duration-200 group-hover:scale-[1.03]"
            style={{ filter: "drop-shadow(0 0 14px rgba(255,255,255,0.35)) drop-shadow(0 0 2px rgba(255,255,255,0.5))" }}
          />
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="relative font-body text-sm text-secondary hover:text-primary transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-px left-0 w-0 h-px bg-teal group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contacto"
            className="relative group overflow-hidden px-5 py-2 text-sm font-semibold font-heading rounded-lg border border-teal/35 text-teal hover:text-void transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-lg" />
            <span className="relative">Solicitar NIA</span>
          </Link>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className="md:hidden text-secondary hover:text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-void/98 backdrop-blur-xl border-t border-subtle px-6 pt-4 pb-6">
          <ul className="space-y-1 mb-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2.5 text-secondary hover:text-primary text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contacto"
            className="block w-full text-center py-3 text-sm font-semibold border border-teal/35 text-teal rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Solicitar NIA gratuito
          </Link>
        </div>
      )}
    </header>
  );
}
