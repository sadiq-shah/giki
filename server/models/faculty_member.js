'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faculty_Member = sequelize.define('Faculty_Member', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_details: {
      type: DataTypes.STRING,
      allowNull: true
    },
    faculty_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    faculty_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Faculty_Member.associate = function(models) {
    // associations can be defined here
  };
  return Faculty_Member;
};