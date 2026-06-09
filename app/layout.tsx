import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "PCG Propiedades SpA — Corredora en Santiago y Viña del Mar",
    template: "%s | PCG Propiedades SpA",
  },
  description:
    "PCG Propiedades SpA, corredora de propiedades en Santiago y Viña del Mar. Arriendo, venta y administración de inmuebles en la Región Metropolitana.",
  keywords: ["corredora de propiedades", "Santiago", "Viña del Mar", "arriendo", "venta", "administración"],
  openGraph: {
    siteName: "PCG Propiedades SpA",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-gray-50 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
