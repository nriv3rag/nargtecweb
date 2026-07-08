import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nargtec.com"),
  title: "Nargtec | Servicios Administrados de TI · MSP · Infraestructura · Ciberseguridad",
  description:
    "Nargtec administra, protege y optimiza la infraestructura tecnológica de empresas que no pueden permitirse tiempo de inactividad. MSP, Ciberseguridad, Azure, M365.",
  keywords: [
    "MSP República Dominicana",
    "Servicios Administrados TI",
    "Ciberseguridad empresarial",
    "Azure partner",
    "Microsoft 365",
    "Infraestructura tecnológica",
    "Nargtec",
  ],
  openGraph: {
    title: "Nargtec | Servicios Administrados de TI",
    description: "Administramos. Protegemos. Optimizamos. Tu socio tecnológico estratégico.",
    type: "website",
    locale: "es_DO",
    siteName: "Nargtec",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nargtec | Servicios Administrados de TI",
    description: "Administramos. Protegemos. Optimizamos. Tu socio tecnológico estratégico.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
