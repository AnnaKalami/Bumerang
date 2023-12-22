'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Player, Enemy, Result }) {
      this.hasMany(Result, { foreignKey: 'hero_id' });
    }
  }
  Hero.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      hero: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      victories: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      defeats: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Hero',
    }
  );
  return Hero;
};
