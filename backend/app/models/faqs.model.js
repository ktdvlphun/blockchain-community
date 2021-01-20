module.exports = (sequelize, Sequelize) => {
  const Faq = sequelize.define("faqs", {
    question: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    answer: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
  });

  return Faq;
};
