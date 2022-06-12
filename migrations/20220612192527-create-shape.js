"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Shapes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: {
            tableName: "Users",
          },
        },
      },
      clothId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: {
            tableName: "Cloths",
          },
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pos_x: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      pos_y: {
        defaultValue: 0,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      size: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      rotation: {
        defaultValue: 0,
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      opacity: {
        defaultValue: 100,
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      color: {
        defaultValue: "#000",
        allowNull: true,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Shapes");
  },
};
