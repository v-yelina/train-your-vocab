const db = require("../models");
const Dictionary = db.dictionary;

exports.findAll = (req, res) => {
  Dictionary.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Dictionary.findByPk(id)
    .then((data) => {
      if (data) {
        return res.send(data);
      }
      res.status(404).send({ message: "Dictionary not found" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.create = (req, res) => {
  if (!req.body.word) {
    res.status(400).send({ message: "Word field can not be empty" });
    return;
  }

  const word = {
    word: req.body.word,
    transcription: req.body.transcription,
    translate: req.body.translate,
  };

  Dictionary.create(word)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating new Word",
      });
    });
};
