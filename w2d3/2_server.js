// What should happen in the server?
// 1. server has to exist
// 2. listening for communication/connection (handshake)
// 2a. set lang of communication
// 3a. Listen for message from clients
// 3. respond to requests - by broadcasting message to connected clients
// 4. handle disconnection gracefully


// 1. server has to exist
const net = require('net');
const server = net.createServer();

const allTheClients = [];

server.on('connection', (serverEndOfTinCan) => {
  console.log('serverEndOfTinCan connected')
  allTheClients.push(serverEndOfTinCan);
  console.log('allTheClients :>> ', allTheClients);
  serverEndOfTinCan.setEncoding('utf-8')
  // server listens
  serverEndOfTinCan.on('data', (message) => {
    console.log('message from client:>> ', message);
    allTheClients.forEach((client) => {
      if (client !== serverEndOfTinCan) {
        client.write(message)
      }
    })
  })

  // server talks
  serverEndOfTinCan.write('Welcome to Jumanji 🥁🥁🥁🥁🥁')

})
// 2. listening for communication/connection (handshake)
server.listen(4337, () => console.log('server listeninig on port 4337'))
