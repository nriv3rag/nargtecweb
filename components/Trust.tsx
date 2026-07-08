"use client";

import { motion } from "framer-motion";
import { AnimateIn, StaggerParent, StaggerChild } from "./AnimateIn";

const testimonials = [
  {
    quote: "Desde que trabajamos con Nargtec, dejamos de preocuparnos por la tecnología. Ellos la manejan. Nosotros nos enfocamos en crecer.",
    author: "Director de Operaciones",
    company: "Empresa distribuidora — Santo Domingo",
    initials: "DO",
  },
  {
    quote: "El NIA que realizaron fue revelador. Teníamos vulnerabilidades críticas que no sabíamos que existían. Las resolvieron antes de que alguien las explotara.",
    author: "Gerente General",
    company: "Firma de servicios profesionales — RD",
    initials: "GG",
  },
  {
    quote: "Antes perdíamos horas esperando soporte. Ahora los problemas se resuelven antes de que impacten. Su tiempo de respuesta es genuinamente excepcional.",
    author: "CIO",
    company: "Grupo empresarial — Caribe",
    initials: "CI",
  },
];

export default function Trust() {
  return (
    <section className="relative py-20 bg-void">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <AnimateIn className="mb-16">
          <div className="section-label mb-5">Confianza</div>
          <h2 className="font-heading text-display-md text-primary">
            Empresas que no<br />
            <span className="gradient-teal">pueden permitirse fallar.</span>
          </h2>
        </AnimateIn>

        {/* ── Testimonials ── */}
        <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t) => (
            <StaggerChild key={t.initials}>
              <motion.div
                className="relative flex flex-col h-full p-7 rounded-2xl border border-subtle bg-card group cursor-default"
                whileHover={{ borderColor: "rgba(0,224,198,0.18)", y: -4 }}
                transition={{ duration: 0.25 }}
              >
                {/* Large quote mark */}
                <div
                  className="absolute top-5 right-6 font-heading font-black text-[72px] leading-none text-teal/5 select-none pointer-events-none"
                  aria-hidden
                >
                  &rdquo;
                </div>

                <p className="text-secondary text-sm leading-relaxed flex-1 mb-7 font-body italic relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-9 h-9 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-[9px] font-bold text-teal">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-primary text-xs font-heading font-semibold">{t.author}</div>
                    <div className="text-dim text-[10px] font-body mt-0.5">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>

        {/* ── Partners / certifications ── */}
        <AnimateIn>
          <div className="border-t border-subtle pt-12">
            <p className="font-mono text-[10px] text-dim tracking-[0.25em] uppercase text-center mb-8">
              Certificaciones y alianzas tecnológicas
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Microsoft Partner", "Fortinet Certified", "VMware Partner", "Azure Expert", "Sophos Partner", "Veeam Silver"].map((b) => (
                <span
                  key={b}
                  className="px-5 py-2.5 rounded-xl border border-subtle text-secondary text-xs font-body hover:border-teal/20 hover:text-primary transition-all duration-200"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
