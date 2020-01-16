// Create Server
// Server should listen on a port
// FAKE SERVER
// const quintonServerUtils = require('quinton-server-utils');

// const server = quintonServerUtils.createServer();

// // When server receives a connection
// server.whenConnection = () => console.log('A client connected')

// server.listen(4337)

const net = require('net');

const server = net.createServer();
// When server receives a connection
const handleConnection = () => console.log('A client connected')

const allTheClients = [];

server.on('connection', (client) => {
  console.log('A client connected', server)

  allTheClients.push(client);
  // client.write('Hey for server')
  client.setEncoding('utf8')
  client.on('data', (msg) => {
    for (const c of allTheClients) {
      c.write(msg);
    }
    console.log('received', msg);
  })
})


server.listen(4337)