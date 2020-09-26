/* eslint-disable no-unused-vars */
const http = require('http');
const bench = require('./bench');

const host = '0.0.0.0';
const port = 8000;

http.createServer((request, response) => {
  bench(500);
  response.end(JSON.stringify('OK'));
}).listen(port, host, () => {
  console.log(`Node.js Standard Library HTTP server running on port: ${port}`);
});
