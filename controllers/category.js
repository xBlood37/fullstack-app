const Category = require("../models/Category");
const errorHendler = require("../utils/errorHandler");
const Position = require("../models/Position");

module.exports.getAll = async function (req, res) {
  try {
    const categories = await Category.find({
      user: req.user.id,
    });
    res.status(200).json(categories);
  } catch (error) {
    errorHendler(res, error);
  }
};

module.exports.getById = async function (req, res) {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    errorHendler(res, error);
  }
};

module.exports.remove = async function (req, res) {
  try {
    await Category.remove({
      _id: req.params.id,
    });
    await Position.remove({
      category: req.params.id,
    });
    res.status(200).json({
      message: "Категория удалена",
    });
  } catch (error) {
    errorHendler(res, error);
  }
};

module.exports.create = function (req, res) {};

module.exports.update = function (req, res) {};
