'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: [6,100]
        }
      },
    short_description: {
     type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6,200]
        }
    },
    description: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [20,500]
        }
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: false,
      },

    achievement: {
      type: DataTypes.STRING,
      allowNull: true
    },
    thumbnail: {
      type:DataTypes.STRING,
      allowNull: true,
    }
  }, {});
  News.associate = function(models) {
    // associations can be defined here
  };
  return News;
};