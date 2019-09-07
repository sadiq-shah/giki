'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 1024]
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};