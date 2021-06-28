//Colocamos la conexion

// import mysql,{createPool} from 'promise-mysql';
 import keys from './keys';

// // const db = mysql.createPool(keys.database);


// export async function connect(){

//     const db = mysql.createPool(keys.database);
//     console.log('DB is connected');
//     return db;
// }

import {createConnection} from "mysql"

const conn = createConnection(keys.database)

conn.connect((err)=>{
    
    if(err){
        console.log('Error de conexon' + err);
        return
    }
    console.log('Conectado a la BD Mysql')
});

export default conn;
