'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Comments', 'PetId', Sequelize.INTEGER)
    queryInterface.addIndex('Comments', ['PetId'])
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Comments', 'PetId')
    queryInterface.removeIndex('Comments', 'PetId')
  }
};
