const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Statistic = db.statistic;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    role: req.body.role,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
        Statistic.create({
            userId: user.id,
            choose_one_count: 0,
            enter_translation_count: 0,
            build_word_count: 0,
            learned_words_count: 0,
        })
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Password is invalid" });
      }

      const token = jwt.sign(
        { userId: user.id, role: user.role },
        config.secret,
        {
          expiresIn: 86400,
        }
      );

      res.send({
        user: user.dataValues,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message });
    });
};
