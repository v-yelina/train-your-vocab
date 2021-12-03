const db = require("../models");
const User = db.user;

exports.findAll = (req, res) => {
  User.findAll({
    attributes: {
      exclude: ["password"],
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findByPk(id, {
    attributes: {
      exclude: ["password"],
    },
  })
    .then((data) => {
      if (data) {
        return res.send(data);
      }
      res.status(404).send({ message: "User not found" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
