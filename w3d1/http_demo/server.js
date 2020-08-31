// get server set up
const http = require('http');
const render = require('./indexPage')
const server = http.createServer((request, response) => {
  const { url, method } = request;
  if (url === '/' && method === 'GET') {
    response.end(render('Keagan'))
  } else if (url === '/rand' && method === 'GET') {
    response.end(`${Math.random()}`)
  } else {
    response.end("Not found")
  }
  // response.end("Response from the server!")
});

// get it (server) listening for request
// obj.on("event", functionToHandleEvent)
// server.on("request", (request, response) => {
//   const { url, method } = request;
//   if (url === '/' && method === 'GET') {
//     response.end("Home")
//   } else if (url === '/rand' && method === 'GET') {
//     response.end(`${Math.random()}`)
//   } else {
//     response.end("Not found")
//   }
//   // response.end("Response from the server!")
// })
server.listen(4337, () => console.log("Opened to sell shoes"))

// get it to respond to request