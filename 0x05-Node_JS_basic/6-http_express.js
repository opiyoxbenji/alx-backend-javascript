// express module to create a web server
const express = require('express');

const app = express();

// define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);
module.exports = app;
