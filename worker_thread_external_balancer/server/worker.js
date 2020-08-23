const { parentPort, workerData } = require('worker_threads')
const http = require('http');
const bench = require('./bench')

const server = http.createServer((req, res) => {
    bench(500);
    res.end(`Done. Port ${workerData.port}.`);
})
server.listen(workerData.port, workerData.host, () => {
    console.log(`Node.js Standard Library HTTP server running on port: ${workerData.port}`)
})
