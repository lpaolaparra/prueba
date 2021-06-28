import { Router } from 'express';
import {indexController} from '../controllers/indexController';

class Routes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', indexController.index);
    }
}

const indexRoutes = new Routes();
export default indexRoutes.router