import { Router } from 'express';
import employeesController from '../controllers/employeesController'

class EmployeesRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',employeesController.list);
        this.router.get('/:id',employeesController.getOne);
        this.router.post('/',employeesController.create);
        this.router.put('/:id',employeesController.update)
        this.router.delete('/:id',employeesController.delete)
        
    }
}

const employees = new EmployeesRoutes();
export default employees.router