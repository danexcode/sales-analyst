import { getTemporalityDate } from "app/utils/backend";
import { AppDataSource } from "../database/facturacion/connection";

const db = AppDataSource.instance.connection;

export class VentasService {
  async nVentasPorDia(temporality: string) {
    await db.connect();
    const { sDate: startDate, eDate: endDate } =
      getTemporalityDate(temporality);
    const response = await db.query(`
                SELECT
                    fecha,
                    COUNT(pagado) AS total
                FROM ventas
                WHERE fecha BETWEEN '${startDate}' AND '${endDate}'
                GROUP BY fecha
                ORDER BY fecha DESC;
            `);
    return response.recordset;
  }

  async facturacionPorDia(temporality: string) {
    await db.connect();
    const { sDate: startDate, eDate: endDate } =
      getTemporalityDate(temporality);
    const response = await db.query(`
                  SELECT
                    SUM(total / 100) as total,
                    fecha
                  FROM ventas
                  WHERE fecha BETWEEN '${startDate}' AND '${endDate}'
                  GROUP BY fecha
                  ORDER BY fecha DESC;
              `);
    return response.recordset;
  }

  async utilidadPorDia(temporality: string) {
    await db.connect();
    const { sDate: startDate, eDate: endDate } =
      getTemporalityDate(temporality);
    const response = await db.query(`
                SELECT
                    Utilidad_x_Dia.fecha,
                    SUM(Utilidad_x_Dia.Utilidad) AS Utilidad
                FROM
                (SELECT
                    p.Precio,
                    p.Costo,
                    Ventas_x_Producto.Codigo_Producto,
                    Ventas_x_Producto.fecha,
                    Ventas_x_Producto.Unidades_Vendidas,
                    ((p.Precio - p.Costo) * Ventas_x_Producto.Unidades_Vendidas) AS Utilidad
                FROM cat_productos AS p
                INNER JOIN
                (SELECT
                    vd.codigo AS Codigo_Producto,
                    SUM(vd.cantidad) AS Unidades_Vendidas,
                    vd.fecha
                FROM ventasdetalle AS vd
                INNER JOIN cat_productos as p
                ON vd.codigo = p.Id_prod
                GROUP BY vd.codigo, vd.fecha) AS Ventas_x_Producto
                ON Ventas_x_Producto.Codigo_Producto = p.Id_prod) AS Utilidad_x_Dia
                WHERE fecha BETWEEN '${startDate}' AND '${endDate}'
                GROUP BY fecha
                ORDER BY fecha DESC;
            `);
    return response.recordset;
  }

  async ticketPromedioPorDia(temporality: string) {
    await db.connect();
    const { sDate: startDate, eDate: endDate } =
      getTemporalityDate(temporality);
    const response = await db.query(`
                SELECT
                    fecha,
                    AVG(total/100) AS Ticket_Medio
                FROM ventas
                WHERE fecha BETWEEN '${startDate}' AND '${endDate}'
                GROUP BY fecha
                ORDER BY fecha DESC;
            `);
    return response.recordset;
  }

  async productosMasVendidos(temporality: string) {
    await db.connect();
    const { sDate: startDate, eDate: endDate } =
      getTemporalityDate(temporality);
    const response = await db.query(`
                SELECT
                    TOP 3
                    p.Id_prod,
                    p.Descripcion,
                    SUM(vd.cantidad) AS Unidades_Vendidas
                FROM ventasdetalle AS vd
                INNER JOIN cat_productos AS p
                ON vd.codigo = p.Id_prod
                WHERE vd.fecha BETWEEN '${startDate}' AND '${endDate}'
                GROUP BY p.Id_prod, p.Descripcion
                ORDER BY Unidades_Vendidas DESC;
            `);
    return response.recordset;
  }

  /* async productosMasVendidosPeriodos() {
        await db.connect();

        const temps: string[] = ["Semana", "Mes", "Actual"];
        const data = {};

        for (const temp of temps) {
            const { sDate: startDate, eDate: endDate } = getTemporalityDate(temp);

            const response = await db
                .query(`
                    SELECT
                        TOP 3
                        p.Id_prod,
                        p.Descripcion,
                        SUM(vd.cantidad) AS Unidades_Vendidas
                    FROM ventasdetalle AS vd
                    INNER JOIN cat_productos AS p
                    ON vd.codigo = p.Id_prod
                    WHERE vd.fecha BETWEEN '${startDate}' AND '${endDate}'
                    GROUP BY p.Id_prod, p.Descripcion
                    ORDER BY Unidades_Vendidas DESC;
                `);
            data[temp] = response.recordset;
            console.log(data)
        }
        return data;
    } */

  async findAll() {
    await db.connect();
    const response = await db.query("SELECT * FROM ventas;");
    return response.recordset;
  }

  findById(id: number) {
    return `Venta con id ${id}`;
  }

  async findByDate(date: Date) {
    await db.connect();
    const response = await db.query(
      `SELECT * FROM ventas WHERE fecha = '${date}';`
    );
    return response.recordset;
  }

  findByDateRange(start: Date, end: Date) {
    return `Venta con fecha ${start} y ${end}`;
  }

  findByClient(client: string) {
    return `Venta con cliente ${client}`;
  }
}
