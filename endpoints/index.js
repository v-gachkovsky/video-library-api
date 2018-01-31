const database = require('../database');

module.exports = {
  getVideos: (req, res) => {
    const allVideos = database.getVideos();

    res.json(allVideos);
  }
};
