"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pila_members", [
      {
        id: 1,
        signin_id: "gdwb3219",
        signin_password: "rheodnjs1",
        name: "고대원",
        position: "Super_Administrator",
        email: "gdwb3219@gmail.com",
        phoneNumber: "010-7748-7048",
        birthday: "1991/06/08",
      },
      {
        id: 2,
        signin_id: "22222",
        signin_password: "rheodnjs1",
        name: "허재성",
        position: "Super_Administrator",
        email: "gdwb3219@gmail.com",
        phoneNumber: "010-7748-7048",
        birthday: "1991/06/08",
      },
      {
        id: 3,
        signin_id: "33333",
        signin_password: "rheodnjs1",
        name: "이태섭",
        position: "Super_Administrator",
        email: "gdwb3219@gmail.com",
        phoneNumber: "010-7748-7048",
        birthday: "1991/06/08",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pila_members", null, {});
  },
};
