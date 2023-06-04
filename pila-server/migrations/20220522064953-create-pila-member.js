"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pila_members", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      signin_id: {
        type: Sequelize.STRING,
      },
      signin_password: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      position: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pila_members");
  },
};
