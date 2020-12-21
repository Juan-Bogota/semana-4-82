'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('Articulos', 'imagen', {
      type: Sequelize.STRING,
      defaultValue: 'http://placeimg.com/640/480/tech',
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.addColumn('Articulos', 'imagen', {
      type: Sequelize.STRING,
      defaultValue: 'http://placeimg.com/640/480/tech',
      allowNull: false
    });
  }
};
