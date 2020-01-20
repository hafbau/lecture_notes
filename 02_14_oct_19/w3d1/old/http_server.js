// Create the server
// server listens for connection (requests)
// server respond to requests

const httpUtils = require('http');
const PORT = 4337;

const getHome = (req, res) => {
  res.end(`
    <h1>Welcome Home crew!</h1>
  `)
}

const getTeam = (req, res) => {
  // /team/hafiz
  const { url } = req;
  const [_, path, name] = url.split('/');
  res.end(require('./stolen_page'))
  // res.end(`
  //   <h1>Meet our ${name || 'CEO; LUCY!!!'}</h1>
  // `)
}

const handleRequest = (request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    getHome(request, response);
  }
  if (request.method === 'GET' && request.url === '/about') {
    response.end('So you curious??')
  }
  if (request.method === 'GET' && request.url.includes('/team')) {
    getTeam(request, response)
  }
  
  response.end('yeezy')
}


const server = httpUtils.createServer(handleRequest);
// server.on('request', handleRequest)

server.listen(PORT);
