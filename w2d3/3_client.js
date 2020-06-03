// What should the client do?
// 1. establish (create) connection
// 2. establish language of communication
// 3. confirm you're being listened to
// 4. send a message to the server
// 5. listen for message

// 1. establish (create) connection
const net = require('net');
const client = net.createConnection({
  port: 4337,
  host: 'localhost'
});

client.setEncoding('utf-8');

client.on('connect', () => console.log('Im connected to the server'))

client.on('data', (message) => {
  console.log('message from Server :>> ', message);
})

// process.stdin.setEncoding('utf-8')
process.stdin.on('data', (typedStuff) => {
  client.write(typedStuff)
})