const express = require("express");
const conroller = require("../controllers/position");
const router = express.Router();
const passport = require("passport");

// localhost:5000/api/position/getByCategoryId
router.get(
  "/:categoryId",
  passport.authenticate("jwt", { session: false }),
  conroller.getByCategoryId
);

// localhost:5000/api/position/create
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  conroller.create
);

// localhost:5000/api/position/update
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  conroller.update
);

// localhost:5000/api/position/remove
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  conroller.remove
);

module.exports = router;
