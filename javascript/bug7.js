const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
app.use(urlencoded({ extended: true })); // middleware to parse urlencoded data

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send('User ID: ' + userId);
});

app.listen(3000, () => console.log('Server running on port 3000'));