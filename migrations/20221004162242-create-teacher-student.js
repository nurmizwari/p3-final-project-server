"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TeacherStudents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      TeacherId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Teachers",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      StudentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Students",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
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
    await queryInterface.dropTable("TeacherStudents");
  },
};
