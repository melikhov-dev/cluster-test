const { workerData } = require('worker_threads');
const http = require('http');
const url = require('url');
const bench = require('./bench');

const defaultInputValue = 500;

http.createServer((request, response) => {
  const inputValue = url.parse(request.url, true).query.input;
  bench(inputValue ? Number(inputValue) : defaultInputValue);
  response.end(`Done. Port ${workerData.port}.`);
}).listen(workerData.port, workerData.host, () => {
  console.log(`Node.js Standard Library HTTP server running on port: ${workerData.port}`);
});
