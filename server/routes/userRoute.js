const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Homepage Routes
router.get("/", userController.homepage);

module.exports = router;
