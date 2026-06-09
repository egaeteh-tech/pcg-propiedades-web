"use client";

import { useState } from "react";
import Image from "next/image";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [selected, setSelected] = useState(0);

  if (images.length === 0) {
    return (
      <div className="w-full h-72 md:h-[480px] bg-gray-100 rounded-2xl flex items-center justify-center mb-8">
        <svg className="w-20 h-20 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        </svg>
      </div>
    );
  }

  return (
    <div className="mb-8">
      {/* Main image */}
      <div className="relative w-full h-72 md:h-[480px] bg-gray-100 rounded-2xl overflow-hidden mb-3">
        <Image
          key={images[selected]}
          src={images[selected]}
          alt={`${title} — foto ${selected + 1}`}
          fill
          className="object-cover transition-opacity duration-200"
          sizes="(max-width: 768px) 100vw, 1152px"
          priority={selected === 0}
        />
        <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full">
          {selected + 1} / {images.length}
        </span>
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setSelected(i)}
              className={`relative shrink-0 w-28 h-20 md:w-36 md:h-24 rounded-lg overflow-hidden transition-all ${
                i === selected
                  ? "ring-2 ring-[#C41E1E] ring-offset-2 opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`Ver foto ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${title} miniatura ${i + 1}`}
                fill
                className="object-cover"
                sizes="144px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
