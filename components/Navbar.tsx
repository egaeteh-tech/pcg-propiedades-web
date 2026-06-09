"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/arriendo", label: "Arriendo" },
  { href: "/venta", label: "Venta" },
  { href: "/administracion", label: "Administración" },
  { href: "/remodelaciones", label: "Remodelaciones" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: "#C41E1E" }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo.png"
            alt="PCG Propiedades"
            style={{ height: "56px", width: "auto" }}
          />
          <div className="leading-snug">
            <span className="font-bold text-white text-lg block">PCG Propiedades SpA</span>
            <span className="text-sm text-red-200 block">Corredora de Propiedades</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    active
                      ? "bg-white border-white text-[#C41E1E]"
                      : "border-white text-white hover:bg-white hover:text-[#C41E1E]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Contact button */}
        <a
          href="tel:+56944890486"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#C41E1E] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          +56 9 4489 0486
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-white hover:bg-red-700"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-red-700 px-4 pb-4 pt-2" style={{ backgroundColor: "#C41E1E" }}>
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-full font-medium transition-colors text-center border ${
                      active
                        ? "bg-white border-white text-[#C41E1E]"
                        : "border-white text-white hover:bg-white hover:text-[#C41E1E]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="tel:+56944890486"
            className="mt-3 flex items-center gap-2 px-4 py-3 rounded-full font-semibold text-sm border border-white text-white hover:bg-white hover:text-[#C41E1E] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +56 9 4489 0486
          </a>
        </div>
      )}
    </header>
  );
}
