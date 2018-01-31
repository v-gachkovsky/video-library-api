const express = require('express');
const router = express.Router();

const endpoints = require('./endpoints');

router.route('/videos').get(endpoints.getVideos);

module.exports = router;
