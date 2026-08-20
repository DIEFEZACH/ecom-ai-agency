"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CasosDeExito() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Rastrear el scroll dentro de este contenedor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Animación del punto y la línea (de 0% a 100% del width)
  const widthProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="casos-exito" className="py-32 px-6 max-w-6xl mx-auto" ref={containerRef}>
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Data-Driven: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">De 0 a Platinum</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg mb-4">
          No vendemos promesas, vendemos un sistema matemático. Este es el roadmap de facturación de nuestro ecosistema, respaldado por un portafolio activo de 10 cuentas bajo gestión simultánea.
        </p>
      </div>

      <div className="relative w-full pb-20">
        {/* Línea base estática (fondo) */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-neutral-800 -translate-y-1/2 rounded-full"></div>
        
        {/* Línea animada con Scroll */}
        <motion.div 
          className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-400 -translate-y-1/2 rounded-full z-10"
          style={{ width: widthProgress }}
        />

        {/* El "Punto" que avanza */}
        <motion.div 
          className="absolute top-1/2 h-6 w-6 bg-white border-4 border-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] -translate-y-1/2 -translate-x-1/2 z-20"
          style={{ left: widthProgress }}
        />

        {/* Grid de Métricas (Bento Box Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-30 pt-16">
          
          {/* Hito 1: Cuenta Nueva */}
          <div className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 p-6 rounded-2xl transform transition hover:-translate-y-2 hover:border-blue-500/50">
            <div className="text-blue-500 text-sm font-bold mb-1">FASE 1: ARRANQUE (30 DÍAS)</div>
            <div className="text-3xl font-extrabold text-white mb-4">$78,231 <span className="text-sm font-normal text-neutral-500">MXN/mes</span></div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Conversión</span>
                <span className="text-white font-medium">1.3%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Status</span>
                <span className="text-emerald-400 font-medium">MercadoLíder</span>
              </div>
            </div>
          </div>

          {/* Hito 2: Escalamiento */}
          <div className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 p-6 rounded-2xl transform transition hover:-translate-y-2 hover:border-blue-500/50 mt-12 md:mt-0">
            <div className="text-blue-400 text-sm font-bold mb-1">FASE 2: TRACCIÓN (60 DÍAS)</div>
            <div className="text-4xl font-extrabold text-white mb-4">$412,584 <span className="text-sm font-normal text-neutral-500">MXN/mes</span></div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Conversión</span>
                <span className="text-white font-medium">3.1%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Unidades Vendidas</span>
                <span className="text-white font-medium">1,535 ud.</span>
              </div>
            </div>
          </div>

          {/* Hito 3: Consolidación Platinum */}
          <div className="bg-gradient-to-b from-blue-900/20 to-neutral-900/80 backdrop-blur-sm border border-blue-500/30 p-6 rounded-2xl transform transition hover:-translate-y-2 hover:border-blue-400 shadow-2xl shadow-blue-900/20 mt-12 md:mt-0 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">TOP PERFORMER</div>
            <div className="text-emerald-400 text-sm font-bold mb-1">FASE 3: DOMINIO ALGORÍTMICO</div>
            <div className="text-5xl font-extrabold text-white mb-4">$831,864 <span className="text-sm font-normal text-neutral-500">MXN/mes</span></div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Conversión</span>
                <span className="text-white font-medium">5.0%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Status</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  Platinum <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}