module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'users',
      'email',
      {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
    );
  },

  down: async () => {},
};
