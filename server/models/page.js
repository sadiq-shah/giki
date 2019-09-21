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
    Page.hasMany(models.Page_Tags, {
      foreignKey: "page_id",
      as: "page_tags"
    });
  };
  return Page;
};