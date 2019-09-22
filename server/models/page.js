'use strict';
module.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define('Page', {
    name: {
      type: DataTypes.STRING,
      allowNull: String,
      unique: true
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: String,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT
    }
  }, {});
  Page.associate = function(models) {
    // associations can be defined here
    Page.belongsToMany(models.User,{
      foreignKey:'page_id',
      through:'page_permissions',
      as:'users'
    })
  };
  return Page;
};