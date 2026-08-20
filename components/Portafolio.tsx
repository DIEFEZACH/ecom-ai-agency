"use client";

import React from "react";
import { motion } from "framer-motion";

// Aquí están los links y marcas que administras
const cuentas = [
  {
    nombre: "Industrias Magno",
    url: "https://www.mercadolibre.com.mx/pagina/industriasmagno9086",
    status: "MercadoLíder Platinum",
    metricas: "+50,000 Ventas | +500 Productos",
    destacado: true,
  },
  {
    nombre: "Verde Santo Oficial",
    url: "https://www.mercadolibre.com.mx/pagina/verdesantooficial",
    status: "Tienda Oficial",
    metricas: "Gestión Estratégica AI",
    destacado: false,
  },
  {
    nombre: "Divina Pureza",
    url: "https://www.mercadolibre.com.mx/pagina/divinapureza",
    status: "Tienda Oficial",
    metricas: "Escalamiento Omnicanal",
    destacado: false,
  },
  {
    nombre: "Grupo Zagar",
    url: "https://www.mercadolibre.com.mx/pagina/grupo_zagar",
    status: "Distribuidor",
    metricas: "Operación Full",
    destacado: false,
  },
  {
    nombre: "Zach Comercializadora",
    url: "https://www.mercadolibre.com.mx/pagina/zach_comercializadora_dtup",
    status: "MercadoLíder",
    metricas: "Venta Masiva",
    destacado: false,
  },
  {
    nombre: "Comercializadora A",
    url: "https://listado.mercadolibre.com.mx/_CustId_3422716944",
    status: "Cuenta Gestionada",
    metricas: "Logística Optimizada",
    destacado: false,
  },
  {
    nombre: "Comercializadora B",
    url: "https://listado.mercadolibre.com.mx/_CustId_3493500110",
    status: "Cuenta Gestionada",
    metricas: "Crecimiento Acelerado",
    destacado: false,
  },
];

export default function Portafolio() {
  return (
    <section className="py-24 px-6 border-t border-neutral-900/50 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado con tu métrica de $1.5M */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 relative z-10">
            Portafolio Bajo <span className="text-blue-500">Nuestra Gestión</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg relative z-10">
            Actualmente operamos un ecosistema de 10 cuentas de alto rendimiento. Nuestro caso de éxito principal factura <span className="text-white font-bold">$1.5 Millones MXN mensuales</span> con un <span className="text-emerald-400 font-bold">7.5% de conversión</span> orgánica.
          </p>
        </div>

        {/* Carrusel Deslizable */}
        <div className="flex overflow-x-auto pb-10 gap-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {cuentas.map((cuenta, index) => (
            <motion.a
              key={index}
              href={cuenta.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`min-w-[300px] md:min-w-[350px] snap-center p-6 rounded-2xl border flex flex-col justify-between transition-all hover:-translate-y-2 cursor-pointer
                ${cuenta.destacado 
                  ? "bg-gradient-to-br from-blue-900/20 to-neutral-900 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]" 
                  : "bg-neutral-900/40 border-neutral-800 hover:border-neutral-600"
                }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`text-xs font-bold px-3 py-1 rounded-full ${cuenta.destacado ? "bg-emerald-500/20 text-emerald-400" : "bg-neutral-800 text-neutral-300"}`}>
                    {cuenta.status}
                  </div>
                  {cuenta.destacado && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{cuenta.nombre}</h3>
                <p className="text-neutral-400 text-sm mb-6">{cuenta.metricas}</p>
              </div>
              
              <div className="flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
                Auditar Tienda <span className="ml-2">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* Estilo para ocultar la barra de scroll en webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}