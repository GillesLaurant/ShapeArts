"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cloth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Cloth.hasMany(models.Shape);
    }
  }
  Cloth.init(
    {
      total_shapes: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cloth",
    }
  );
  return Cloth;
};
