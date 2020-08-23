const { parentPort } = require('worker_threads');
const bench = require('./bench');

parentPort.on('message', () => {
    bench(500);
    parentPort.postMessage('OK');
})
