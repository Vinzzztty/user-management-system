const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Homepage Routes
router.get("/", userController.homepage);

// ADD User Form Routes
router.get("/add", userController.addUser);

// POST Add User Routes method POST
router.post("/add", userController.postUser);

// GET User User by _id
router.get("/view/:id", userController.userById);

module.exports = router;
