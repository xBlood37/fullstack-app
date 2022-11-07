const express = require("express");
const conroller = require("../controllers/category");
const router = express.Router();
const passport = require("passport");

// localhost:5000/api/category/getAll
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  conroller.getAll
);

// localhost:5000/api/category/getById
router.get("/:id", conroller.getById);

// localhost:5000/api/category/remove
router.delete("/:id", conroller.remove);

// localhost:5000/api/category/create
router.post("/", conroller.create);

// localhost:5000/api/category/update
router.patch("/:id", conroller.update);

module.exports = router;
