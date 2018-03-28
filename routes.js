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
router.route('/all-courses').get(endpoints.getAllCourses);
router.route('/courses').get(endpoints.getCourses);
router.route('/courses/:userId').get(endpoints.getUserCourses);
// POST
router.route('/courses').post(endpoints.addCourse);
router.route('/courses/:userId').post(endpoints.toggleCourseToUser);
// DELETE
router.route('/courses/:id').delete(endpoints.deleteCourse);

// USER
router.route('/signup').post(endpoints.signup);
router.route('/signin').post(endpoints.signin);
router.route('/users').get(endpoints.getUsers);

module.exports = router;
