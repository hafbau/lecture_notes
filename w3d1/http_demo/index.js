// Creating a functional shoe store

// 1. Create the store => Create a server
const http = require('http');
const createPage = require('./createPage');

const server = http.createServer();

// 2. Open the shop for business => server to be listening
server.listen(4337, () => console.log('Server is on', 4337))

// 3. Employ a clerk for the store => clerk to be alert to requests
const getHome = function(request, response) {
  response.end(createPage('Hafiz'))
}

const getAbout = function(request, response) {
  response.end("<h1>About page</h1>")
}

const getRand = function(request, response) {
  response.end(`${Math.random()}`)
}

const routeHandlers = {
  'GET /': getHome,
  'GET /about': getAbout,
  'GET /rand': getRand,
}



server.on('request', function(request, response) {
  console.log('request :>> ', request.method, request.url);
  const route = request.method + ' ' + request.url;

  if (route in routeHandlers) {
    const currentRouteHandler = routeHandlers[route]
    currentRouteHandler(request, response)
  } else {
    response.statusCode = 404;
    response.end("Route not found")
  }

})

// 4. Clerk responds to requests => clerk to respond to request