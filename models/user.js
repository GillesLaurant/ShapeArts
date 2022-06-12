"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Shape);
    }
  }
  User.init(
    {
      user_name: DataTypes.STRING,
      mail: DataTypes.STRING,
      password: DataTypes.STRING,
      counter_shapes: DataTypes.INTEGER,
      is_loggin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
