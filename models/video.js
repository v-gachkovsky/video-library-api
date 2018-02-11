'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    videoCode: DataTypes.STRING
  });

  Video.associate = models => {
    Video.belongsTo(models.Course, {
      onDelete: "CASCADE",
      foreignKey: 'courseId'
    })
  };
  return Video;
};