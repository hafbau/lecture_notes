const net = require('net');

const client = net.createConnection({
  host: '192.168.1.68',
  port: 8000,
});

// sending what we type at the prompt to the server
process.stdin.on('data', message => {
  client.write(message);
});

client.setEncoding('utf8');

client.on('connect', () => {
  console.log("You're connected to the server");
});

client.on('data', message => {
  console.log(`${client.remoteAddress} says ${message}`);
});

client.on('error', error => {
  console.log(error);
});

client.on('end', () => {
  console.log('client says: client disconnected');
});
