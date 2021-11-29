const db = require("../models");
const config = require("../config/auth.config");
const User = db.User;

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
  }).then((user) => {
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

    const token = jwt.signin({ id: user.id, role: user.role }, config.secret, {
      expiresIn: 86400,
    });

    res
      .send({
        ...user,
        acessToken: token,
      })
      .catch((err) => {
        res.status(500).send({ message });
      });
  });
};
