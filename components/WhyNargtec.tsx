"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { AnimateIn, StaggerParent, StaggerChild } from "./AnimateIn";

const comparisons = [
  { bad: "Reacciona cuando algo ya falló",       good: "Previene antes del fallo" },
  { bad: "Cobra por hora de trabajo",            good: "Precio fijo mensual predecible" },
  { bad: "Solo cierra tickets de soporte",       good: "Gestión estratégica de TI" },
  { bad: "Sin visibilidad de tu entorno",        good: "Reportes y alertas en tiempo real" },
  { bad: "Sin SLA definidos ni garantías",       good: "SLA garantizados por contrato" },
  { bad: "Conocimiento limitado de tu negocio",  good: "Entiende tus procesos y objetivos" },
];

const pillars = [
  {
    num: "01",
    title: "Proactividad, no reactividad",
    desc: "Detectamos y resolvemos el 94% de los incidentes antes de que impacten tu operación. El downtime no lo producen los problemas — lo produce la lentitud de respuesta.",
  },
  {
    num: "02",
    title: "Un equipo, toda la responsabilidad",
    desc: "Sin finger pointing entre proveedores. Nargtec es tu único punto de contacto para toda la infraestructura tecnológica. Si algo falla, es nuestro problema resolverlo.",
  },
  {
    num: "03",
    title: "Continuidad como métrica principal",
    desc: "No medimos tickets cerrados. Medimos horas sin interrupciones. Tu productividad y disponibilidad son los KPIs que importan en nuestros reportes ejecutivos.",
  },
  {
    num: "04",
    title: "Tecnología enterprise a tu escala",
    desc: "Accedes a herramientas, procesos y expertise que normalmente solo tienen grandes corporaciones — adaptados al tamaño y presupuesto de una empresa mediana.",
  },
];

export default function WhyNargtec() {
  return (
    <section id="porque" className="relative py-20 bg-base">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(61,80,112,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <AnimateIn className="mb-14">
          <div className="section-label mb-5">¿Por qué Nargtec?</div>
          <h2 className="font-heading text-display-md text-primary mb-5 max-w-3xl">
            No somos soporte técnico.<br />
            <span className="gradient-teal">Somos tu departamento de TI.</span>
          </h2>
          <p className="text-secondary text-lg max-w-xl font-body leading-relaxed">
            La diferencia no está en las herramientas. Está en la forma de pensar,
            medir y comprometerse con tu negocio.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 mb-16">

          {/* ── Comparison Table ── */}
          <AnimateIn>
            <div className="rounded-2xl border border-subtle overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-2 border-b border-subtle">
                <div className="px-6 py-4 bg-surface">
                  <span className="font-mono text-[10px] text-dim tracking-widest uppercase">Soporte tradicional</span>
                </div>
                <div className="px-6 py-4 bg-teal/5 border-l border-teal/15">
                  <span className="font-mono text-[10px] text-teal tracking-widest uppercase">Nargtec MSP</span>
                </div>
              </div>

              {/* Rows */}
              {comparisons.map((row, i) => (
                <div key={i} className="grid grid-cols-2 border-b border-subtle last:border-b-0">
                  <div className="px-5 py-4 flex items-start gap-2.5 bg-surface/50">
                    <X size={13} className="text-red-400/50 flex-shrink-0 mt-0.5" />
                    <span className="text-dim text-xs font-body leading-snug">{row.bad}</span>
                  </div>
                  <div className="px-5 py-4 flex items-start gap-2.5 bg-teal/[0.03] border-l border-teal/10">
                    <CheckCircle2 size={13} className="text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-primary text-xs font-body font-medium leading-snug">{row.good}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* ── Pillars ── */}
          <StaggerParent className="space-y-5">
            {pillars.map((p) => (
              <StaggerChild key={p.num}>
                <motion.div
                  className="flex gap-5 p-6 rounded-xl border border-subtle bg-card cursor-default group"
                  whileHover={{ borderColor: "rgba(0,224,198,0.2)", x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-mono text-xs text-dim flex-shrink-0 pt-0.5 group-hover:text-teal/50 transition-colors">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-primary text-sm mb-1.5">{p.title}</h3>
                    <p className="text-secondary text-xs leading-relaxed font-body">{p.desc}</p>
                  </div>
                </motion.div>
              </StaggerChild>
            ))}
          </StaggerParent>

        </div>

      </div>
    </section>
  );
}
