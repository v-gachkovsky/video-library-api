const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;
const db  = require('./models');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 9000;
const routes = require('./routes');

passport.use('local', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true
}, function(req, email, password, done) {
  console.log('email', email);
  console.log('password', password);

  db.User.findOne({ where: { email } }).then(user => {
    return done(null, user);
  }).catch(err => {
    return done(err); 
  });
}));

app.use(passport.initialize());

app.use(cors({ origin: '*' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`API started on port ${port}`);
});
