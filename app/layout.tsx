import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Growth Agency | Escalamiento Omnicanal con IA",
  description: "Automatización y escalamiento de cuentas en Mercado Libre, Amazon y TikTok Shop. Modelos predictivos, Claude AI y logística Full Fulfillment.",
  keywords: [
    "Agencia Mercado Libre Platinum", 
    "Gestión Amazon", 
    "TikTok Shop", 
    "Full Fulfillment", 
    "Automatización Ecommerce AI", 
    "Modelos de Inversión E-commerce"
  ],
  openGraph: {
    title: "E-Commerce Growth Agency | Escalamiento con IA",
    description: "Dominamos el algoritmo. Llevamos cuentas de $0 a Platinum apalancados con inteligencia artificial e infraestructura logística.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}