const http = require('http');
const mypage = require('./index')
//console.log(http)

const server = http.createServer();

function isDog(req) {
  return req.method.toUpperCase() + req.url === 'GET/dogs' 
}

server.on("request", function (request, response) {
  console.log("I got request", request.method, request.url)

  if (isDog(request)) {
    response.end("No dogs yet")
  }
  if (isDog(request)) {
    response.end("No dogs yet")
  }
  if (isDog(request)) {
    response.end("No dogs yet")
  }
  if (isDog(request)) {
    response.end("No dogs yet")
  }
  if (isDog(request)) {
    response.end("No dogs yet")
  }
  response.end(mypage)
})

// server.get('/dogs', showDogs)
// server.post('/dogs', showDogs)
// server.get('/dogs', showDogs)
// server.get('/dogs', showDogs)

server.listen(3000)

console.log("server is listening")
