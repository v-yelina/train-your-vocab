const controller = require("../controllers/statistic.controller");

module.exports = (app) => {
  const router = require("express").Router();

  app.get("/api/v1/statistic", controller.findAll);

  app.get("/api/v1/statistic/:userId", controller.findAllByUser);

  app.post("/api/v1/statistic", controller.create);

  app.put("/api/v1/statistic/:userId", controller.update);

  app.use("/api/v1/statistic", router);
};
