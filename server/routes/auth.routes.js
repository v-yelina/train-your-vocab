const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-oauth-token, Origin, Content-Type, Access"
    );
    next();
  });

  app.post(
    "/api/v1/auth/signup",
    [verifySignUp.checkDuplicateEmail],
    controller.signup
  );

  app.post("/api/v1/auth/signin", controller.signin);
};
