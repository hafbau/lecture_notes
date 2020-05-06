// create a server
// listen for connections on a particular port
// on connection send a Welcome message to every client
  // set client encooding (do we even speak the same language???)
// listen for message from client
// on receiving a message broadcast to other connected clients
// on client disconnect say something

const net = require('net');
// console.log('net :>> ', net);
const server = net.createServer();

const allClients = [];

server.on('connection', (client) => {
  console.log('Yay!!! a client connected');

  allClients.push(client);

  client.setEncoding('utf-8');
  client.write('Welcome to Jumanji!!!🥁🥁🥁')

  client.on('data', (message) => {
    console.log('Message from client', message);

    allClients.forEach(cl => {
      if (cl !== client) {
        cl.write(message)
      }
    })
  })

  client.on('close', () => console.log('a client disconnected'))
})

server.listen(8080, () => console.log("Server Listening on port", 8080))