'use strict';
module.exports = (sequelize, DataTypes) => {
    const course_pre_req = sequelize.define('course_pre_req', {
        course_id: DataTypes.INTEGER,
    }, {});
    course_pre_req.associate = function(models) {
        // associations can be defined here
    };
    return course_pre_req;
};