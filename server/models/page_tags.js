'use strict';
module.exports = (sequelize, DataTypes) => {
  const Page_Tags = sequelize.define('Page_Tags', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    page_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Page_Tags.associate = function(models) {
    Page_Tags.belongsTo(models.Page, {
      foreignKey: "page_id",
      as: "page_tags"
    })
  };
  return Page_Tags;
};