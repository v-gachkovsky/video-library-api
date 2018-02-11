const database = require('../database');
const db  = require('../models');

module.exports = {
  getVideos: (req, res) => {
    db.Video.findAll().then(videos => {
      res.json(videos);
    }).catch(error => res.json({ success: false, error }));
  },

  getCourses: (req, res) => {
    db.Course.findAll().then(courses => {
      res.json(courses);
    }).catch(error => res.json({ success: false, error }));
  }
};
