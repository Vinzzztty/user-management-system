const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Homepage Routes
router.get("/", userController.homepage);

// ADD User Form Routes
router.get("/add", userController.addUser);

// ADD User Routes method POST
router.post("/add", userController.postUser);

module.exports = router;
