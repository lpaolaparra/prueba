"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeesController_1 = __importDefault(require("../controllers/employeesController"));
class EmployeesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', employeesController_1.default.list);
        this.router.get('/:id', employeesController_1.default.getOne);
        this.router.post('/', employeesController_1.default.create);
        this.router.put('/:id', employeesController_1.default.update);
        this.router.delete('/:id', employeesController_1.default.delete);
    }
}
const employees = new EmployeesRoutes();
exports.default = employees.router;
