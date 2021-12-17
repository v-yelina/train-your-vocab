const db = require("../models");
const Dictionary = db.dictionary;
const myvocab = require('../myvocab')

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
  if (!req.body.word && !req.body.translation) {
    return res.status(400).send({ message: "Word field can not be empty" });
  }

  Dictionary.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating new Word",
      });
    });
};

exports.fillData = (req, res) => {
    const result = myvocab.map(item => {return {word:item[0],
        transcription:item[1],
        translation:item[2]}})
    Dictionary.bulkCreate(result)
        .then(()=>{
            res.send({message: 'hurra!'})
        }).catch(err => {
        res.send({message: err.message})
    })
    // myvocab.forEach(item => {
    //     Dictionary.create({
    //         word:item[0],
    //             // transcription:item[1],
    //             translation:item[2]
    //     })
    //         .then(data=>{
    //             result.push(data)
    //         })
    //         .catch(err => {
    //             result.push(err.message)
    //         })
    // })
    // res.send(result);
}