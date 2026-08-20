"use client";

import React from "react";
import { motion } from "framer-motion";

const marcas = [
  { nombre: "Margrey", logo: "https://res.cloudinary.com/diefezach/image/upload/v1720413180/logo_margrey_tqqtcz.ico" },
  { nombre: "Magno Clean", logo: "https://res.cloudinary.com/diefezach/image/upload/v1759874368/logo_magno_clean_gmj5l1.png" },
  { nombre: "Verde Santo", logo: "https://res.cloudinary.com/diefezach/image/upload/v1787199352/WhatsApp_Image_2026-08-19_at_22.13.52_djfcwr.jpg" },
  { nombre: "Zach Chemical", logo: "https://res.cloudinary.com/diefezach/image/upload/v1787199086/WhatsApp_Image_2026-08-19_at_22.01.04_z9artd.jpg" },
  { nombre: "Zagar", logo: "https://res.cloudinary.com/diefezach/image/upload/v1787199142/Captura_de_pantalla_2026-08-19_a_la_s_10.12.05_p.m._b9pwx1.png" },
  { nombre: "DTUP", logo: "https://res.cloudinary.com/diefezach/image/upload/v1759352900/Margrey_2025_ednlm6.jpg" },
  { nombre: "Magníficos de la Limpieza", logo: "https://res.cloudinary.com/diefezach/image/upload/v1771224245/logo_geg7qq.svg" },
  { nombre: "Pureza", logo: "https://res.cloudinary.com/diefezach/image/upload/v1787199472/Captura_de_pantalla_2026-08-19_a_la_s_10.17.38_p.m._pfk9zz.png" },
];

export default function Marcas() {
  // Duplicamos el array para que el efecto infinito de desplazamiento no se corte
  const duplicadoMarcas = [...marcas, ...marcas];

  return (
    <section className="py-12 px-6 bg-neutral-950 border-t border-b border-neutral-900/50 overflow-hidden flex flex-col justify-center items-center">
      <p className="text-sm font-bold text-neutral-500 tracking-widest uppercase mb-8 text-center">
        Marcas distribuidas y gestionadas en nuestro ecosistema
      </p>
      
      <div className="w-full max-w-7xl relative overflow-hidden flex items-center h-24">
        {/* Sombras en los bordes para un efecto de difuminado */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>

        <motion.div
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {duplicadoMarcas.map((marca, index) => (
            <div key={index} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              {marca.logo !== "URL_CLOUDINARY_AQUI" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={marca.logo} alt={marca.nombre} className="h-12 w-auto object-contain" />
              ) : (
                <span className="text-xl font-bold text-neutral-400">{marca.nombre}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}