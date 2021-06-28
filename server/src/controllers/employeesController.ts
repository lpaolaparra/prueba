import { Request, Response } from 'express';
import conn from '../database';


class EmployeesController {

    public async list(req: Request, res: Response) {

        await conn.query(`SELECT * FROM employee`, (err, results) => {
            if (err) {
                res.json({ error: "hay un error list" + err })
            } else {
                res.json(results)
            }
        })

    }
    public async getOne(req: Request, res: Response) {
        const id = req.params.id;

        await conn.query('SELECT * FROM employee WHERE id = ?', [id], (err, result) => {
            if (err) {
                throw err
            } else if (result.length > 0) {
                res.json(result)
            } else {
                res.json({
                    message: "Employee doesn't exist"
                })
            }
            // res.status(404).json({message: "The game doesn't exist"})
        })
    }

    public async create(req: Request, res: Response) {

        await conn.query('INSERT INTO employee set ?', [req.body], (err, results) => {
            if (err) {
                throw err
            } else {
                res.json({
                    message: 'Game Saved'
                })
            }
        })


    }

    public async delete(req: Request, res: Response) {

        const id = req.params.id;

        await conn.query('DELETE FROM employee WHERE id = ?', [id], (err, result) => {

            if (err) {
                throw err
            } else if (result.length > 0) {
                res.json({ message: 'the employee was deleted' })
            } else {
                res.json({
                    message: "Employee doesn't exist"
                })
            }


        })

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;

        await conn.query('UPDATE employee set ? WHERE id = ?', [req.body, id], (err, result) => {

            if (err) {
                res.json({ error: "hay un error update" + err })
            } else if (result.length > 0) {
                res.json({ message: 'the employee was updated' })
            } else {
                res.json({
                    message: "Employee doesn't exist"
                })
            }


        })
    }
}

const employeesController = new EmployeesController();
export default employeesController;