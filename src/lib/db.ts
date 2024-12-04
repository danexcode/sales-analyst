// src/lib/db.ts
import { DataSource } from "typeorm";
import { VentasDetalle } from "../app/api/database/facturacion/entities/VentasDetalle";

let initialized = false;

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "DESKTOP-P7BPD8M",
    port: 1437,
    username: "sa",
    password: "Admin881008",
    database: "Control_Ventas",
    entities: [VentasDetalle],
    synchronize: true,
    logging: false,
    options: {
        trustServerCertificate: true,
        instanceName: "JCSOFTWARE",
        encrypt: false
    }
});

export async function initializeDB() {
    if (!initialized) {
        try {
            await AppDataSource.initialize();
            initialized = true;
            console.log("Data Source has been initialized!");
        } catch (error) {
            console.error("Error during Data Source initialization:", error);
            throw error;
        }
    }
    return AppDataSource;
}