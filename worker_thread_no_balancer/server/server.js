const http = require('http');
const { StaticPool } = require('node-worker-threads-pool');
const numCPUs = 5;

const host = '0.0.0.0';
const port = 8000;

const start = function startServer() {
    const filePath = './worker.js';
    const pool = new StaticPool({
        size: numCPUs - 1,
        task: filePath,
        workerData: {},
    });

    const router = async function requestRouter(request, response) {
        try {
            const result = await pool.exec();
            response.end(result);
        } catch (e) {
            console.log(e);
            process.exit(0);
        }
    }

    const server = http.createServer(router);
    server.listen(port, host, () => {
        console.log(`Node.js Standard Library HTTP server running on port: ${port}`)
    })
}

start();
