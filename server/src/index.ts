import express,{ Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Routes from './routes/Routes';
import EmployeesRoutes from './routes/employeesRoutes';

class Server{
    // clase que inicia el server
    public app: Application;

    constructor(){
        // se ejecutara apenas inciamos la clase
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))
    }

    routes(): void{
        this.app.use('/',Routes);
        this.app.use('/api/employees',EmployeesRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log(`Server on port`, this.app.get('port'))
        });
    }
}

const server = new Server();
server.start();