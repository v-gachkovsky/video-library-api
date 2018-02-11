const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 9000;
const routes = require('./routes');

// const whitelist = ['http://localhost:8080', 'http://localhost:9010'];
// const corsOptions = {
//   origin: (origin, callback) => {
//     whitelist.indexOf(origin) !== -1
//       ? callback(null, true)
//       : callback(new Error('Not allowed by CORS'));
//   }
// };

app.use(cors({ origin: '*' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`API started on port ${port}`);
});
