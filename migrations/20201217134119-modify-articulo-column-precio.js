'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('Articulos', 'precio', 'precio_venta');
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('Articulos', 'precio', 'precio_venta');
  }
};
