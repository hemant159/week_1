const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World');
});

// app.listen(() => {
//   console.log('Server running');    previously the port was not specified, so it was not working. Now the port is specified and the server is running on port 3000
// });
app.listen(3000,() => {
  console.log('Server running on port 3000');
});