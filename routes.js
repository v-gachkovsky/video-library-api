const express = require('express');
const router = express.Router();

const endpoints = require('./endpoints');
// VIDEOS
// GET
router.route('/videos').get(endpoints.getVideos);
router.route('/videos/:courseId').get(endpoints.getCourseVideos);
// POST
router.route('/videos').post(endpoints.addVideo);
// DELETE
router.route('/videos/:id').delete(endpoints.deleteVideo);

// COURSES
// GET
router.route('/courses').get(endpoints.getCourses);
// POST
router.route('/courses').post(endpoints.addCourse);
// DELETE
router.route('/courses/:id').delete(endpoints.deleteCourse);

// USER
router.route('/signup').post(endpoints.signup);
router.route('/signin').post(endpoints.signin);
module.exports = router;
