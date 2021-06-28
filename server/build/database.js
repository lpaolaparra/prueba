"use strict";
//Colocamos la conexion
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mysql,{createPool} from 'promise-mysql';
const keys_1 = __importDefault(require("./keys"));
// // const db = mysql.createPool(keys.database);
// export async function connect(){
//     const db = mysql.createPool(keys.database);
//     console.log('DB is connected');
//     return db;
// }
const mysql_1 = require("mysql");
const conn = mysql_1.createConnection(keys_1.default.database);
conn.connect((err) => {
    if (err) {
        console.log('Error de conexon' + err);
        return;
    }
    console.log('Conectado a la BD Mysql');
});
exports.default = conn;
