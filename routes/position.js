const express = require("express");
const conroller = require("../controllers/position");
const router = express.Router();

// localhost:5000/api/position/getByCategoryId
router.get("/:categoryId", conroller.getByCategoryId);

// localhost:5000/api/position/create
router.post("/", conroller.create);

// localhost:5000/api/position/update
router.patch("/:id", conroller.update);

// localhost:5000/api/position/remove
router.delete("/:id", conroller.remove);

module.exports = router;
