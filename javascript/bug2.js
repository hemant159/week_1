const http = require('http');

function requestHandler(req, res) {
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Sending Hello World');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}

const server = http.createServer(requestHandler);
// server.listen(3000, () => console.log('Server running on port 3000'));  //it was previously commented out, so the server was not running. Now it is uncommented and the server is running on port 3000.

server.listen(3000, () => {
  console.log('Server running on port 3000');
});