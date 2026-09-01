const express = require('express');
const app = express();
// json middle ware is missing, so the server is not able to parse the json data sent in the request body. Now it is added, so the server will be able to parse the json data sent in the request body.
app.use(express.json());

app.post('/users', (req, res) => {
  const name = req.body.name;
  res.send('Received: ' + name);
});

app.listen(3000, () => console.log('Server running on port 3000'));