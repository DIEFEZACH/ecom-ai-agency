import React from 'react';
import CasosDeExito from '@/components/CasosDeExito'; 
import Contacto from '@/components/Contacto';

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

        <CasosDeExito />

      {/* Sección Modelos de Inversión */}
      <section id="modelos-inversion" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900/50 pt-32 mt-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Modelos de <span className="text-blue-500">Partnership</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Esquemas diseñados para diferentes niveles de escalabilidad. Desde gestión algorítmica hasta inyección de capital en infraestructura Full Fulfillment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Tarjeta 1: Operador Pasivo */}
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-600 transition-all flex flex-col h-full">
            <h3 className="text-xl font-bold text-white mb-2">Operador Pasivo</h3>
            <p className="text-neutral-400 text-sm mb-6">Tú aportas la estructura fiscal, nosotros ponemos el ecosistema.</p>
            <div className="text-3xl font-bold mb-6 text-white">
              1% - 3% <span className="text-sm font-normal text-neutral-500">/ Venta Neta</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow text-sm text-neutral-300">
              <li className="flex gap-3 items-start">
                <span className="text-blue-500">✓</span> Riesgo cero: nosotros invertimos en inventario.
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-500">✓</span> Logística y envíos 100% por nuestra cuenta.
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-500">✓</span> Setup inicial cubierto por la agencia.
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-neutral-700 text-white hover:bg-neutral-800 transition-colors font-medium">
              Agendar Llamada
            </button>
          </div>

          {/* Tarjeta 2: Agencia Premium (DESTACADA) */}
          <div className="p-8 rounded-2xl border-2 border-blue-600/50 bg-blue-950/10 hover:border-blue-500 transition-all relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20 flex flex-col h-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">
              MODELO VANGUARDISTA
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Agencia Premium</h3>
            <p className="text-neutral-400 text-sm mb-6">Operación táctica impulsada por IA. Tú mantienes el inventario.</p>
            <div className="mb-6">
              <div className="text-4xl font-bold text-white flex items-baseline gap-1">
                $12,000 <span className="text-lg font-normal text-neutral-500">MXN</span>
              </div>
              <p className="text-xs text-neutral-500 mt-1">+ $3,000 MXN Setup Inicial (100 Publicaciones)</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow text-sm text-neutral-200">
              <li className="flex gap-3 items-start">
                <span className="text-blue-400">✓</span> Integración exclusiva con modelos predictivos (Claude AI).
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-400">✓</span> Publicaciones estructuradas para máxima conversión.
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-400">✓</span> Estrategia de crecimiento orgánico y Mercado Ads.
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-400">✓</span> Bonos de desempeño al escalar facturación.
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-bold shadow-lg shadow-blue-600/20">
              Seleccionar Plan
            </button>
          </div>

          {/* Tarjeta 3: Socio Capitalista */}
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-600 transition-all flex flex-col h-full">
            <h3 className="text-xl font-bold text-white mb-2">Socio Capitalista</h3>
            <p className="text-neutral-400 text-sm mb-6">Escalamiento agresivo. Tú inyectas capital para Full Fulfillment.</p>
            <div className="text-3xl font-bold mb-6 text-white">
              50/50 <span className="text-sm font-normal text-neutral-500">/ Utilidad Neta</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow text-sm text-neutral-300">
              <li className="flex gap-3 items-start">
                <span className="text-blue-500">✓</span> Inyección de capital directo a inventario masivo.
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-500">✓</span> Saturación estratégica de bodegas (ML / Amazon).
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-500">✓</span> Gestión total por ECOM.AI sin cobro mensual fijo.
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-neutral-700 text-white hover:bg-neutral-800 transition-colors font-medium">
              Revisar Proyecciones
            </button>
          </div>

        </div>
      </section>

      <Contacto />
      
      {/* Footer Minimalista */}
      <footer className="border-t border-neutral-900 py-8 text-center text-sm text-neutral-600 bg-neutral-950">
        <p>© {new Date().getFullYear()} ECOM.AI. Ingeniería en E-commerce. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}