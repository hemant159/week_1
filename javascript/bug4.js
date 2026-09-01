const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.statusCode=200
  res.send('Hello World');
});

app.listen(3000,() => {
  console.log('Server running on 3000');
});