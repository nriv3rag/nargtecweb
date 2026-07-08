"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ─── Tech department background ────────────────────────────────
   Foto-ilustración de un centro de datos: racks de servidores con
   detalle de ventilación y pantallas con dashboards en vivo.
*/
function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <Image
        src="/images/centro02.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        style={{ opacity: 0.85 }}
      />

      {/* Overlay: oscurecimiento uniforme + viñeta suave detrás del texto */}
      <div className="absolute inset-0 bg-void" style={{ opacity: 0.50 }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_45%_at_50%_38%,rgba(2,9,18,0.6),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-void">

      <TechBackground />

      {/* Dot grid sutil */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(61,80,112,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial gradients — azul de marca */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(26,184,236,0.08),transparent)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-20 w-full text-center flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="section-label mb-8"
        >
          MSP · Infraestructura · Ciberseguridad
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-heading text-display-xl text-primary mb-6"
        >
          Tecnología que <span className="gradient-brand">impulsa su negocio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-body"
        >
          Ayudamos a las empresas a administrar, proteger y optimizar su
          infraestructura tecnológica mediante Servicios Administrados (MSP),
          ciberseguridad y monitoreo proactivo, garantizando continuidad
          operativa, mayor seguridad y un rendimiento confiable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contacto"
            className="group relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-void font-heading font-bold text-sm rounded-xl transition-all duration-300 shadow-teal-sm hover:shadow-teal-md hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl" />
            <span className="relative">Solicitar NIA gratuito</span>
            <ArrowRight size={16} className="relative group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-subtle text-secondary hover:text-primary hover:border-teal/30 font-heading font-medium text-sm rounded-xl transition-all duration-300"
          >
            Ver servicios
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-2">
            {["GG", "DO", "CI", "MR"].map((initials) => (
              <div
                key={initials}
                className="w-8 h-8 rounded-full bg-surface border-2 border-void flex items-center justify-center"
              >
                <span className="font-mono text-[9px] text-teal font-bold">{initials}</span>
              </div>
            ))}
          </div>
          <span className="text-dim text-xs font-body">
            +40 empresas confían en Nargtec en RD y el Caribe
          </span>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void to-transparent" />
    </section>
  );
}
