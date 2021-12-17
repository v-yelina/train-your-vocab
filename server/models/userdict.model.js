module.exports = (sequelize, Sequelize) => {
  const UserDictionary = sequelize.define("userdictionary", {
    userId: {
      type: Sequelize.INTEGER,
    },
    wordId: {
      type: Sequelize.INTEGER,
    },
    isActive: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  });

  return UserDictionary;
};
