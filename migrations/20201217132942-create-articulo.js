'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Articulos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      precio_venta: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      stock: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // User belongsTo Company 1:1
          model: 'Categoria',
          key: 'id'
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Articulos');
  }
};