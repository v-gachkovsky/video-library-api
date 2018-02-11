const express = require('express');
const router = express.Router();

const endpoints = require('./endpoints');
// GET
router.route('/videos').get(endpoints.getVideos);
router.route('/videos/:courseId').get(endpoints.getCourseVideos);
// POST
router.route('/videos').post(endpoints.addVideo);

// GET
router.route('/courses').get(endpoints.getCourses);
// POST
router.route('/courses').post(endpoints.addCourse);

module.exports = router;
