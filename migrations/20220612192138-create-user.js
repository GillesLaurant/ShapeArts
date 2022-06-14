"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          is: /^[A-Za-z0-9_-]{3,15}$/,
          isLowercase: true,
          notEmpty: true,
          len: [3, 15],
        },
      },
      mail: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          is: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          isEmail: true,
          isLowercase: true,
          notEmpty: true,
          len: [5, 50],
        },
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          is: /^[A-Za-z0-9_-]{4,15}$/,
          notEmpty: true,
          len: [4, 15],
        },
      },
      counter_shapes: {
        allowNull: false,
        defaultValues: 0,
        type: Sequelize.INTEGER,
        validate: {
          isInt: true,
        },
      },
      is_loggin: {
        defaultValue: true,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Users");
  },
};
