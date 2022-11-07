const express = require("express");
const controller = require("../controllers/order");
const router = express.Router();
const passport = require("passport");

// localhost:5000/api/order/getAll
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAll
);

// localhost:5000/api/order/create
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.create
);

module.exports = router;
