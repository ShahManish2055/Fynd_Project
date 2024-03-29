const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Assignment.html');
});

app.post('/', (req, res) => {
  const name = req.body.name;
  res.send("Your name is" + ` ${name}!`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
