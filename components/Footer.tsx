import Image from "next/image";
import { Linkedin, Twitter, Github } from "lucide-react";

const nav = {
  Servicios: [
    "Servicios Administrados",
    "Ciberseguridad",
    "Microsoft Azure",
    "Microsoft 365",
    "Infraestructura y Redes",
    "Backup y Continuidad",
  ],
  Metodologías: ["NIA — Assessment", "NIM — Mantenimiento", "IMT — Madurez"],
  Empresa: ["Sobre Nargtec", "Contacto", "Blog de TI"],
};

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-subtle">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">

          {/* ── Brand ── */}
          <div>
            <Image
              src="/logo1.png"
              alt="Nargtec"
              width={280}
              height={158}
              className="h-20 w-auto object-contain block mb-6"
              style={{ filter: "drop-shadow(0 0 14px rgba(255,255,255,0.3)) drop-shadow(0 0 2px rgba(255,255,255,0.45))" }}
            />

            <p className="text-secondary text-sm font-body leading-relaxed mb-4 max-w-xs">
              Tu socio tecnológico estratégico. Administramos, protegemos y
              optimizamos la infraestructura de empresas que no pueden permitirse
              el tiempo de inactividad.
            </p>

            <p className="font-mono text-xs text-teal tracking-widest uppercase mb-7">
              Administramos. Protegemos. Optimizamos.
            </p>

            {/* Social */}
            <div className="flex gap-2.5">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter,  label: "Twitter"  },
                { icon: Github,   label: "GitHub"   },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-subtle bg-card flex items-center justify-center text-dim hover:text-teal hover:border-teal/25 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav columns ── */}
          {Object.entries(nav).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-mono text-[10px] text-dim tracking-[0.2em] uppercase mb-5">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-secondary hover:text-primary text-sm font-body transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-dim tracking-widest uppercase">
            © {new Date().getFullYear()} Nargtec · Todos los derechos reservados
          </p>
          <div className="flex gap-6">
            {["Política de privacidad", "Términos de servicio"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-body text-xs text-dim hover:text-secondary transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
