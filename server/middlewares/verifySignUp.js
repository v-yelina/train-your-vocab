const { noExtendLeft } = require("sequelize/dist/lib/operators");
const db = require("../models");
const User = db.user;

const checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        return res.status(400).send({ message: "Faild! Email already in use" });
      }
      next();
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const verifySignUp = {
  checkDuplicateEmail,
};

module.exports = verifySignUp;
