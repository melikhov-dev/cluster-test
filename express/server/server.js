const http = require('http');
const url = require('url');
const express = require('express');
const bench = require('./bench');

const host = '0.0.0.0';
const port = 8000;
const defaultInputValue = 500;
const app = express();
app.get('/server.js', (request, response) => {
  const inputValue = url.parse(request.url, true).query.input;
  bench(inputValue ? Number(inputValue) : defaultInputValue);
  response.end(JSON.stringify('OK'));
});
http.createServer(app).listen(port, host, () => {
  console.log(`Node.js Standard Library HTTP server running on port: ${port}`);
});
