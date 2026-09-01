const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.listen(3000, () => console.log('Server running on port 3000'));