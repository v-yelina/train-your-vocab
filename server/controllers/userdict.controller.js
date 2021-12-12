const db = require("../models");
const UserDictionary = db.userdictionary;

exports.findAll = (req, res) => {
  UserDictionary.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAllByUser = (req, res) => {
  const userId = req.params.userId;
  UserDictionary.findByPk(userId, { include: ["user", "word"] })
    .then((data) => {
      if (data) {
        return res.send(data);
      }
      res.status(404).send({ message: "Words not found" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.create = (req, res) => {
  if (!req.body.wordId) {
    res.status(400).send({ message: "WordId field can not be empty" });
    return;
  }

  const record = {
    userId: req.body.userId,
    wordId: req.body.wordId,
  };

  UserDictionary.create(record)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating new Record",
      });
    });
};
