const express = require("express");
const conroller = require("../controllers/analytics");
const router = express.Router();

// localhost:5000/api/analytics/overview
router.get("/overview", conroller.overview);

// localhost:5000/api/analytics/analytics
router.get("/analytics", conroller.analytics);

module.exports = router;
