const jwt = require('jsonwebtoken');
const db  = require('../models');

const JWT_SECRET_KEY = 'LIVAANDNASTYA=Lofki ))';

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
  },

  signin: (req, res) => {
    const { email, password } = req.body;

    db.User.findOne({ where: { email } }).then(user => {
      const { password: passwordFromDB } = user;

      if (password !== passwordFromDB) {
        res.json({ success: false, message: 'Authentication failed1' });
      }

      const payload = {
        email
      };

      const token = jwt.sign(payload, JWT_SECRET_KEY);

      res.json({
        success: true,
        message: 'Enjoy your token!',
        token
      });
    }).catch((err) => {
      console.log('err', err);
      res.json({ success: false, message: 'Authentication failed2' });
    });
  },

  signup: (req, res) => {
    const { email, firstName, lastName, password } = req.body;

    db.User.findOne({ where: { email } }).then(user => {
      if (user) {
        res.json({ success: false, error: 'Email already used' });
      } else {
        db.User.create({
          firstName,
          lastName,
          email,
          password
        }).then(() => {
          res.json({ success: true });
        });
      }
    }).catch(error => {
      res.json({ success: false, error });
    });
  }
};
