// create a connection with
  // host =>> ip address
  // port
// set what their encoding is (my language)
// listen for connection acknowledgment
  // listen for data / message from the server
  // write some message to server

const net = require('net');

const client = net.createConnection({
  host: 'localhost',//'192.168.168.234',
  port: 8080
})

client.setEncoding('utf-8')

client.on('connect', () => {
  console.log('Yo! Im connected yall');
})

client.on('data', (message) => {
  console.log('Message from server', message);
})


// What channel? console => process.stdin
// when something is being typed to stdin aka when there's data on stdin,
// send that data to server

process.stdin.on('data', (messageFromConsole) => {
  client.write(messageFromConsole)
})