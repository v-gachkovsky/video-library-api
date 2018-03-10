'use strict';
const passport = require('passport');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: models => {
        User.belongsToMany(models.Course, { through: 'CoursesUsers' });
      }
    }
  });
  return User;
};