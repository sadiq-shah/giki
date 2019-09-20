'use strict';
module.exports = (sequelize, DataTypes) => {
    const course_pre_req = sequelize.define('course_pre_req', {
        course_id: DataTypes.INTEGER,
        course_prereq_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});
    course_pre_req.associate = function(models) {
        // associations can be defined here
        course_pre_req.belongsTo(models.Course, {
            foreignKey: "course_id",
            as: "course_pre_req"
        })
    };
    return course_pre_req;
};