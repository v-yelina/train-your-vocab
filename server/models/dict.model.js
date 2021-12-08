module.exports = (sequelize, Sequelize) => {
  const Dictionary = sequelize.define("dictionary", {
    word: {
      type: Sequelize.STRING,
    },
    transcription: {
      type: Sequelize.STRING,
    },
    translation: {
      type: Sequelize.STRING,
    },
    isActive: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  });

  return Dictionary;
};
