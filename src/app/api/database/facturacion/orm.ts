/*import { ConnectionOptions, getConnectionManager, getRepository} from "typeorm"
import { VentasDetalle } from "./entities/VentasDetalle"

export async function StartApp() {
    try {
        const connectionManager = getConnectionManager();
        const connection = connectionManager.create({
            type: "mssql",
            host: "DESKTOP-P7BPD8M\\JCSOFTWARE",
            port: 1437,
            username: "sa",
            password: "Admin881008",
            database: "Control_Ventas",
            entities: [VentasDetalle],

            logging: "all",
            synchronize: true,
            options: {
                database: "Control_Ventas",
                trustServerCertificate: true,
                //instanceName: "JCSOFTWARE",
                encrypt: false
            },
            pool: {
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000
            }
        } as ConnectionOptions)

        console.log("Connecting to database...")
        await connection.connect();
        console.log("Connected!!!!!!")

        try {
            const repository = await getRepository(VentasDetalle);
            const sales = await repository.find();

            console.log("---------------------------")
            console.log(sales)

        } catch (error) {
            console.log(error)
        }

    } catch (error) {
        console.log(error)
    }
}*/

import "reflect-metadata"
import { DataSource } from "typeorm"
import { VentasDetalle } from "./entities/VentasDetalle"



// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap

export async function StartApp() {
    const AppDataSource = new DataSource({
        type: "mssql",
        host: "DESKTOP-P7BPD8M\\JCSOFTWARE",
        port: 1437,
        username: "sa",
        password: "Admin881008",
        database: "Control_Ventas",
        entities: [VentasDetalle],
        synchronize: true,
        logging: false,
        options: {
            trustServerCertificate: true,
            //instanceName: "JCSOFTWARE",
            encrypt: false
        }
    })

    try {
        await AppDataSource.initialize()
        console.log("TODO BIEN!!!!!!!!!!!!!!!!!!!!")
        // here you can start to work with your database
    } catch (error) {
        console.log(error)
    }
}
