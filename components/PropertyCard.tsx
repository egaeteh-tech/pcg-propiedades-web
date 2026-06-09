import Link from "next/link";
import Image from "next/image";
import { Property, formatPrice } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const {
    id,
    title,
    type,
    price,
    currency,
    commune,
    bedrooms,
    bathrooms,
    area,
    features,
    images,
  } = property;

  const mainImage = images?.[0];

  const href = `/${type}/${id}`;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col group">
      {/* Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
        )}

        {/* Type badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded text-white text-xs font-semibold uppercase tracking-wide"
          style={{ backgroundColor: "#C41E1E" }}
        >
          {type === "arriendo" ? "Arriendo" : "Venta"}
        </div>

        {/* Price badge */}
        <div className="absolute bottom-3 right-3 bg-white/95 px-3 py-1.5 rounded-lg shadow">
          <span className="font-bold text-gray-900 text-sm">{formatPrice(price, currency)}</span>
          {type === "arriendo" && <span className="text-gray-500 text-xs">/mes</span>}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 text-base leading-snug mb-1 line-clamp-2 group-hover:text-[#C41E1E] transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          </svg>
          {commune}
        </p>

        {/* Stats */}
        {(bedrooms > 0 || bathrooms > 0 || area > 0) && (
          <div className="flex items-center gap-4 text-sm text-gray-600 border-t border-gray-100 pt-3 mb-3">
            {bedrooms > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                {bedrooms} {bedrooms === 1 ? "dorm." : "dorms."}
              </span>
            )}
            {bathrooms > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {bathrooms} {bathrooms === 1 ? "baño" : "baños"}
              </span>
            )}
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
              </svg>
              {area.toLocaleString("es-CL")} m²
            </span>
          </div>
        )}

        {/* Features */}
        {features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {features.slice(0, 3).map((f) => (
              <span key={f} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                {f}
              </span>
            ))}
            {features.length > 3 && (
              <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
                +{features.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto">
          <Link
            href={href}
            className="block w-full text-center py-2.5 rounded-lg font-semibold text-sm text-white bg-[#C41E1E] hover:bg-[#a01818] transition-colors"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}
