const express = require('express');
const router = express.Router();

const endpoints = require('./endpoints');

router.route('/videos').get(endpoints.getVideos);
router.route('/videos').post(endpoints.addVideo);

router.route('/courses').get(endpoints.getCourses);
router.route('/courses').post(endpoints.addCourse);

module.exports = router;
