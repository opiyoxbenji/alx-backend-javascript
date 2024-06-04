const express = require('express');

// function to count students from a separate file
const countStudents = require('./3-read_file_async');

const app = express();

// homepage route
app.get('/', (req, res) => res.send('Hello Holberton School!'));
// "/students" path -> fetches and displays student data async
app.get('/students', async (req, res) => {
  const title = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`${title}${data.join('\n')}`);
  } catch (error) {
    res.send(`${title}${error.message}`);
  }
});
app.listen(1245);
module.exports = app;
