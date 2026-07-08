"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const MotionLink = motion.create(Link);

export default function CTABanner() {
  return (
    <section className="relative py-20 bg-base overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(61,80,112,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow — azul cielo del logo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_100%,rgba(26,184,236,0.08),transparent)]" />

      {/* Large decorative "NIA" — azul marino sutil */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-heading font-black leading-none pointer-events-none select-none"
        style={{ fontSize: "clamp(80px,20vw,200px)", color: "rgba(26,59,140,0.06)" }}
        aria-hidden
      >
        NIA
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <AnimateIn>
          <div className="section-label justify-center mb-8">Sin costo · Sin compromiso · 48h de respuesta</div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="font-heading text-display-lg text-primary mb-6">
            ¿Sabes exactamente<br />
            <span className="gradient-brand">qué tan sólida es</span><br />
            tu infraestructura hoy?
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-secondary text-lg mb-12 max-w-2xl mx-auto font-body leading-relaxed">
            La mayoría de las empresas descubren sus vulnerabilidades cuando ya es tarde.
            El Nargtec Infrastructure Assessment (NIA) es gratuito, no invasivo
            y te da un diagnóstico honesto en 48 horas.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MotionLink
              href="/contacto"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-void font-heading font-bold text-sm rounded-xl shadow-teal-md transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(26,184,236,0.35)]"
            >
              Agendar mi NIA gratuito
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </MotionLink>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-subtle text-secondary hover:text-primary hover:border-teal/25 font-heading font-medium text-sm rounded-xl transition-all duration-300"
            >
              Hablar con un especialista
            </Link>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
