const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-oauth-token, Origin, Content-Type, Access"
    );
    next();
  });

  app.get("./api/v1/users", [authJwt.verifyToken], controller.findAll);

  app.get("./api/v1/users/:id", [authJwt.verifyToken], controller.findOne);
};
