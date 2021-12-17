const controller = require("../controllers/dict.controller");

module.exports = (app) => {
  const router = require("express").Router();

  app.get("/api/v1/dictionary", controller.findAll);

  // app.get("/api/v1/dictionary/filldata", controller.fillData)

  app.get("/api/v1/dictionary/:id", controller.findOne);

  app.post("/api/v1/dictionary", controller.create);

  app.use("/api/v1/dictionary", router);
};
