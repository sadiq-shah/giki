'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {});
  Role.associate = function(models) {
    Role.hasMany(models.Permission, {
      foreignKey: 'role_id',
      
    });
    
  };
  return Role;
};