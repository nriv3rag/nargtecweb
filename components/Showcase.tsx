"use client";

import Image from "next/image";
import { StaggerParent, StaggerChild } from "./AnimateIn";

const items = [
  {
    src: "/images/centro01.jpg",
    position: "80% 45%",
    tag: "Infraestructura",
    title: "Centro de operaciones 24/7",
    desc: "Monitoreo continuo de servidores, redes y respaldo desde nuestro NOC.",
  },
  {
    src: "/images/cybersecurity.jpg",
    position: "center",
    tag: "Ciberseguridad",
    title: "Protección multicapa",
    desc: "Firewall, EDR/XDR y gestión de vulnerabilidades sobre toda tu red.",
  },
  {
    src: "/images/cloud-network.jpg",
    position: "center",
    tag: "Cloud",
    title: "Nube y conectividad",
    desc: "Arquitectura en Azure y M365 conectada de forma segura a tu operación.",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-16 bg-void">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <StaggerChild key={item.title}>
              <div className="group relative rounded-2xl overflow-hidden border border-subtle bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    style={{ objectPosition: item.position }}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <span className="font-mono text-[10px] text-teal tracking-widest uppercase">{item.tag}</span>
                  <h3 className="font-heading font-bold text-primary text-lg mt-2 mb-2">{item.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
