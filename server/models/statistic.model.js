module.exports = (sequelize, Sequelize) => {
  const Statistic = sequelize.define("statistic", {
    userId: {
      type: Sequelize.INTEGER,
    },
    choose_one_count: {
      type: Sequelize.INTEGER,
    },
    enter_translation_count: {
      type: Sequelize.INTEGER,
    },
    build_word_count: {
      type: Sequelize.INTEGER,
    },
    learned_words_count: {
      type: Sequelize.INTEGER,
    },
    isActive: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  });

  return Statistic;
};
