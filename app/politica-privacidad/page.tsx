import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidad | Nargtec",
  description: "Cómo Nargtec recopila, usa y protege la información que nos compartes.",
};

const sections = [
  {
    title: "1. Quiénes somos",
    body: `Nargtec ("nosotros") es un proveedor de Servicios Administrados de TI (MSP) con
    operación en República Dominicana. Esta política explica qué información recopilamos
    a través de nargtec.com, para qué la usamos y qué derechos tienes sobre ella.`,
  },
  {
    title: "2. Qué información recopilamos",
    body: `Cuando completas el formulario de contacto o solicitas un NIA (Nargtec
    Infrastructure Assessment), recopilamos: nombre, correo electrónico, empresa, teléfono
    (opcional) y el mensaje que nos escribes. No recopilamos datos de pago ni información
    sensible a través de este sitio.`,
  },
  {
    title: "3. Para qué usamos tu información",
    body: `Usamos estos datos únicamente para responder tu solicitud, coordinar la
    evaluación o servicio que pediste, y darte seguimiento comercial relacionado. No
    vendemos ni compartimos tu información con terceros para fines de marketing ajenos a
    Nargtec.`,
  },
  {
    title: "4. Cómo se procesa y almacena",
    body: `El formulario de contacto se envía mediante un proveedor externo de entrega de
    correo (Resend) únicamente para hacer llegar tu mensaje a nuestro equipo — no lo usamos
    para enviarte correos automáticos ni boletines sin tu consentimiento. Tu información se
    conserva mientras exista una relación comercial o de seguimiento activa.`,
  },
  {
    title: "5. Cookies",
    body: `Actualmente nargtec.com no utiliza cookies de rastreo ni herramientas de
    analítica de terceros. Si en el futuro incorporamos analítica (por ejemplo, para
    entender qué páginas visitan más nuestros usuarios), actualizaremos esta política y,
    de ser necesario, solicitaremos tu consentimiento.`,
  },
  {
    title: "6. Tus derechos",
    body: `De acuerdo con la Ley 172-13 sobre Protección Integral de Datos Personales de
    República Dominicana, puedes solicitar acceso, corrección o eliminación de tus datos en
    cualquier momento escribiéndonos a info@nargtec.com.`,
  },
  {
    title: "7. Contacto",
    body: `Si tienes preguntas sobre esta política o sobre cómo manejamos tu información,
    escríbenos a info@nargtec.com o llámanos al +1 (829) 261-1010.`,
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-void">
      <Navbar />
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <div className="section-label mb-5">Legal</div>
        <h1 className="font-heading text-display-md text-primary mb-4">
          Política de Privacidad
        </h1>
        <p className="text-dim text-xs font-mono mb-14">Última actualización: julio 2026</p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-heading font-bold text-primary text-lg mb-3">{s.title}</h2>
              <p className="text-secondary text-sm leading-relaxed font-body whitespace-pre-line">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
