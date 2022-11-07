const express = require("express");
const controller = require("../controllers/order");
const router = express.Router();

// localhost:5000/api/order/getAll
router.get("/", controller.getAll);

// localhost:5000/api/order/create
router.post("/", controller.create);

module.exports = router;
