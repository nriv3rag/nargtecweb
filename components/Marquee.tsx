const items = [
  "Microsoft Partner",
  "Fortinet Certified",
  "VMware Partner",
  "Azure Expert MSP",
  "99.97% Uptime SLA",
  "24/7 Monitoreo Activo",
  "ISO/IEC 27001",
  "Soporte en <15 min",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden border-y border-subtle py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-void to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-void to-transparent pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-6">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-secondary">
              {item}
            </span>
            {/* Separador — azul cielo del logo */}
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(26,184,236,0.5)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
