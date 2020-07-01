// What should happen in the server?
// 1. Server has to exist i.e get a shop
// 2. listen for connection on a host and a port i.e put a sign outside your door that you're open for business
  // 2a. on client connection, we say welcome e.g. when customer walks in our shoe shop we say can I help with something

const net = require('net');

const server = net.createServer();

const allTheClients = [];
server.on('connection', (client) => {
  // console.log('yaysss our first client!')
  allTheClients.push(client);
  client.setEncoding('utf-8')
  client.write('Welcome, to Jumanji 🥁')

  console.log('allTheClients :>> ', allTheClients);

  client.on('data', (data) => {
    // broad this message to all connected client
    console.log('data :>> ', data);
    for(const existingClient of allTheClients) {
      if (existingClient !== client) {
        existingClient.write(data)
      }
    }
  })

})

// console.log('allTheClients External :>> ', allTheClients);
server.listen(4337, () => { console.log('The server listening on port', 4337)});

console.log('just another consolelog')