"use client";

import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const included = [
  "Diagnóstico completo de infraestructura TI",
  "Evaluación de seguridad y vulnerabilidades",
  "Análisis del entorno Microsoft 365 y Azure",
  "Reporte ejecutivo con prioridades de acción",
  "Sesión de revisión con nuestro equipo",
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-20 bg-void">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(0,224,198,0.05),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <AnimateIn className="mb-16">
          <div className="section-label mb-5">Contacto</div>
          <h2 className="font-heading text-display-md text-primary mb-4 max-w-2xl">
            Empecemos con tu<br />
            <span className="gradient-teal">evaluación gratuita.</span>
          </h2>
          <p className="text-secondary text-lg max-w-xl font-body leading-relaxed">
            En 48 horas tendrás un diagnóstico completo de tu infraestructura,
            sin costo y sin compromisos.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 max-w-5xl">

          {/* ── Left info ── */}
          <AnimateIn>
            <div className="space-y-5">
              {/* NIA includes */}
              <div className="p-6 rounded-2xl border border-subtle bg-card">
                <h3 className="font-heading font-semibold text-primary text-sm mb-4">Incluye el NIA:</h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-secondary font-body">
                      <CheckCircle2 size={13} className="text-teal flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                {[
                  { icon: Mail,    text: "info@nargtec.com" },
                  { icon: Phone,   text: "+1 (829) 261-1010" },
                  { icon: MapPin,  text: "Santo Domingo, República Dominicana" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg border border-subtle bg-card flex items-center justify-center flex-shrink-0">
                      <Icon size={13} className="text-teal" />
                    </div>
                    <span className="text-secondary text-xs font-body">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Direct contact */}
          <AnimateIn delay={0.1}>
            <div className="h-full min-h-[260px] flex flex-col justify-center p-8 md:p-12 rounded-2xl border border-teal/25 bg-teal/[0.04]">
              <Phone size={28} className="text-teal mb-6" />
              <h3 className="font-heading text-2xl text-primary mb-4">Conversemos sobre tu proyecto</h3>
              <p className="text-secondary font-body leading-relaxed mb-8">Llámanos para conocer nuestros servicios y coordinar tu evaluación.</p>
              <a href="tel:+18292611010" className="inline-flex items-center justify-center gap-3 rounded-xl bg-teal text-void font-semibold px-6 py-4">Llamar al +1 (829) 261-1010</a>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
