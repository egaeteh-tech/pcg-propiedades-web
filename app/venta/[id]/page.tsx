import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { properties, formatPrice } from "@/data/properties";
import PropertyDetail from "@/components/PropertyDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return properties
    .filter((p) => p.type === "venta")
    .map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => p.id === id && p.type === "venta");
  if (!property) return { title: "Propiedad no encontrada" };
  return {
    title: property.title,
    description: `${property.title} en ${property.commune}. ${formatPrice(property.price, property.currency)}.`,
  };
}

export default async function VentaDetailPage({ params }: Props) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id && p.type === "venta");
  if (!property) notFound();

  return (
    <PropertyDetail
      property={property}
      backHref="/venta"
      backLabel="Volver a Venta"
    />
  );
}
