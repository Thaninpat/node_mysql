const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller');

// Retrieve all employees
router.get('/employee', employeeController.findAll);

// Create a new employee
router.post('/employee', employeeController.create);

// Retrieve a single employee with id
router.get('/employee/:id', employeeController.findById);

// Update a employee with id
router.put('/employee/:id', employeeController.update);

// Delete a employee with id
// router.delete('/:id', employeeController.delete);

module.exports = router