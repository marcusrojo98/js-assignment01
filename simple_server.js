// Import the http module
const http = require('http');

// Set the hostname and port
const hostname = 'localhost';
const port = 8900;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Return your name as the response
  res.end('Oluwasegun Marcus Owoeye\n');
});

// Listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
