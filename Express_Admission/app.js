const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

let applications = []; // Temporary storage

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // for CSS
app.use(express.json());

app.get('/admission', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

app.post('/admission', (req, res) => {
  const { name, email, phone, course } = req.body;

  const student = { name, email, phone, course };
  applications.push(student);

  res.send(`<h2>Thank you, ${name}! You’ve successfully applied for the ${course} program.</h2>`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
