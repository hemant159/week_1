const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {      //if the we use = instead of ===, it will not work as expected because = is an assignment operator, not a comparison operator. The correct operator to use for comparison is ===, which checks for both value and type equality.
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