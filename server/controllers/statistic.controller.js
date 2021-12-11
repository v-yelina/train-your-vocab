const db = require("../models");
const Statistic = db.statistic;

exports.findAll = (req, res) => {
  Statistic.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAllByUser = (req, res) => {
  const userId = req.params.userId;
  Statistic.findByPk(userId, {
    include: ["user"],
  })
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
  if (!req.body.userId) {
    res.status(400).send({ message: "Record field can not be empty" });
    return;
  }

  const record = {
    userId: req.body.userId,
    choose_one_count: req.body.choose_one_count,
    enter_translation_count: req.body.enter_translation_count,
    build_word_count: req.body.build_word_count,
    learned_words_count: req.body.learned_words_count,
  };

  Statistic.create(record)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating new Record",
      });
    });
};
