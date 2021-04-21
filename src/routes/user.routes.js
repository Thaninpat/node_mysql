const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authorize = require("../middleware/authorize");

// Authen
router.post("/authenticate", userController.authenticate);

// Create a new employee
router.post("/register", userController.register);

// Retrieve all employees
router.get("/users", authorize(), userController.getAll);

// Retrieve a single employee with id
router.get("/users/:id", authorize(), userController.getById);

// Update a employee with id
router.put("/users/:id", authorize(), userController.update);

// Delete a employee with id
router.delete("/users/:id", authorize(), userController._delete);

module.exports = router;
