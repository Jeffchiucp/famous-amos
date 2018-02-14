'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: {
          notNull: true
        }
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          notNull: true
        }
      },
      breed: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      favoriteFood: {
        type: Sequelize.STRING
      },
      picUrl: {
        type: Sequelize.STRING
      },
      picUrlSq: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pets')
  }
};
