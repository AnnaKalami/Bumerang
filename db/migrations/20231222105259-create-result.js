'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      enemy_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Enemy',
          key: 'id',
        },
      },
      player_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Player',
          key: 'id',
        },
      },
      hero_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Hero',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Results');
  },
};
