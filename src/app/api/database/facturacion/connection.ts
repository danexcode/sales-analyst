import sql from "mssql";
import { f_config } from "./config";

export class AppDataSource {
    private static _instance: AppDataSource;
    public connection: sql.ConnectionPool;
    private constructor() {
        this.connection = new sql.ConnectionPool(f_config);
        this.connection.connect().then(() => {
            console.log("Connected to database.");
        }).catch((err) => {
            console.error(err);
        });
    }

    public static get instance(): AppDataSource {
        return this._instance || (this._instance = new this());
    }
}
