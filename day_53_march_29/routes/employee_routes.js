const express = require('express');
const {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee_controller');

const employeeRouter = express.Router();

employeeRouter.get('/', getAllEmployees)
employeeRouter.get('/:id', getEmployeeById)
employeeRouter.post('/', addEmployee)
employeeRouter.patch('/:id', updateEmployee)
employeeRouter.delete('/:id', deleteEmployee)

module.exports = employeeRouter;