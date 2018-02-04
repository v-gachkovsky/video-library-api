const process = require('process');

module.exports = {
  development: {
    hostname: 'localhost',
    database: 'video-library-development',
    username: process.env.VIDEO_LIBRARY_DATABASE_USERNAME,
    password: process.env.VIDEO_LIBRARY_DATABASE_PASSWORD
  },

  testing: {
    hostname: 'localhost',
    database: 'video-library-testing',
    username: process.env.VIDEO_LIBRARY_DATABASE_USERNAME,
    password: process.env.VIDEO_LIBRARY_DATABASE_PASSWORD
  },

  staging: {
    hostname: 'localhost',
    database: 'video-library-staging',
    username: process.env.VIDEO_LIBRARY_DATABASE_USERNAME,
    password: process.env.VIDEO_LIBRARY_DATABASE_PASSWORD
  },

  production: {
    hostname: 'localhost',
    database: 'video-library-production',
    username: process.env.VIDEO_LIBRARY_DATABASE_USERNAME,
    password: process.env.VIDEO_LIBRARY_DATABASE_PASSWORD
  },

  dialect: 'postgres'
};
