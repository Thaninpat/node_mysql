const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');

// Retrieve all employees
router.get('/users', userController.findAll);

// Create a new employee
router.post('/users', userController.create);

// Retrieve a single employee with id
router.get('/users/:id', userController.findById);

// Update a employee with id
router.put('/users/:id', userController.update);

// Delete a employee with id
router.delete('/users/:id', userController.delete);

module.exports = router