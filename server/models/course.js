'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lecture_hours: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lab_hours: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    credit_hours:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Course.associate = function(models) {
    Course.hasMany(models.course_pre_req, {
      foreignKey: "course_id",
      as: "course_pre_req"
    });
    Course.hasMany(models.course_co_req, {
      foreignKey: "course_id",
      as: "course_co_req"
    });
    Course.belongsTo(models.Faculty, {
      foreignKey: "faculty_id",
      as: "Faculty"
    })
  };
  return Course;
};