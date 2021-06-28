"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EmployeesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT * FROM employee`, (err, results) => {
                if (err) {
                    res.json({ error: "hay un error list" + err });
                }
                else {
                    res.json(results);
                }
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query('SELECT * FROM employee WHERE id = ?', [id], (err, result) => {
                if (err) {
                    throw err;
                }
                else if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.json({
                        message: "Employee doesn't exist"
                    });
                }
                // res.status(404).json({message: "The game doesn't exist"})
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO employee set ?', [req.body], (err, results) => {
                if (err) {
                    throw err;
                }
                else {
                    res.json({
                        message: 'Game Saved'
                    });
                }
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query('DELETE FROM employee WHERE id = ?', [id], (err, result) => {
                if (err) {
                    throw err;
                }
                else if (result.length > 0) {
                    res.json({ message: 'the employee was deleted' });
                }
                else {
                    res.json({
                        message: "Employee doesn't exist"
                    });
                }
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query('UPDATE employee set ? WHERE id = ?', [req.body, id], (err, result) => {
                if (err) {
                    res.json({ error: "hay un error update" + err });
                }
                else if (result.length > 0) {
                    res.json({ message: 'the employee was updated' });
                }
                else {
                    res.json({
                        message: "Employee doesn't exist"
                    });
                }
            });
        });
    }
}
const employeesController = new EmployeesController();
exports.default = employeesController;
