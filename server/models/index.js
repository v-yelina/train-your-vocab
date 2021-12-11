const config = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  port: config.PORT,
  dialect: config.dialect,
  optionsAliases: false,
  pool: config.pool,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.dictionary = require("./dict.model")(sequelize, Sequelize);
db.userdictionary = require("./userdict.model")(sequelize, Sequelize);
db.statistic = require("./statistic.model")(sequelize, Sequelize);

db.user.hasOne(db.statistic, { as: "statistic", foreignKey: "userId" });
db.statistic.belongsTo(db.user, { as: "user", foreignKey: "userId" });

db.user.hasMany(db.userdictionary, { as: "dict", foreignKey: "userId" });
db.userdictionary.belongsTo(db.user, { as: "user", foreignKey: "userId" });
db.userdictionary.belongsTo(db.dictionary, {
  as: "word",
  foreignKey: "wordId",
});

module.exports = db;
