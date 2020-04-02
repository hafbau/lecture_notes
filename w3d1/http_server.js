// OUR LOGIC FOR WHAT HAS TO HAPPEN IN THIS FILE
// Application server has to exist
// listening on a port
// sees the request
// sends you the file // handle the request

// Importing logic / object to create server from a pre-made module baked into Nodejs
const http = require('http')

// function that returns an html page to be used later.
const createPage = require('./page')

const server = http.createServer()

// Our custom ROUTE HANDLERS
const getLucy = (req, res) => res.end('Its LUCY!!!!!!!!!!!!!!!')
const getCaro = (req, res) => res.end('Its Caro!!!!!!!!!!!!!!!')
const getAdlai = (req, res) => res.end('Its Adlai!!!!!!!!!!!!!!!')

// Routes object for lookup, so as to clean up our multiple `if` statements
const routes = {
  'GET /lucy': getLucy,
  'GET /caro': getCaro,
  'GET /adlai': getAdlai
}

// Listening and handling the 'request' event
server.on('request', (request, response) => {
  // below we're creating a string that we can use to lookup the appropriate handler in our routes object
  // it's of the form `GET /someURL`
  const endpoint = `${request.method} ${request.url}`

  // get the appropriate route handler for this endpoint
  const routeHandler = routes[endpoint]

  // if (routeHandler) {
  if (endpoint in routes) {
    routeHandler(request, response)
  } else {
    // if all else fails, show this page
    // look in the page.js file to see that it's just a function that returns a string.
    // the first iteration in class used to just be a string, which is why we didn't need to call it; code commented out below
    // response.end(require('./page'))
    response.end(createPage())
  }
})

const PORT = 3000;

server.listen(PORT, () => console.log('Im listening on PORT', PORT))

// THIS IS THE MULTIPLE `if`s THAT WE CLEANED UP WITH A LOOKUP (OBJECT)
// if (request.method === 'GET' && request.url === '/lucy') {
//   response.end('')
// }
// if (request.method === 'GET' && request.url === '/caro') {
//   response.end('Its CARO!!!!!!!!!!!!!!!')
// }
// if (request.method === 'GET' && request.url === '/lucy') {
//   response.end('Its LUCY!!!!!!!!!!!!!!!')
// }
// if (request.method === 'GET' && request.url === '/caro') {
//   response.end('Its CARO!!!!!!!!!!!!!!!')
// }