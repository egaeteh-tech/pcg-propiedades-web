"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const IMAGES = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600",
];

interface HeroCarouselProps {
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
}

export default function HeroCarousel({ title, subtitle, cta }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[560px] flex items-center justify-center text-white text-center overflow-hidden">
      {/* Slides */}
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-center bg-cover transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === current ? 1 : 0,
          }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="font-bold text-4xl md:text-5xl mb-4 leading-tight drop-shadow-md">
          {title}
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 drop-shadow">
          {subtitle}
        </p>
        {cta && (
          <Link
            href={cta.href}
            className="inline-block bg-white hover:bg-gray-100 font-semibold px-8 py-3 rounded-full text-sm transition-colors text-[#C41E1E]"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
