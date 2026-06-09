import Link from "next/link";
import PropertyGrid from "@/components/PropertyGrid";
import HeroCarousel from "@/components/HeroCarousel";
import { getFeaturedProperties } from "@/data/properties";

const services = [
  {
    href: "/arriendo",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
      </svg>
    ),
    title: "Arriendo",
    description:
      "Encontramos el arriendo ideal para ti. Amplio portafolio de departamentos, casas y oficinas en todas las comunas de Santiago.",
  },
  {
    href: "/venta",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    ),
    title: "Venta",
    description:
      "Asesoría completa en la compra y venta de propiedades. Evaluaciones gratuitas y acompañamiento en todo el proceso legal.",
  },
  {
    href: "/administracion",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Administración",
    description:
      "Gestionamos tu propiedad de forma profesional. Cobro de arriendos, mantenciones, rendiciones mensuales y más.",
  },
  {
    href: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M14.7 6.3a1 1 0 010 1.4l-8 8a1 1 0 01-.4.25l-3 1a1 1 0 01-1.26-1.26l1-3a1 1 0 01.25-.4l8-8a1 1 0 011.41 0zm1.6-1.6a3 3 0 014.24 4.24l-9 9a3 3 0 01-1.25.74l-4 1.33a1 1 0 01-1.26-1.26l1.33-4a3 3 0 01.74-1.25l9-9z"/>
      </svg>
    ),
    title: "Remodelaciones",
    description:
      "Transformamos tu propiedad con proyectos de remodelación integral. Coordinación completa de obras, materiales y maestros especializados.",
  },
  {
    href: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
    title: "Gestión Inmobiliaria",
    description:
      "Asesoría completa en todos los procesos inmobiliarios. Contratos, tasaciones, trámites legales y acompañamiento personalizado.",
  },
];

const stats = [
  { value: "+200", label: "Propiedades gestionadas" },
  { value: "+15", label: "Años de experiencia" },
  { value: "+400", label: "Clientes satisfechos" },
  { value: "90%", label: "Tasa de ocupación" },
];

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      {/* Hero */}
      <HeroCarousel
        title="Tu propiedad ideal en Santiago y Viña del Mar"
        subtitle="Corredora de propiedades con más de 15 años de experiencia. Arriendo, venta y administración profesional."
        cta={{ label: "Ver propiedades disponibles", href: "/arriendo" }}
      />

      {/* Stats */}
      <section style={{ backgroundColor: "#a01818" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-bold">{value}</div>
                <div className="text-red-200 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
            Nuestros servicios
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Soluciones integrales para propietarios e interesados
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map(({ href, icon, title, description }) => (
              <Link
                key={href + title}
                href={href}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all flex flex-col items-center text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "#C41E1E" }}
                >
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                Propiedades destacadas
              </h2>
              <p className="text-gray-500 text-sm">Selección curada por nuestro equipo</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/arriendo"
                className="px-5 py-2 rounded-full text-sm font-semibold border-2 border-[#C41E1E] text-[#C41E1E] hover:bg-[#C41E1E] hover:text-white transition-colors"
              >
                Ver arriendos
              </Link>
              <Link
                href="/venta"
                className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-[#C41E1E] hover:bg-[#a01818] transition-colors"
              >
                Ver ventas
              </Link>
            </div>
          </div>

          <PropertyGrid properties={featured} />
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Tienes una propiedad para arrendar o vender?
          </h2>
          <p className="text-gray-500 mb-8">
            Contáctanos hoy y uno de nuestros ejecutivos te asesorará sin costo.
          </p>
          <a
            href="mailto:contacto@pcgpropiedades.com"
            className="inline-block px-8 py-3 rounded-full text-white font-semibold text-sm bg-[#C41E1E] hover:bg-[#a01818] transition-colors"
          >
            Contactar a un ejecutivo
          </a>
        </div>
      </section>
    </>
  );
}
