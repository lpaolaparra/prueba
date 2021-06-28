import {Request, Response} from 'express';

class IndexController{
    public index(req: Request,res: Response){
        res.json({
            texto: 'API is /api/employees'
        })
    }
}

export const indexController = new IndexController();