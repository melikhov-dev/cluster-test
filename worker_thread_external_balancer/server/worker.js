const { workerData } = require('worker_threads');
const http = require('http');
const bench = require('./bench');

http.createServer((req, res) => {
  bench(500);
  res.end(`Done. Port ${workerData.port}.`);
}).listen(workerData.port, workerData.host, () => {
  console.log(`Node.js Standard Library HTTP server running on port: ${workerData.port}`);
});
