"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pila_member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pila -
    member.init(
      {
        signin_id: DataTypes.STRING,
        signin_password: DataTypes.STRING,
        name: DataTypes.STRING,
        position: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        birthday: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "Pila-member",
      }
    );
  return Pila_member;
};
