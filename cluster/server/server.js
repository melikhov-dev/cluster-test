const cluster = require('cluster');
const http = require('http');
const numCPUs = 5;
const bench = require('./bench');

const host = '0.0.0.0';
const port = 8000;

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
        })
    } else {
        const router = function requestRouter(request, response) {
            bench(500);
            response.end(JSON.stringify('OK'));
        }

        const server = http.createServer(router);
        server.listen(port, host, () => {
            console.log(`Node.js Standard Library HTTP server running on port: ${port}`);
        })
    }
}

start();
