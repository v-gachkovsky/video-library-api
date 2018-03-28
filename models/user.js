'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: models => {
        User.hasMany(models.UsersCourses, {
          foreignKey: 'userId'
        });
      }
    }
  });
  return User;
};