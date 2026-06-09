import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { managedProperties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Administración de Propiedades",
  description:
    "Propiedades en administración por PCG Propiedades en Santiago, Región Metropolitana.",
};

export default function AdministracionPage() {
  return (
    <>
      <HeroSection
        compact
        title="Propiedades en Administración"
        subtitle={`${managedProperties.length} propiedades bajo nuestra gestión`}
      />

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <ul className="divide-y divide-gray-100">
            {managedProperties.map(({ id, title, commune }) => (
              <li
                key={id}
                className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: "#C41E1E" }}
                  />
                  <span className="text-gray-900 font-medium text-sm truncate">{title}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span className="text-gray-500 text-sm hidden sm:block">{commune}</span>
                  <span
                    className="px-2.5 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap"
                    style={{ backgroundColor: "#C41E1E" }}
                  >
                    En administración
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          ¿Quieres agregar tu propiedad?{" "}
          <a
            href="mailto:contacto@pcgpropiedades.com"
            className="text-[#C41E1E] hover:underline"
          >
            Contáctanos
          </a>
        </p>
      </section>
    </>
  );
}
