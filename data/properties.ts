export type PropertyType = "arriendo" | "venta";

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  currency: "CLP" | "UF";
  address: string;
  commune: string;
  region: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // m²
  parking: number;
  description: string;
  features: string[];
  images: string[];
  featured: boolean;
}

export const properties: Property[] = [
  {
    id: "arr-001",
    title: "Departamento moderno en Providencia",
    type: "arriendo",
    price: 750000,
    currency: "CLP",
    address: "Av. Providencia 1234, Piso 8",
    commune: "Providencia",
    region: "Región Metropolitana",
    bedrooms: 2,
    bathrooms: 2,
    area: 72,
    parking: 1,
    description:
      "Luminoso departamento con terminaciones de primera calidad. Cocina americana equipada, logia y vista despejada. Edificio con gimnasio y piscina.",
    features: ["Amoblado", "Gym", "Piscina", "Conserje 24/7", "Bodega"],
    images: ["/images/placeholder-apt.jpg"],
    featured: true,
  },
  {
    id: "arr-002",
    title: "Casa amplia en Las Condes",
    type: "arriendo",
    price: 1800000,
    currency: "CLP",
    address: "Calle Los Militares 5678",
    commune: "Las Condes",
    region: "Región Metropolitana",
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    parking: 2,
    description:
      "Casa en condominio privado con jardín y terraza. Amplia cocina, living-comedor con doble altura y patio trasero. Barrio tranquilo y bien conectado.",
    features: ["Jardín", "Terraza", "Condominio privado", "Quincho"],
    images: ["/images/placeholder-house.jpg"],
    featured: true,
  },
  {
    id: "arr-003",
    title: "Estudio en Ñuñoa",
    type: "arriendo",
    price: 380000,
    currency: "CLP",
    address: "Av. Irarrázaval 890, Piso 3",
    commune: "Ñuñoa",
    region: "Región Metropolitana",
    bedrooms: 1,
    bathrooms: 1,
    area: 38,
    parking: 0,
    description:
      "Acogedor estudio con diseño inteligente. Ideal para profesional o estudiante. Cerca del metro Ñuñoa y servicios.",
    features: ["Amoblado", "Lavandería común", "Bicicletero"],
    images: ["/images/placeholder-studio.jpg"],
    featured: false,
  },
  {
    id: "arr-004",
    title: "Departamento en Vitacura con vista al cerro",
    type: "arriendo",
    price: 85,
    currency: "UF",
    address: "Av. Alonso de Córdova 3210, Piso 12",
    commune: "Vitacura",
    region: "Región Metropolitana",
    bedrooms: 3,
    bathrooms: 2,
    area: 105,
    parking: 2,
    description:
      "Espectacular departamento con vista a los Andes. Terminaciones premium, cocina de diseño y terraza propia. Edificio boutique con valet parking.",
    features: ["Terraza propia", "Valet parking", "Bodega", "Vista cerros"],
    images: ["/images/placeholder-apt.jpg"],
    featured: true,
  },
  {
    id: "ven-001",
    title: "Departamento en Barrio Italia",
    type: "venta",
    price: 3800,
    currency: "UF",
    address: "Calle Condell 456, Piso 4",
    commune: "Providencia",
    region: "Región Metropolitana",
    bedrooms: 2,
    bathrooms: 1,
    area: 68,
    parking: 1,
    description:
      "Excelente departamento en el corazón del Barrio Italia. Edificio de años con sello y carácter. Ideal como inversión o residencia propia.",
    features: ["Orientación norte", "Bodega", "Certificación energética D"],
    images: ["/images/placeholder-apt.jpg"],
    featured: true,
  },
  {
    id: "ven-002",
    title: "Casa en Lo Barnechea",
    type: "venta",
    price: 18500,
    currency: "UF",
    address: "Camino El Alba 9870",
    commune: "Lo Barnechea",
    region: "Región Metropolitana",
    bedrooms: 5,
    bathrooms: 4,
    area: 380,
    parking: 3,
    description:
      "Soberbia casa en condominio de alta categoría. Amplios espacios, piscina temperada, sala de estar con chimenea y jardín profesional.",
    features: [
      "Piscina temperada",
      "Quincho",
      "Sala de estar con chimenea",
      "Jardín profesional",
      "Seguridad 24/7",
    ],
    images: ["/images/placeholder-house.jpg"],
    featured: true,
  },
  {
    id: "ven-003",
    title: "Departamento nuevo en Santiago Centro",
    type: "venta",
    price: 2100,
    currency: "UF",
    address: "Av. Libertador Bernardo O'Higgins 1820, Piso 7",
    commune: "Santiago",
    region: "Región Metropolitana",
    bedrooms: 2,
    bathrooms: 2,
    area: 58,
    parking: 1,
    description:
      "Departamento en edificio nuevo con entrega inmediata. A pasos del metro Universidad de Chile y todo el comercio del centro.",
    features: [
      "Entrega inmediata",
      "Certificación energética B",
      "Gym",
      "Terraza común",
    ],
    images: ["/images/placeholder-apt.jpg"],
    featured: false,
  },
  {
    id: "ven-004",
    title: "Parcela en Chicureo",
    type: "venta",
    price: 4200,
    currency: "UF",
    address: "Camino El Barco s/n",
    commune: "Colina",
    region: "Región Metropolitana",
    bedrooms: 0,
    bathrooms: 0,
    area: 5000,
    parking: 0,
    description:
      "Hermosa parcela en condominio Los Trapenses con agua potable, luz y acceso pavimentado. Vista a los Andes. Ideal para construir.",
    features: [
      "Agua potable",
      "Luz eléctrica",
      "Acceso pavimentado",
      "Vista Andes",
    ],
    images: ["/images/placeholder-land.jpg"],
    featured: false,
  },
];

export interface ManagedProperty {
  id: string;
  title: string;
  commune: string;
}

export const managedProperties: ManagedProperty[] = [
  { id: "adm-001", title: "Departamento Av. Apoquindo 4500", commune: "Las Condes" },
  { id: "adm-002", title: "Casa Los Boldos 231", commune: "Vitacura" },
  { id: "adm-003", title: "Departamento Irarrázaval 890", commune: "Ñuñoa" },
  { id: "adm-004", title: "Casa condominio Los Trapenses", commune: "Lo Barnechea" },
  { id: "adm-005", title: "Departamento Condell 456, Piso 4", commune: "Providencia" },
  { id: "adm-006", title: "Oficina Av. El Golf 99", commune: "Las Condes" },
  { id: "adm-007", title: "Departamento Av. Grecia 123", commune: "Ñuñoa" },
  { id: "adm-008", title: "Casa Los Militares 5678", commune: "Las Condes" },
  { id: "adm-009", title: "Departamento Monseñor Sotero Sanz 100", commune: "Providencia" },
  { id: "adm-010", title: "Casa Diego de Almagro 340", commune: "Vitacura" },
  { id: "adm-011", title: "Departamento Av. Vicuña Mackenna 1800", commune: "Macul" },
  { id: "adm-012", title: "Local comercial Av. Irarrázaval 2100", commune: "Ñuñoa" },
];

export const getPropertiesByType = (type: PropertyType) =>
  properties.filter((p) => p.type === type);

export const getFeaturedProperties = () =>
  properties.filter((p) => p.featured);

export const formatPrice = (price: number, currency: "CLP" | "UF"): string => {
  if (currency === "CLP") {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    }).format(price);
  }
  return `UF ${price.toLocaleString("es-CL")}`;
};
