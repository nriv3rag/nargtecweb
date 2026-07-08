"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { StaggerParent, StaggerChild } from "./AnimateIn";

const services = [
  {
    num: "01",
    title: "Servicios Administrados",
    sub: "MSP",
    desc:
      "Gestión proactiva y completa de toda tu infraestructura TI. Monitoreo 24/7, mantenimiento preventivo, helpdesk y resolución de incidentes antes de que te afecten. Un único contrato. Cero sorpresas.",
    tag: "Servicio principal",
    tagColor: "border-teal/30 text-teal bg-teal/5",
  },
  {
    num: "02",
    title: "Ciberseguridad Empresarial",
    sub: "Security",
    desc:
      "Protección multicapa: firewall de próxima generación, detección y respuesta ante amenazas (EDR/XDR), segmentación de red, políticas de acceso y gestión de vulnerabilidades. Cumplimiento y resiliencia.",
  },
  {
    num: "03",
    title: "Microsoft Azure y M365",
    sub: "Cloud",
    desc:
      "Diseño, migración y administración de cargas de trabajo en Azure. Gestión completa de Microsoft 365 — Exchange, Teams, SharePoint, Entra ID y optimización de licencias. Gobierno de la nube desde el día uno.",
  },
  {
    num: "04",
    title: "Infraestructura y Redes",
    sub: "Infrastructure",
    desc:
      "Diseño e implementación de servidores Windows Server, virtualización con Hyper-V/VMware, redes LAN/WAN, SD-WAN, switching y conectividad segura. Arquitectura que escala con tu negocio.",
  },
  {
    num: "05",
    title: "Backup y Continuidad Operativa",
    sub: "Recovery",
    desc:
      "Estrategias de respaldo inteligentes con RTO y RPO definidos por contrato. Recuperación ante desastres (DR), pruebas regulares y planes de continuidad de negocio que garantizan operación ante cualquier evento.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 bg-void">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 mb-14 items-end">
          <div>
            <div className="section-label mb-5">Servicios</div>
            <h2 className="font-heading text-display-md text-primary">
              Todo lo que<br />necesitas en TI,<br />
              <span className="gradient-teal">un solo socio.</span>
            </h2>
          </div>
          <p className="text-secondary text-lg leading-relaxed max-w-xl lg:pb-2 font-body">
            No coordinamos con terceros. No dejamos brechas de responsabilidad.
            Nargtec cubre el ciclo completo de tu infraestructura tecnológica, desde
            la red hasta la nube.
          </p>
        </div>

        {/* ── Editorial Service List ── */}
        <StaggerParent className="divide-y divide-subtle">
          {services.map((s) => (
            <StaggerChild key={s.num}>
              <motion.div
                className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 md:gap-12 py-8 items-start cursor-default"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Number */}
                <div className="flex items-center gap-4 md:block">
                  <span className="font-mono text-xs text-dim group-hover:text-teal/60 transition-colors duration-300">
                    {s.num}
                  </span>
                  <span className="md:hidden font-heading font-bold text-primary text-lg">{s.title}</span>
                </div>

                {/* Content */}
                <div>
                  <div className="hidden md:flex items-center gap-3 mb-3">
                    <h3 className="font-heading font-bold text-xl text-primary group-hover:text-white transition-colors duration-200">
                      {s.title}
                    </h3>
                    {s.tag && (
                      <span className={`px-2 py-0.5 rounded-full border text-[10px] font-mono font-bold tracking-wider uppercase ${s.tagColor}`}>
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-secondary text-sm leading-relaxed max-w-2xl font-body group-hover:text-primary/70 transition-colors duration-200">
                    {s.desc}
                  </p>
                </div>

                {/* Sub + Arrow */}
                <div className="flex items-center gap-3 md:pt-1">
                  <span className="font-mono text-[10px] text-dim tracking-widest uppercase hidden md:block">{s.sub}</span>
                  <div className="w-8 h-8 rounded-full border border-subtle flex items-center justify-center text-dim group-hover:border-teal/30 group-hover:text-teal transition-all duration-300">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>

      </div>
    </section>
  );
}
