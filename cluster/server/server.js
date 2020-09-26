/* eslint-disable no-unused-vars */
const cluster = require('cluster');
const http = require('http');
const url = require('url');

const numCPUs = 5;
const bench = require('./bench');

const host = '0.0.0.0';
const port = 8000;
const defaultInputValue = 500;

const start = async function startServer() {
  // Cluster
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running.`);

    // Run cluster.fork based on numCPUs
    for (let i = 1; i < numCPUs; i += 1) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`A worker with ID ${worker.process.pid} died.`);
    });
  } else {
    http.createServer((request, response) => {
      const inputValue = url.parse(request.url, true).query.input;
      bench(inputValue ? Number(inputValue) : defaultInputValue);
      response.end(JSON.stringify('OK'));
    }).listen(port, host, () => {
      console.log(`Node.js Standard Library HTTP server running on port: ${port}`);
    });
  }
};

start();
