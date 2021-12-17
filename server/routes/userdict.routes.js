const controller = require("../controllers/userdict.controller");

module.exports = (app) => {
  const router = require("express").Router();

  app.get("/api/v1/userdictionary", controller.findAll);

  app.get("/api/v1/userdictionary/:userId", controller.findAllByUser);

  app.post("/api/v1/userdictionary", controller.create);

  app.use("/api/v1/userdictionary", router);
};
