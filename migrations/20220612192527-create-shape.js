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
        defaultValue: "round",
        type: Sequelize.ENUM("round", "square", "triangle", "star"),
        validate: {
          isAlpha: true,
          isLowercase: true,
          notEmpty: true,
        },
      },
      pos_x: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
        validate: {
          isNumeric: true,
          notNull: true,
          min: -20,
          max: 903,
          len: [1, 3],
        },
      },
      pos_y: {
        defaultValue: 0,
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          isNumeric: true,
          notNull: true,
          min: -20,
          max: 708,
          len: [1, 3],
        },
      },
      size: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          isDecimal: true,
          notNull: true,
          min: 1.1,
          max: 1.7,
        },
      },
      rotation: {
        defaultValue: 0,
        allowNull: true,
        type: Sequelize.INTEGER,
        validate: {
          isNumeric: true,
          min: -720,
          max: 720,
          len: [1, 3],
        },
      },
      rotation_x: {
        defaultValue: 0,
        allowNull: true,
        type: Sequelize.INTEGER,
        validate: {
          isNumeric: true,
          min: -720,
          max: 720,
          len: [1, 3],
        },
      },
      rotation_y: {
        defaultValue: 0,
        allowNull: true,
        type: Sequelize.INTEGER,
        validate: {
          isNumeric: true,
          min: -720,
          max: 720,
          len: [1, 3],
        },
      },
      color_primary: {
        defaultValue: "#164d80",
        allowNull: true,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      color_secondary: {
        defaultValue: "#164d80",
        allowNull: true,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      primary_opacity: {
        defaultValue: 100,
        allowNull: true,
        type: Sequelize.FLOAT,
        validate: {
          isNumeric: true,
          min: 0,
          max: 100,
          len: [1, 3],
        },
      },
      secondary_opacity: {
        defaultValue: 100,
        allowNull: true,
        type: Sequelize.FLOAT,
        validate: {
          isNumeric: true,
          min: 0,
          max: 100,
          len: [1, 3],
        },
      },
      gradient_orientation: {
        defaultValue: 0,
        allowNull: true,
        type: Sequelize.INTEGER,
        validate: {
          isNumeric: true,
          min: 0,
          max: 360,
          len: [1, 3],
        },
      },
      gradient_rayon: {
        defaultValue: 1,
        allowNull: true,
        type: Sequelize.FLOAT,
        validate: {
          isNumeric: true,
          min: 0,
          max: 1,
        },
      },
      gradient_selector: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN,
      },
      gradient_linear: {
        allowNull: false,
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
    await queryInterface.dropTable("Shapes");
  },
};
