"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ModelosPartnership() {
  const [expandido, setExpandido] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandido(expandido === index ? null : index);
  };

  return (
    <section id="modelos-inversion" className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-neutral-900/50 pt-32 mt-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Modelos de <span className="text-blue-500">Partnership</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Esquemas corporativos diseñados para la escalabilidad. Apalancados por un equipo de especialistas en logística física, producción visual y análisis algorítmico predictivo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Tarjeta 1: Operador Pasivo */}
        <div className="p-6 md:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-600 transition-all flex flex-col h-full">
          <h3 className="text-xl font-bold text-white mb-2">Operador Pasivo</h3>
          <p className="text-neutral-400 text-sm mb-6">Tú aportas la estructura fiscal, nosotros ponemos a todo el equipo.</p>
          <div className="text-3xl font-bold mb-6 text-white">
            1% - 3% <span className="text-sm font-normal text-neutral-500">/ Venta Neta</span>
          </div>
          
          <ul className="space-y-4 mb-6 flex-grow text-sm text-neutral-300">
            <li className="flex gap-3 items-start"><span className="text-blue-500">✓</span> Riesgo cero: inversión de capital 100% nuestra.</li>
            <li className="flex gap-3 items-start"><span className="text-blue-500">✓</span> Flotilla y personal logístico cubierto por ECOM.AI.</li>
          </ul>

          <button onClick={() => toggleExpand(0)} className="flex items-center justify-between w-full py-2 px-4 mb-6 text-sm font-medium text-neutral-400 bg-neutral-900 rounded-lg hover:text-white transition-colors">
            Ver despliegue operativo <ChevronDown className={`w-4 h-4 transition-transform ${expandido === 0 ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {expandido === 0 && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="text-xs text-neutral-400 pb-6 space-y-3">
                  <p><strong>Estructura Física:</strong> Contamos con una sólida red de almacenes propios y personal de empaque. Nosotros gestionamos desde la manufactura industrial in-house hasta el etiquetado.</p>
                  <p><strong>Flujo de Trabajo:</strong> Nuestras cuadrillas de logística absorben todo el desgaste operativo (envíos Full FBA). Tú solo pones la figura fiscal y recibes las utilidades.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button className="w-full mt-auto py-3 rounded-lg border border-neutral-700 text-white hover:bg-neutral-800 transition-colors font-medium">Agendar Llamada</button>
        </div>

        {/* Tarjeta 2: Agencia Premium (DESTACADA) */}
        <div className="p-6 md:p-8 rounded-2xl border-2 border-blue-600/50 bg-blue-950/10 hover:border-blue-500 transition-all relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20 flex flex-col h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wider whitespace-nowrap">
            MODELO VANGUARDISTA
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Agencia Premium</h3>
          <p className="text-neutral-400 text-sm mb-6">Un escuadrón completo gestionando tu operación diaria.</p>
          <div className="mb-6">
            <div className="text-4xl font-bold text-white flex items-baseline gap-1">
              $15,000 <span className="text-lg font-normal text-neutral-500">MXN</span>
            </div>
            <p className="text-xs text-neutral-500 mt-1">+ $3,000 MXN Setup Inicial (100 Publicaciones)</p>
          </div>
          
          <ul className="space-y-4 mb-6 flex-grow text-sm text-neutral-200">
            <li className="flex gap-3 items-start"><span className="text-blue-400">✓</span> Producción visual: Mockups hiperrealistas e infografías.</li>
            <li className="flex gap-3 items-start"><span className="text-blue-400">✓</span> Equipo de analistas respaldados por Claude AI.</li>
            <li className="flex gap-3 items-start"><span className="text-blue-400">✓</span> Supervisión en Amazon, Mercado Libre y TikTok.</li>
          </ul>

          <button onClick={() => toggleExpand(1)} className="flex items-center justify-between w-full py-2 px-4 mb-6 text-sm font-medium text-blue-300 bg-blue-900/20 rounded-lg hover:text-white transition-colors">
            Ver despliegue operativo <ChevronDown className={`w-4 h-4 transition-transform ${expandido === 1 ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {expandido === 1 && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="text-xs text-neutral-300 pb-6 space-y-3">
                  <p><strong>Fuerza Operativa:</strong> Tu cuenta es gestionada por nuestro *squad* de administradores y estrategas comerciales. Desarrollamos clips promocionales y renders hiperrealistas para catapultar tu CTR, usando modelos de IA predictivos como herramienta de alta precisión para aplastar a la competencia en SEO.</p>
                  <p><strong>Omnicanalidad:</strong> Nuestro personal en almacén coordina los tránsitos masivos hacia Amazon FBA y Mercado Libre Full, mientras nuestros especialistas en Ads maximizan tu ROAS.</p>
                  <p><strong>Dirección Global:</strong> Con la infraestructura física delegada a nuestro extenso equipo en México, nuestra dirección ejecutiva opera estrategias a nivel internacional, asegurando que tu facturación jamás se detenga.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button className="w-full mt-auto py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-bold shadow-lg shadow-blue-600/20">Seleccionar Plan</button>
        </div>

        {/* Tarjeta 3: Socio Capitalista */}
        <div className="p-6 md:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-600 transition-all flex flex-col h-full">
          <h3 className="text-xl font-bold text-white mb-2">Socio Capitalista</h3>
          <p className="text-neutral-400 text-sm mb-6">Tú provees la liquidez, nuestra corporación ejecuta el escalamiento.</p>
          <div className="text-3xl font-bold mb-6 text-white">
            50/50 <span className="text-sm font-normal text-neutral-500">/ Utilidad Neta</span>
          </div>
          
          <ul className="space-y-4 mb-6 flex-grow text-sm text-neutral-300">
            <li className="flex gap-3 items-start"><span className="text-blue-500">✓</span> Apalancamiento en nuestra cadena de suministro.</li>
            <li className="flex gap-3 items-start"><span className="text-blue-500">✓</span> Toda la carga laboral y administrativa por nuestra cuenta.</li>
          </ul>

          <button onClick={() => toggleExpand(2)} className="flex items-center justify-between w-full py-2 px-4 mb-6 text-sm font-medium text-neutral-400 bg-neutral-900 rounded-lg hover:text-white transition-colors">
            Ver despliegue operativo <ChevronDown className={`w-4 h-4 transition-transform ${expandido === 2 ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {expandido === 2 && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="text-xs text-neutral-400 pb-6 space-y-3">
                  <p><strong>Ingeniería de Márgenes:</strong> Nuestros analistas de mercado ejecutan protocolos de rentabilidad estricta (regla de 1/3 a 1/4), controlando el costo de fabricación para proteger tu inversión corporativa.</p>
                  <p><strong>Saturación de Mercado:</strong> Tu inyección de capital activa de inmediato a nuestra cuadrilla de *Supply Chain*, inundando las bodegas Full a nivel nacional para forzar el algoritmo y llevar la cuenta a $1 Millón MXN bimestral en tiempo récord.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button className="w-full mt-auto py-3 rounded-lg border border-neutral-700 text-white hover:bg-neutral-800 transition-colors font-medium">Revisar Proyecciones</button>
        </div>

      </div>
    </section>
  );
}