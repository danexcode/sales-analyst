import sql from "mssql";
import { f_config } from "./config";

export async function getSales() {
    console.log("-----------------GET SALES ---------------------")
    try {
        console.log("Connecting to database...");
        await sql.connect(f_config);
        console.log("Connected to database.");
        const result = await sql.query('SELECT * FROM ventasdetalle;');
        console.log("Query executed.");
        console.log(result.recordset);
    } catch (err) {
        console.error(err);
    }
}

getSales()