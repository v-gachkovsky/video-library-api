'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersCourses = sequelize.define('UsersCourses', {
    courseId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: models => {
        UsersCourses.belongsTo(models.User);
        UsersCourses.belongsTo(models.Course);
      }
    }
  });
  return UsersCourses;
};