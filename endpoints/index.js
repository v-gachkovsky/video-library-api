const passport = require('passport');
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
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          success: false,
          err: 'Something went wrong'
        });
      }

      req.login(user, { session: false }, error => {
        if (error) {
          res.json({ success: false, error });
        }
        const token = jwt.sign(user, JWT_SECRET_KEY);
        return res.json({ user, token });
      });
    })(req, res);
  },

  signup: (req, res) => {
    const { email, firstName, lastName, password } = req.body

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
