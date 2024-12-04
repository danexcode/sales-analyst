import { AppDataSource } from "../database/facturacion/connection";

const db = AppDataSource.instance.connection

export class VentasDetalleService {
    constructor() { }

    async findAll() {
        await db.connect();
        const response = await db.query('SELECT * FROM ventasdetalle;');
        return response.recordset;
    }

    async findOne(id: number) {
        await db.connect();
        const response = await db.query(`SELECT * FROM ventasdetalle WHERE id = ${id};`);
        return response.recordset;
    }

    findBySellId(id: number) {
        return `VentasDetalle ${id}`;
    }

    findByProductId(id: number) {
        return `VentasDetalle ${id}`;
    }


}