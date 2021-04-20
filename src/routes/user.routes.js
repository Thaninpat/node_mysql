const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');

// Retrieve all employees
router.get('/users', userController.getAll);

// Create a new employee
router.post('/users', userController.register);

// Retrieve a single employee with id
router.get('/users/:id', userController.getById);

// Update a employee with id
router.put('/users/:id', userController.update);

// Delete a employee with id
router.delete('/users/:id', userController._delete);

module.exports = router