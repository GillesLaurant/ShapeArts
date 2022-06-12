"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shape extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Shape.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
      models.Shape.belongsTo(models.Cloth, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Shape.init(
    {
      name: DataTypes.STRING,
      pos_x: DataTypes.INTEGER,
      pos_y: DataTypes.INTEGER,
      size: DataTypes.INTEGER,
      rotation: DataTypes.INTEGER,
      opacity: DataTypes.INTEGER,
      color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Shape",
    }
  );
  return Shape;
};
