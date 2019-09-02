'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faculty_Image = sequelize.define('Faculty_Image', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    faculty_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Faculty_Image.associate = function(models) {
    Faculty_Image.belongsTo(models.Faculty, {
      foreignKey: "faculty_id"
    })
  };
  return Faculty_Image;
};