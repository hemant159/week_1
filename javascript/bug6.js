const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const name = req.body.name;

  res.send('Received: ' + name);
});

app.listen(3000, () => console.log('Server running on port 3000'));