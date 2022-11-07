const express = require("express");
const conroller = require("../controllers/auth");
const router = express.Router();

// localhost:5000/api/auth/login
router.post("/login", conroller.login);

// localhost:5000/api/auth/register
router.post("/register", conroller.register);

module.exports = router;
