const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  // TODO: Create initial API. Remove / and return action.
  // IE:/play /stop /queue?song=filename

  //TODO: Create a website that calls the above and allows basic
  // control without the nfc taps.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});