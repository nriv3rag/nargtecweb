import { NextResponse } from "next/server";
export async function POST() {
  return NextResponse.json({ error: "El formulario de correo ya no está disponible. Contáctanos por teléfono." }, { status: 410 });
}
