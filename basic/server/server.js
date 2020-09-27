const http = require('http');
const url = require('url');
const bench = require('./bench');

const host = '0.0.0.0';
const port = 8000;
const defaultInputValue = 500;

http.createServer((request, response) => {
  const inputValue = url.parse(request.url, true).query.input;
  bench(inputValue ? Number(inputValue) : defaultInputValue);
  response.end(JSON.stringify('OK'));
}).listen(port, host, () => {
  console.log(`Node.js Standard Library HTTP server running on port: ${port}`);
});
