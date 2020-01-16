const net = require('net');
const uuid = require('uuid/v4');
const faker = require('faker');
const port = 8000;

// creating the net server
const server = net.createServer();

// keeps all of our currently connected clients
const clients = {};

const addNewClient = client => {
  client.id = uuid();
  client.name = faker.name.findName();
  client.address = `${client.remoteAddress} ${client.port}`;
  // add the client object to the clients object
  clients[client.id] = client;
};

// sends the message to all connected client except the current client
const broadcast = (message, currentClient) => {
  // create a list of clients in an array
  Object.values(clients).forEach(client => {
    if (client !== currentClient) {
      client.write(message);
    }
  });
};

// event that triggers whenever a client connects
server.on('connection', client => {
  console.log('Client connected');

  addNewClient(client);
  client.write(`Welcome to the chat ${client.name}`);

  client.on('error', error => {
    console.log(`Error connecting ${error}`);
  });

  // This triggers every time the server receives a message from a client
  client.on('data', message => {
    broadcast(message, client);
  });

  client.on('close', () => {
    console.log(`server says: client disconnected`);
    broadcast(`${client.name} has left the chat`);
    delete clients[client.id];
  });
});

// have the server listening for incoming connections
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
