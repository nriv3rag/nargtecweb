"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const methods = [
  {
    step:    "01",
    acronym: "NIA",
    name:    "Nargtec Infrastructure Assessment",
    tagline: "Evalúa",
    color:   "sky" as const,
    desc:    "Una evaluación integral y gratuita de toda tu infraestructura. Identificamos riesgos críticos, brechas de seguridad y oportunidades de optimización con un diagnóstico honesto.",
    points: [
      "Diagnóstico completo: servidores, red, seguridad, nube",
      "Identificación de riesgos críticos con severidad",
      "Análisis del estado de Microsoft 365 y Azure",
      "Informe ejecutivo con hoja de ruta priorizada",
      "Sesión de revisión con nuestro equipo técnico",
    ],
    cta:  "Solicitar NIA — es gratuito",
    free: true,
  },
  {
    step:    "02",
    acronym: "NIM",
    name:    "Nargtec Intelligent Maintenance",
    tagline: "Mantiene",
    color:   "violet" as const,
    desc:    "Nuestra metodología de mantenimiento proactivo e inteligente. Monitoreo continuo, automatización y gestión predictiva eliminan el mantenimiento reactivo por completo.",
    points: [
      "Monitoreo 24/7 de todos los sistemas y servicios",
      "Automatización de tareas repetitivas de TI",
      "Alertas predictivas: detección antes del fallo",
      "Gestión centralizada de parches y actualizaciones",
      "Reportes mensuales de salud y disponibilidad",
    ],
    cta:  "Conocer el proceso",
    free: false,
  },
  {
    step:    "03",
    acronym: "IMT",
    name:    "Índice de Madurez Tecnológica",
    tagline: "Mide",
    color:   "navy" as const,
    desc:    "Nuestro indicador propietario que mide el nivel de madurez tecnológica de tu empresa. Una referencia clara de dónde estás y una ruta definida hacia dónde debes ir.",
    points: [
      "Evaluación en 5 dimensiones: seguridad, infraestructura, nube, procesos, continuidad",
      "Benchmark vs. empresas del mismo sector y tamaño",
      "Puntuación 0–100 con desglose por dimensión",
      "Plan de evolución personalizado por etapas",
      "Revisión trimestral para medir el progreso",
    ],
    cta:  "Calcular mi IMT",
    free: false,
  },
];

/* Paleta derivada del logo: azul cielo, violeta y azul marino */
const colorMap = {
  sky: {
    accent:  "text-teal",
    border:  "border-teal/20",
    bg:      "bg-teal/[0.04]",
    hoverBg: "hover:bg-teal/[0.07]",
    dot:     "bg-teal",
    cta:     "text-teal hover:text-teal/80",
    big:     "from-teal/30 to-teal/5",
    tagBg:   "bg-teal/10 border-teal/20 text-teal",
  },
  violet: {
    accent:  "text-violet-400",
    border:  "border-violet-400/20",
    bg:      "bg-violet-400/[0.04]",
    hoverBg: "hover:bg-violet-400/[0.07]",
    dot:     "bg-violet-400",
    cta:     "text-violet-400 hover:text-violet-300",
    big:     "from-violet-400/30 to-violet-400/5",
    tagBg:   "bg-violet-400/10 border-violet-400/20 text-violet-400",
  },
  /* Azul marino del logo — tercer color de la trilogía */
  navy: {
    accent:  "text-cobalt",
    border:  "border-cobalt/25",
    bg:      "bg-cobalt/[0.06]",
    hoverBg: "hover:bg-cobalt/[0.1]",
    dot:     "bg-cobalt",
    cta:     "text-cobalt hover:text-blue-300",
    big:     "from-cobalt/35 to-cobalt/5",
    tagBg:   "bg-cobalt/10 border-cobalt/20 text-cobalt",
  },
};

export default function Methodologies() {
  return (
    <section id="metodologias" className="relative py-20 bg-void">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <AnimateIn className="mb-6">
          <div className="section-label mb-5">Metodologías propias</div>
        </AnimateIn>
        <AnimateIn delay={0.05}>
          <h2 className="font-heading text-display-md text-primary mb-4 max-w-2xl">
            La secuencia Nargtec.<br />
            <span className="gradient-brand">Evaluamos. Administramos. Medimos.</span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1} className="mb-16">
          <p className="text-secondary text-lg max-w-xl font-body leading-relaxed">
            No trabajamos con procesos genéricos. Desarrollamos metodologías propias
            que garantizan resultados medibles y evolucionan con cada cliente.
          </p>
        </AnimateIn>

        {/* ── Process connector (desktop) ── */}
        <div className="hidden lg:flex items-center justify-center gap-0 mb-12">
          {methods.map((m, i) => {
            const c = colorMap[m.color];
            return (
              <div key={m.acronym} className="flex items-center gap-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={`flex items-center gap-3 px-5 py-2.5 rounded-full border ${c.border} ${c.bg}`}
                >
                  <span className="font-mono text-[10px] text-dim">{m.step}</span>
                  <span className={`font-heading font-bold text-sm ${c.accent}`}>{m.acronym}</span>
                  <span className="font-body text-xs text-secondary">{m.tagline}</span>
                </motion.div>
                {i < methods.length - 1 && (
                  <ChevronRight size={16} className="text-dim mx-2 flex-shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {methods.map((m, i) => {
            const c = colorMap[m.color];
            return (
              <motion.div
                key={m.acronym}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -4 }}
                className={`relative flex flex-col rounded-2xl border ${c.border} ${c.bg} ${c.hoverBg} p-7 overflow-hidden transition-colors duration-300`}
              >
                {/* Big decorative acronym */}
                <div
                  className={`absolute -top-4 -right-2 font-heading font-black text-[72px] leading-none pointer-events-none select-none bg-gradient-to-b ${c.big} bg-clip-text`}
                  style={{ WebkitTextFillColor: "transparent" }}
                  aria-hidden
                >
                  {m.acronym}
                </div>

                <div className="flex items-center gap-2 mb-5 relative z-10">
                  <span className="font-mono text-[10px] text-dim">{m.step}</span>
                  {m.free && (
                    <span className={`px-2 py-0.5 rounded-full border text-[9px] font-mono font-bold tracking-wider uppercase ${c.tagBg}`}>
                      Gratuito
                    </span>
                  )}
                </div>

                <h3 className={`font-heading font-black text-3xl ${c.accent} mb-1 relative z-10`}>{m.acronym}</h3>
                <p className="font-heading font-semibold text-sm text-primary mb-4 relative z-10">{m.name}</p>
                <p className="text-secondary text-sm leading-relaxed mb-6 font-body relative z-10">{m.desc}</p>

                <ul className="space-y-2.5 mb-8 flex-1 relative z-10">
                  {m.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-secondary font-body">
                      <span className={`mt-[5px] w-1 h-1 rounded-full flex-shrink-0 ${c.dot}`} />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className={`group inline-flex items-center gap-1.5 text-sm font-semibold font-heading ${c.cta} transition-colors relative z-10`}
                >
                  {m.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
