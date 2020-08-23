const {Worker} = require('worker_threads');
const numCPUs = 4;
const host = '0.0.0.0';
const port = 8000;

const start = function startServer() {
    for (let i = 1; i<=numCPUs; i++) {
        new Worker('./worker.js', {workerData: {host, port: port + i}});
    }
}

start()
