'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define('Faculty', {
    name: {
      type: DataTypes.STRING,
      allowNull: String,
      validate: {
        len: [5,100]
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: String,
      validate: {
        len: [5,120]
      }
    },
    dean_id: {
      type: DataTypes.INTEGER,
    }
  }, {});
  Faculty.associate = function(models) {
    Faculty.hasMany(models.Faculty_Member, {
      foreignKey: "faculty_id",
      as: "faculty_members"
    });
    Faculty.hasMany(models.Faculty_Image, {
      foreignKey: "faculty_id",
      as: "faculty_images"
    })
  };
  return Faculty;
};