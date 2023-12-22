'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Player, Enemy, Hero }) {
      this.belongsTo(Player, { foreignKey: 'player_id' });
      this.belongsTo(Hero, { foreignKey: 'hero_id' });
      this.belongsTo(Enemy, { foreignKey: 'enemy_id' });
    }
  }
  Result.init(
    {
      enemy_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Enemy',
          key: 'id',
        },
      },
      player_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Player',
          key: 'id',
        },
      },
      hero_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Hero',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Result',
    },
  );
  return Result;
};
