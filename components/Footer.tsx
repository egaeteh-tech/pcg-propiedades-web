"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#C41E1E" }} className="text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="PCG Propiedades"
                style={{ height: "56px", width: "auto" }}
              />
              <div>
                <span className="font-bold text-white text-base block">PCG Propiedades SpA</span>
                <span className="text-red-200 text-xs block">Corredora de Propiedades</span>
              </div>
            </div>
            <p className="text-red-100 text-sm leading-relaxed">
              Más de 15 años conectando personas con su propiedad ideal en Santiago y la Región Metropolitana.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/arriendo", label: "Propiedades en Arriendo" },
                { href: "/venta", label: "Propiedades en Venta" },
                { href: "/administracion", label: "Administración de Propiedades" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-red-100 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-3 text-sm text-red-100">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+56944890486" className="hover:text-white transition-colors">+56 9 4489 0486</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:contacto@pcgpropiedades.com" className="hover:text-white transition-colors">
                  contacto@pcgpropiedades.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-red-400 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-red-200">
          <p>© {new Date().getFullYear()} PCG Propiedades SpA. Todos los derechos reservados.</p>
          <p>Santiago, Chile</p>
        </div>
      </div>
    </footer>
  );
}
