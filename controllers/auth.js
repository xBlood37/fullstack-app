const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const errorHandler = require("../utils/errorHandler");

const User = require("../models/User");

// login
module.exports.login = async function (req, res) {
  const candidate = await User.findOne({
    email: req.body.email,
  });

  // password check if user exists
  if (candidate) {
    const passwordResult = bcrypt.compareSync(
      req.body.password,
      candidate.password
    );
    if (passwordResult) {
      // generate token
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id,
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      );

      // return this token
      res.status(200).json({
        token: `Bearer ${token}`,
      });
    } else {
      // throw new error
      res.status(401).json({
        message: "Пароли не совподают",
      });
    }
  } else {
    // otherwise we throw an error
    res.status(404).json({
      message: "Пользователь не найден",
    });
  }
};

// register
module.exports.register = async function (req, res) {
  // email password
  const candidate = await User.findOne({
    email: req.body.email,
  });

  //registration condition
  if (candidate) {
    // if there is a user then throw an error
    // we throw out a message with code 409
    res.status(409).json({
      message: "Такой email уже существует",
    });
  } else {
    // create a new user
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      // two required fields
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    });
    // save it to database
    // try catch is required
    try {
      await user.save();
      res.status(201).json({
        user,
        message: "Пользователь создан",
      });
    } catch (error) {
      // throwing an error
      errorHandler(res, error);
    }
  }
};
