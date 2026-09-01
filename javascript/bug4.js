const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

// app.listen(() => {
//   console.log('Server running');
// });

app.listen(3000, () => {
  console.log('Server running on port 3000');
});