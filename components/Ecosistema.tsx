"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Smartphone, Globe, Cpu, Box, Rocket } from "lucide-react";

export default function Ecosistema() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Dominio <span className="text-blue-500">Omnicanal</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          No dependemos de un solo algoritmo. Desplegamos tu inventario a través de un ecosistema interconectado de Marketplaces, Social Commerce y D2C (Direct-to-Consumer).
        </p>
      </div>

      {/* Grid Bento Box */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 auto-rows-[200px]">
        
        {/* Box 1: Amazon & Mercado Libre (CON LA IMAGEN DE FONDO) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl border border-neutral-800 group hover:border-blue-500/50 transition-all min-h-[300px]"
        >
          {/* Fondo con la imagen del Centro de Comando */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
            style={{ backgroundImage: "url('https://res.cloudinary.com/diefezach/image/upload/v1787201853/Gemini_Generated_Image_y06fmoy06fmoy06f_zo99ub.jpg')" }}
          ></div>
          
          {/* Capa de difuminado para que el texto resalte */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>

          {/* Contenido (relative z-10 para que flote sobre la foto) */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-end">
            <ShoppingBag className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Marketplaces Core</h3>
            <p className="text-neutral-300 text-sm mb-6 leading-relaxed max-w-md">
              Ingeniería de listados para <strong>Amazon Seller Central</strong> y <strong>Mercado Libre</strong>. Dominio absoluto de FBA y Full Fulfillment, escalando de 0 a Platinum en tiempo récord mediante estrategias de Buy Box y posicionamiento algorítmico SEO.
            </p>
            <div className="flex gap-2">
              <span className="text-xs font-bold px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/20 backdrop-blur-md">Mercado Libre</span>
              <span className="text-xs font-bold px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full border border-orange-500/20 backdrop-blur-md">Amazon FBA</span>
            </div>
          </div>
        </motion.div>

        {/* Box 2: TikTok Shop & Social (Span 2 col, 1 row) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 md:row-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 relative group hover:border-pink-500/50 transition-all"
        >
          <div className="flex justify-between items-start">
            <div>
              <Smartphone className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Social Commerce & TikTok Shop</h3>
              <p className="text-neutral-400 text-sm">
                Conversión directa desde contenido viral. Transformamos la atención en ventas a través de integraciones nativas y estrategias de Live Shopping.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Box 3: Custom Domains & D2C (Span 1 col, 2 rows) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1 md:row-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 relative group hover:border-emerald-500/50 transition-all flex flex-col"
        >
          <Globe className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">D2C & Custom Dev</h3>
          <p className="text-neutral-400 text-sm flex-grow">
            Desarrollo in-house de e-commerce con dominio propio. Programación de cotizadores dinámicos, catálogos B2B y sistemas de gestión de inventario a medida.
          </p>
          <div className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 w-fit mt-4">
            Custom Software
          </div>
        </motion.div>

        {/* Box 4: Supply Chain & Dropshipping (Span 1 col, 1 row) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-1 md:row-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 relative group hover:border-white/50 transition-all"
        >
          <Box className="w-6 h-6 text-neutral-300 mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">Logística Global</h3>
          <p className="text-neutral-400 text-xs">
            Modelos ágiles de Dropshipping e importación directa para testear productos ganadores sin riesgo de sobre-stock.
          </p>
        </motion.div>

        {/* Box 5: Manufactura 3D (Span 2 col, 1 row) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-indigo-500/30 rounded-3xl p-6 relative flex items-center gap-6 group hover:border-indigo-400 transition-all"
        >
          <div className="bg-indigo-500/20 p-4 rounded-2xl">
            <Cpu className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">In-House Manufacturing (Impresión 3D)</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Capacidad de manufacturar accesorios y duplicar productos de alto margen para dominar la competencia utilizando la impresora industrial Bambu Lab P2S.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}