'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6,200]
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull:false
    },
    start_date: {
      type:DataTypes.DATE,
      allowNull:true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    thumbnail: {
      type:DataTypes.STRING,
      allowNull: true,
    }
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};