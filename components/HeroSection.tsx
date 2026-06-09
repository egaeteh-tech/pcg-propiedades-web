import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
  compact?: boolean;
}

export default function HeroSection({ title, subtitle, cta, compact = false }: HeroSectionProps) {
  return (
    <section
      className={`relative flex items-center justify-center text-white text-center ${
        compact ? "py-14" : "py-24"
      }`}
      style={{ backgroundColor: "#C41E1E" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className={`font-bold ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"} mb-4 leading-tight`}>
          {title}
        </h1>
        <p className="text-red-100 text-lg md:text-xl mb-6">{subtitle}</p>
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
