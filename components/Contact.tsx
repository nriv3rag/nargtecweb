"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const included = [
  "Diagnóstico completo de infraestructura TI",
  "Evaluación de seguridad y vulnerabilidades",
  "Análisis del entorno Microsoft 365 y Azure",
  "Reporte ejecutivo con prioridades de acción",
  "Sesión de revisión con nuestro equipo",
];

export default function Contact() {
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");
  const [form,    setForm]    = useState({
    name: "", email: "", company: "", phone: "",
    message: "", interest: "NIA",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      setSent(true);
    } catch {
      setError("No se pudo enviar tu solicitud. Intenta de nuevo o escríbenos a info@nargtec.com.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-surface border border-subtle text-primary placeholder-dim text-sm font-body focus:outline-none focus:border-teal/40 focus:bg-card transition-all duration-200";
  const labelClass = "block font-mono text-[10px] text-dim tracking-widest uppercase mb-1.5";

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

          {/* ── Form ── */}
          <AnimateIn delay={0.1}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-[440px] flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-teal/25 bg-teal/[0.04]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-teal/15 border border-teal/25 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={28} className="text-teal" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-primary text-xl mb-2">Solicitud recibida</h3>
                  <p className="text-secondary text-sm font-body max-w-xs leading-relaxed">
                    Nos pondremos en contacto en menos de 24 horas para coordinar tu NIA.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-7 rounded-2xl border border-subtle bg-card space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Nombre *</label>
                      <input
                        name="name" required value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email corporativo *</label>
                      <input
                        name="email" type="email" required value={form.email}
                        onChange={handleChange}
                        placeholder="tu@empresa.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Empresa *</label>
                      <input
                        name="company" required value={form.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Teléfono</label>
                      <input
                        name="phone" value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (809) 000-0000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Me interesa</label>
                    <select
                      name="interest" value={form.interest} onChange={handleChange}
                      className={inputClass + " appearance-none cursor-pointer"}
                    >
                      <option value="NIA"           className="bg-card">NIA — Evaluación gratuita de infraestructura</option>
                      <option value="MSP"           className="bg-card">Servicios Administrados (MSP)</option>
                      <option value="Ciberseguridad" className="bg-card">Ciberseguridad</option>
                      <option value="Azure"         className="bg-card">Microsoft Azure / M365</option>
                      <option value="General"       className="bg-card">Consulta general</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Cuéntanos sobre tu empresa</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      rows={3}
                      placeholder="¿Cuántos usuarios? ¿Qué desafíos tecnológicos enfrentan actualmente?"
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.01 } : {}}
                    whileTap={!loading  ? { scale: 0.99 } : {}}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-teal disabled:opacity-50 text-void font-heading font-bold rounded-xl text-sm transition-all duration-200 shadow-teal-sm hover:shadow-teal-md"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-void/20 border-t-void rounded-full animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                    {loading ? "Enviando..." : "Solicitar NIA gratuito"}
                  </motion.button>

                  {error && (
                    <p className="text-red-400 text-xs text-center font-body">{error}</p>
                  )}

                  <p className="font-mono text-[10px] text-dim text-center tracking-wider">
                    Sin compromisos · Tu información es confidencial
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
