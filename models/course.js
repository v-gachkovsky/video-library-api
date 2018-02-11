'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Course.associate = models => {
    Course.hasMany(models.Video);
  };

  return Course;
};