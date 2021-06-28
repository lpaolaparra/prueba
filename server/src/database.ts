//Colocamos la conexion

// import mysql,{createPool} from 'promise-mysql';
 import keys from './keys';
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
