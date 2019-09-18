'use strict';
module.exports = (sequelize, DataTypes) => {
  const course_co_req = sequelize.define('course_co_req', {
    course_id: DataTypes.INTEGER
  }, {});
  course_co_req.associate = function(models) {
    // associations can be defined here
  };
  return course_co_req;
};