const http = require('http');
const url = require('url');
const { StaticPool } = require('node-worker-threads-pool');

const numCPUs = 5;

const host = '0.0.0.0';
const port = 8000;
const defaultInputValue = 500;

const start = function startServer() {
  const filePath = './worker.js';
  const pool = new StaticPool({
    size: numCPUs - 1,
    task: filePath,
    workerData: {},
  });

  const server = http.createServer(async (request, response) => {
    const inputValue = url.parse(request.url, true).query.input;
    try {
      const result = await pool.exec(
        inputValue ? Number(inputValue) : defaultInputValue,
      );
      response.end(result);
    } catch (e) {
      console.log(e);
      process.exit(0);
    }
  });
  server.listen(port, host, () => {
    console.log(`Node.js Standard Library HTTP server running on port: ${port}`);
  });
};

start();
