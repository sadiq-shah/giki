'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    role_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {});
  Permission.associate = function(models) {
    Permission.belongsTo(models.Role,{
      foreignKey:'role_id',
      as:'Role'
    });
    
    
  };
  return Permission;
};