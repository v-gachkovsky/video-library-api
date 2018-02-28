const db  = require('../models');

module.exports = {
  // Videos endpoints
  getVideos: (req, res) => {
    db.Video.findAll().then(videos => {
      res.json(videos);
    }).catch(error => res.json({ success: false, error }));
  },

  getCourseVideos: (req, res) => {
    const { courseId } = req.params;
    db.Video.findAll({
      where: {
        courseId
      }
    }).then(videos => {
      res.json({ success: true, videos });
    }).catch(error => {
      res.json({ success: false, error });
    });
  },

  addVideo: (req, res) => {
    const { body } = req;

    db.Course.findById(+body.courseId).then(course => {
      const newVideo = { ...body, courseId: course.id };

      db.Video.create(newVideo).then(() => {
        res.json({ success: true });
      }).catch(error => {
        res.json({ success: false, error });
      });
    }).catch(error => {
      res.json({ success: false, error });
    });
  },

  deleteVideo: (req, res) => {
    const { id } = req.params;
    
    db.Video.destroy({
      where: {
        id
      }
    }).then(() => {
      res.json({ success: true });
    }).catch(error => {
      res.json({ success: false, error })
    })
  },

  // Courses endpoints
  getCourses: (req, res) => {
    db.Course.findAll().then(courses => {
      res.json(courses);
    }).catch(error => res.json({ success: false, error }));
  },

  addCourse: (req, res) => {
    const { body: newCourse } = req;
    db.Course.create(newCourse).then(() => {
      res.json({ success: true });
    }).catch(error => {
      res.json({ success: false, error });
    });
  },

  deleteCourse: (req, res) => {
    const { id } = req.params;
    
    db.Course.destroy({
      where: {
        id
      }
    }).then(() => {
      res.json({ success: true });
    }).catch(error => {
      res.json({ success: false, error })
    })
  }
};
