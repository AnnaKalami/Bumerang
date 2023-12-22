'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enemy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Player, Hero, Result}) {
      this.hasMany(Result, {foreignKey: 'enemy_id'})
    }
  }
  Enemy.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    enemy: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    victories: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    defeats: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Enemy',
  });
  return Enemy;
};