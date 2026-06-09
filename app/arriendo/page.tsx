import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PropertyGrid from "@/components/PropertyGrid";
import { getPropertiesByType } from "@/data/properties";
import { getPropertiesFromOneDrive } from "@/lib/onedrive";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Arriendo",
  description:
    "Encuentra tu próximo hogar en arriendo en Santiago. Departamentos, casas y más en las mejores comunas de la Región Metropolitana.",
};

export default async function ArriendoPage() {
  let properties = getPropertiesByType("arriendo");

  if (process.env.ONEDRIVE_USER_UPN) {
    try {
      const fromOneDrive = await getPropertiesFromOneDrive("arriendo");
      if (fromOneDrive.length > 0) properties = fromOneDrive;
    } catch (err) {
      console.error("[OneDrive] Error al cargar propiedades en arriendo:", err);
    }
  }

  return (
    <>
      <HeroSection
        compact
        title="Propiedades en Arriendo"
        subtitle={`${properties.length} propiedades disponibles en Santiago`}
      />

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {["Todas las comunas", "1-2 dorms.", "3+ dorms.", "Hasta $500.000", "$500k–$1M", "+$1M"].map(
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

        <PropertyGrid properties={properties} emptyMessage="No hay propiedades en arriendo disponibles." />
      </section>
    </>
  );
}
