'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    heading: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5,100]
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    page_tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};