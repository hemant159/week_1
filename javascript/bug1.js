const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {   //Bug one '='
    res.statusCode = 200;
    res.end('Hello World');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});