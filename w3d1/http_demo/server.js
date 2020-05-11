// create http server
// server needs to start listening for connection
  // on a PORT
// handle incoming requests
  // respond

console.log('Start of file')
const http = require('http');
const fs = require('fs')

const createDanielPage = require('./daniel.js');

const indexContent = fs.readFileSync('index.html', 'utf8')

const routesTable = {
  'GET /': function (request, response) {
    response.end(indexContent)
  },
  'GET /daniel': function (request, response) {
    response.setHeader('Content-type', 'text/html')
    response.end(createDanielPage())
  }
}

const server = http.createServer((request, response) => {
  console.log('Incomming!!', request.method, request.url)
  const endpoint = request.method + ' ' + request.url;
  if (endpoint in routesTable) {
    const handler = routesTable[endpoint]
    handler(request, response);
    // routesTable[endpoint](request, response);
  } else {
    response.statusCode = 404;
    response.end('Not found ' + Math.random())
  }
});

// Could also do the below as an alternative to passing a callback into http.createServer
// server.on('request', () => {

// })

// localhost:3000
server.listen(3000, () => console.log('Listening on port 3000'))

console.log('end of file')