const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
      defaultValue: "user",
    },
    isActive: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  });

  return User;
};
