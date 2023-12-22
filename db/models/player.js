'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Result }) {
      this.hasMany(Result, { foreignKey: 'player_id' });
    }
  }
  Player.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      points: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Player',
    }
  );
  return Player;
};
