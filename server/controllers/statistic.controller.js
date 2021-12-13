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
  Statistic.findOne({ where: { userId: userId } }, {
    include: ["user"],
  })
    .then((data) => {
      if (data) {
        return res.send(data);
      }
      res.status(404).send({ message: "Statistic not found" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.create = (req, res) => {
  if (!req.body.userId) {
    res.status(400).send({ message: "UserId field can not be empty" });
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

exports.update = (req, res) => {
  const userId = req.params.userId;

  Statistic.update(req.body, {
    where: { userId: userId },
  })
      .then((data) => {
        if (data == 1) {
          Statistic.findByPk(userId)
              .then((data) => {
                res.send(data);
              })
              .catch((err) => {
                res.status(500).send({ message: err.message });
              });
        } else {
          res.status(400).send({
            message: "Cannot update statistic with userId=" + userId,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while updating",
        });
      });
};

