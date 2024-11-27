// config.js

//IPAll
//TCP Dynamic Ports 64044
//TCP Port

//instancia=JCSOFTWARE
//password=Admin881008
//usuario=sa
//servidor=127.0.0.1

//import type { config as MSSQLConfig } from "mssql";

export const f_config = {
    user: 'sa',
    password: 'Admin881008',
    server: '127.0.0.1',
    port: 1437,
    database: 'Control_Ventas',
    options: {
        database: "Control_Ventas",
        trustServerCertificate: true,
        instanceName: "JCSOFTWARE",
        encrypt: false
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}
