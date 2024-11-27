// crea una ruta en next14 tipo GET que devuelva {message: "hello world"}
import { NextResponse } from "next/server";
import { getSales } from "../../database/facturacion/connection"

export async function GET() {
    await getSales();
    console.log("DANEXCODE");
    return NextResponse.json({ message: "hello world" });
}
