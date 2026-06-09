import Link from "next/link";
import Image from "next/image";
import { Property, formatPrice } from "@/data/properties";

interface PropertyDetailProps {
  property: Property;
  backHref: string;
  backLabel: string;
}

export default function PropertyDetail({ property, backHref, backLabel }: PropertyDetailProps) {
  const {
    title, type, price, currency, address, commune, region,
    bedrooms, bathrooms, area, totalArea, parking, description, features, images,
  } = property;

  const [mainImage, ...thumbImages] = images ?? [];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#C41E1E] mb-6 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {backLabel}
      </Link>

      {/* Image gallery */}
      <div className="mb-8">
        {/* Main image */}
        <div className="relative w-full h-72 md:h-[480px] bg-gray-100 rounded-2xl overflow-hidden mb-3">
          {mainImage ? (
            <Image
              src={mainImage}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-20 h-20 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              </svg>
            </div>
          )}
          {images && images.length > 1 && (
            <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full">
              1 / {images.length}
            </span>
          )}
        </div>

        {/* Thumbnail strip — horizontal scroll */}
        {thumbImages.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {thumbImages.map((src, i) => (
              <div
                key={src}
                className="relative shrink-0 w-28 h-20 md:w-36 md:h-24 bg-gray-100 rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${title} foto ${i + 2}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-200"
                  sizes="144px"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Title & location */}
          <div className="mb-6">
            <span
              className="inline-block px-2.5 py-1 rounded text-white text-xs font-semibold uppercase tracking-wide mb-3"
              style={{ backgroundColor: "#C41E1E" }}
            >
              {type === "arriendo" ? "Arriendo" : "Venta"}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-500 flex items-center gap-1.5">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              </svg>
              {address && address !== commune ? `${address}, ` : ""}{commune}, {region}
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {bedrooms > 0 && (
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{bedrooms}</div>
                <div className="text-xs text-gray-500 mt-1">{bedrooms === 1 ? "Dormitorio" : "Dormitorios"}</div>
              </div>
            )}
            {bathrooms > 0 && (
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{bathrooms}</div>
                <div className="text-xs text-gray-500 mt-1">{bathrooms === 1 ? "Baño" : "Baños"}</div>
              </div>
            )}
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{area}</div>
              <div className="text-xs text-gray-500 mt-1">
                m² útiles{totalArea ? ` / ${totalArea} total` : ""}
              </div>
            </div>
            {parking > 0 && (
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{parking}</div>
                <div className="text-xs text-gray-500 mt-1">{parking === 1 ? "Estacionamiento" : "Estacionamientos"}</div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Descripción</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Características</h2>
              <div className="flex flex-wrap gap-2">
                {features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24 shadow-sm">
            <div className="mb-1 text-sm text-gray-500">Precio</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {formatPrice(price, currency)}
            </div>
            {type === "arriendo" && (
              <div className="text-sm text-gray-400 mb-6">/mes</div>
            )}

            <div className="space-y-3 mt-6">
              <a
                href="https://wa.me/56900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm bg-[#25D366] hover:bg-[#1db954] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Consultar por WhatsApp
              </a>
              <a
                href="mailto:contacto@pcgpropiedades.com"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm border-2 border-[#C41E1E] text-[#C41E1E] hover:bg-[#C41E1E] hover:text-white transition-colors"
              >
                Enviar correo
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
