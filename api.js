const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 9000;
const routes = require('./routes');

app.use(cors({
  origin: 'http://localhost:8080'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`API started on port ${port}`);
});
