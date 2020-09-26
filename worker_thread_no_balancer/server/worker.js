const { parentPort } = require('worker_threads');
const bench = require('./bench');

parentPort.on('message', (input) => {
  bench(input);
  parentPort.postMessage('OK');
});
