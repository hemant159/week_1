const http = require('http');

function requestHandler(req, res) {
    if (req.url === '/') {
        res.statusCode = 200;
        console.log('Sending Hello World');
        res.end('Hello World');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
}

const server = http.createServer(requestHandler);

server.listen(3000, () => {
    console.log('Server running on port 3000');
});