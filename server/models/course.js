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
      type: DataTypes.STRING,
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
    // associations can be defined here
  };
  return Course;
};