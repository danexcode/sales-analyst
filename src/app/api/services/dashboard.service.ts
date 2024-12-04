import { AppDataSource } from "../database/facturacion/connection";
import { VentasService } from "./ventas.service";
import { DashboardData } from "app/services/dashboard.fetch";

const ventasService = new VentasService();

export interface findAllDashboard {
  nVentasPorDia: {"fecha": Date, "total": number}[],
  facturacionPorDia: {"fecha": Date, "total": number}[],
  utilidadPorDia: {"fecha": Date, "Utilidad": number}[],
  ticketPromedioPorDia: {"fecha": Date, "Ticket_Medio": number}[],
  productosMasVendidos: {
    "Id_prod": number,
    "Descripcion": string,
    "Unidades_Vendidas": number
  }[],
}

const db = AppDataSource.instance.connection;

export class DashboardService {
  async findAll(temporality: string | null) {
    await db.connect();

    if (!temporality) {
      temporality = "Semana";
    }

    /*
            Con facturacion por dia puedes hacer:
                - Tarjeta de Facturacion
                - Grafica de Facturacion
        */
    const nVentasPorDia = await ventasService.nVentasPorDia(temporality);
    /*
            Con facturacion por dia puedes hacer:
                - Tarjeta de Facturacion
                - Grafica de Facturacion
        */
    const facturacionPorDia = await ventasService.facturacionPorDia(temporality);

    /*
            Con utilidad por dia puedes hacer:
                - Tarjeta de utilidad
                - Grafica de utilidad
        */
    const utilidadPorDia = await ventasService.utilidadPorDia(temporality);

    /*
            Con ticket Promedio por dia puedes hacer:
                - Tarjeta de Ticket Promedio
        */
    const ticketPromedioPorDia = await ventasService.ticketPromedioPorDia(temporality);

    const productosMasVendidos = await ventasService.productosMasVendidos(temporality);

    return {
      nVentasPorDia,
      facturacionPorDia,
      utilidadPorDia,
      ticketPromedioPorDia,
      productosMasVendidos,
    };
  }

  async getProcesedDashboardData(temporality: string | null): Promise<DashboardData> {
    if (!temporality) {
      temporality = "Semana";
    }
    const data: findAllDashboard = await this.findAll(temporality);

    const dashboardData: DashboardData = {
      sales: 0,
      revenue: 0,
      averageTicket: 0,
      profit: 0,
      topProducts: {
        labels: [],
        data: [],
      },
      chartData: {
        labels: [],
        revenue: [],
        profit: []
      }
    };


    dashboardData.sales = data.nVentasPorDia.reduce((acc, curr) => {
      console.log(curr.total);
      acc += curr.total;
      return acc;
    }, Number());


    dashboardData.revenue = data.facturacionPorDia.reduce((acc, curr) => {
      acc += curr.total;
      return acc;
    }, Number());

    dashboardData.averageTicket = data.ticketPromedioPorDia.reduce((acc, curr) => {
      acc += curr.Ticket_Medio;
      return acc;
    }, Number()) / data.ticketPromedioPorDia.length;

    dashboardData.profit = data.utilidadPorDia.reduce((acc, curr) => {
      acc += curr.Utilidad;
      return acc;
    }, Number());

    dashboardData.topProducts = {
      labels: data.productosMasVendidos.map((product) => product.Descripcion),
      data: data.productosMasVendidos.map((product) => product.Unidades_Vendidas),
    };

    console.log("-----------------------------------")
    console.log("------------Service----------------")
    console.log("-----------------------------------")
    console.log(dashboardData)
    return dashboardData;
  }
}
