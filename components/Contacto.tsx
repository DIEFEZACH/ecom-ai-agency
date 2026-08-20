"use client";

import React, { useState } from 'react';

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const myForm = e.currentTarget;
    const formData = new FormData(myForm);
    const data = new URLSearchParams(formData as any).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data,
      });
      setEnviado(true);
    } catch (error) {
      console.error("Error en el envío:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-32 px-6 border-t border-neutral-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Inicia tu <span className="text-blue-500">Auditoría</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Completa este formulario. Evaluaremos la viabilidad de tu catálogo y si cumples con el perfil para integrarte a nuestra infraestructura.
          </p>
        </div>

        {enviado ? (
          <div className="bg-neutral-900/50 backdrop-blur-md border border-emerald-500/30 p-12 rounded-2xl shadow-2xl text-center transform transition-all">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-emerald-400 text-4xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Solicitud Recibida</h3>
            <p className="text-neutral-400">
              Hemos registrado tus datos. Nuestro algoritmo está analizando la viabilidad de tu cuenta. Te contactaremos en las próximas 24 horas.
            </p>
          </div>
        ) : (
          <form 
            name="contacto-agencia" 
            onSubmit={handleSubmit}
            data-netlify="true" 
            className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <input type="hidden" name="form-name" value="contacto-agencia" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-sm font-medium text-neutral-300">Nombre o Razón Social</label>
                <input type="text" id="nombre" name="nombre" required 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                  placeholder="Ej. Comercializadora MX" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-300">Correo Corporativo</label>
                <input type="email" id="email" name="email" required 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                  placeholder="director@empresa.com" />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label htmlFor="facturacion" className="text-sm font-medium text-neutral-300">Nivel de Facturación Actual (Mensual)</label>
              <select id="facturacion" name="facturacion" required
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                <option value="" disabled selected>Selecciona un rango...</option>
                <option value="0-50k">Aún no vendo en plataformas / $0 - $50,000 MXN</option>
                <option value="50k-200k">$50,000 - $200,000 MXN (Buscando rentabilidad)</option>
                <option value="200k-500k">$200,000 - $500,000 MXN (Buscando automatización)</option>
                <option value="500k+">Más de $500,000 MXN (Buscando infraestructura Full)</option>
              </select>
            </div>

            <div className="space-y-2 mb-10">
              <label htmlFor="modelo" className="text-sm font-medium text-neutral-300">¿Qué modelo de Partnership te interesa?</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="flex items-center gap-3 p-4 border border-neutral-800 rounded-lg cursor-pointer hover:border-blue-500 transition-all bg-neutral-950/50 group">
                  <input type="radio" name="modelo" value="setup" className="w-4 h-4 accent-blue-500" required />
                  <span className="text-sm text-neutral-300 group-hover:text-white">Solo Setup Inicial</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-blue-600/50 rounded-lg cursor-pointer bg-blue-900/10 hover:border-blue-500 transition-all group">
                  <input type="radio" name="modelo" value="agencia" className="w-4 h-4 accent-blue-500" required />
                  <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300">Agencia Premium (Recomendado)</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-neutral-800 rounded-lg cursor-pointer hover:border-blue-500 transition-all bg-neutral-950/50 group">
                  <input type="radio" name="modelo" value="inversionista" className="w-4 h-4 accent-blue-500" required />
                  <span className="text-sm text-neutral-300 group-hover:text-white">Socio Capitalista</span>
                </label>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-white text-black font-bold text-lg py-4 rounded-lg hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2">
              {loading ? "Procesando..." : "Solicitar Evaluación de Cuenta"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}