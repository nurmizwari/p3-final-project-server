"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Assignments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      url: {
        type: Sequelize.STRING,
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
      CourseId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Courses",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      status: {
        type: Sequelize.STRING,
      },
      deadline: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Assignments");
  },
};
