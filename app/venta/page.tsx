import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PropertyGrid from "@/components/PropertyGrid";
import { getPropertiesByType } from "@/data/properties";

export const metadata: Metadata = {
  title: "Venta",
  description:
    "Propiedades en venta en Santiago. Casas, departamentos y terrenos en las mejores comunas de la Región Metropolitana.",
};

export default function VentaPage() {
  const properties = getPropertiesByType("venta");

  return (
    <>
      <HeroSection
        compact
        title="Propiedades en Venta"
        subtitle={`${properties.length} propiedades disponibles en Santiago`}
      />

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter bar placeholder */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["Todas las comunas", "Departamento", "Casa", "Parcela", "Hasta UF 3.000", "UF 3k–8k", "+UF 8k"].map(
            (label) => (
              <button
                key={label}
                className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-[#C41E1E] hover:text-[#C41E1E] transition-colors"
              >
                {label}
              </button>
            )
          )}
        </div>

        <PropertyGrid properties={properties} emptyMessage="No hay propiedades en venta disponibles." />
      </section>
    </>
  );
}
