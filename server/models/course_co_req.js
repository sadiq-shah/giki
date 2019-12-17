'use strict';
module.exports = (sequelize, DataTypes) => {
  const course_co_req = sequelize.define('course_co_req', {
    course_id: DataTypes.INTEGER,
    course_coreq_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  course_co_req.associate = function(models) {
    // associations can be defined here
    course_co_req.belongsTo(models.Course, {
      foreignKey: "course_id",
      as: "Course"
    })
  };
  return course_co_req;
};