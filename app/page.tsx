import React from 'react';
import CasosDeExito from '@/components/CasosDeExito'; 
import Portafolio from '@/components/Portafolio';
import Contacto from '@/components/Contacto';
import Ecosistema from '@/components/Ecosistema';
import Marcas from '@/components/Marcas';
import ModelosPartnership from '@/components/ModelosPartnership';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500 selection:text-white">
      {/* Navegación Superior */}
      <header className="flex justify-between items-center p-6 lg:px-12 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tighter">
          ECOM.AI<span className="text-blue-600">_</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-neutral-400 font-medium">
          <a href="#arquitectura" className="hover:text-white transition-colors">Arquitectura IA</a>
          <a href="#casos-exito" className="hover:text-white transition-colors">Casos de Éxito</a>
          <a href="#modelos-inversion" className="hover:text-white transition-colors">Modelos de Partnership</a>
        </nav>
        <button className="bg-white text-black px-5 py-2.5 rounded-md text-sm font-bold hover:bg-neutral-200 transition-all">
          Agendar Auditoría
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-32 lg:py-48 text-center max-w-5xl mx-auto">
        {/* Etiqueta de Autoridad */}
        <div className="inline-block px-4 py-1.5 mb-8 border border-neutral-800 rounded-full text-xs md:text-sm text-neutral-300 bg-neutral-900/50 shadow-sm shadow-blue-900/20">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Resultados Comprobados: De $0 a MercadoLíder Platinum en 60 días
          </span>
        </div>

        {/* Titular Principal (H1 Optimizado para SEO) */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          Escalamiento Omnicanal <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
            Impulsado por Inteligencia Artificial.
          </span>
        </h1>

        {/* Subtítulo Descriptivo */}
        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-3xl leading-relaxed">
          Dominamos el algoritmo de Mercado Libre, Amazon y TikTok Shop. Fusionamos modelos predictivos operados por Claude AI con una infraestructura de Full Fulfillment para facturar a escala industrial.
        </p>

        {/* Botones de Acción (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">
            Ver Modelos de Inversión
          </button>
          <button className="border border-neutral-700 text-neutral-300 px-8 py-3.5 rounded-lg font-semibold hover:bg-neutral-800 hover:text-white transition-all">
            Descubrir Metodología
          </button>
        </div>
      </section>
      <Marcas />
      <Ecosistema />
      <ModelosPartnership />
      <CasosDeExito />

      <Portafolio />

      <Contacto />
      
      {/* Footer Minimalista */}
      <footer className="border-t border-neutral-900 py-8 text-center text-sm text-neutral-600 bg-neutral-950">
        <p>© {new Date().getFullYear()} ECOM.AI. Ingeniería en E-commerce. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}