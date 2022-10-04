'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinalGrade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinalGrade.init({
    score: DataTypes.STRING,
    StudentId: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FinalGrade',
  });
  return FinalGrade;
};