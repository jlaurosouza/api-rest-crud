'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      model_name: {
        type: Sequelize.STRING
      },
      current_km:{
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      soft: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cars');
  }
};