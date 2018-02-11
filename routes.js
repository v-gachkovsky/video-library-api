const express = require('express');
const router = express.Router();

const endpoints = require('./endpoints');

router.route('/videos').get(endpoints.getVideos);
router.route('/courses').get(endpoints.getCourses);

module.exports = router;
