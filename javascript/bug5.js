const express = require('express');
const app = express();

app.get('/about', (req, res) => {     //previously the route was set to '/', which was causing a conflict with the other route. Now it is changed to '/about', so it will work correctly.
  res.send('This is the about page');
});

app.listen(3000, () => console.log('Server running on port 3000'));