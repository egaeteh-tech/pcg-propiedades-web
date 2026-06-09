import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PropertyGrid from "@/components/PropertyGrid";
import { getPropertiesByType } from "@/data/properties";
import { getPropertiesFromOneDrive } from "@/lib/onedrive";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Venta",
  description:
    "Propiedades en venta en Santiago. Casas, departamentos y terrenos en las mejores comunas de la Región Metropolitana.",
};

export default async function VentaPage() {
  let properties = getPropertiesByType("venta");

  if (process.env.ONEDRIVE_USER_UPN) {
    try {
      const fromOneDrive = await getPropertiesFromOneDrive("venta");
      if (fromOneDrive.length > 0) properties = fromOneDrive;
    } catch (err) {
      console.error("[OneDrive] Error al cargar propiedades en venta:", err);
    }
  }

  return (
    <>
      <HeroSection
        compact
        title="Propiedades en Venta"
        subtitle={`${properties.length} propiedades disponibles en Santiago`}
      />

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
