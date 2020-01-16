// create connection
  // with ip address AND port number
  // acknowledge connection
  // listen for data
  // send message

const net = require('net');
const stdin = process.stdin;

const conn = net.createConnection({
  port: 4337,
  host: '192.168.168.234'
})

stdin.setEncoding('utf8')
conn.setEncoding('utf8')

stdin.on('data', (msg) => {
  conn.write(msg);
})

conn.on('connect', () => {
  console.log('Im connected');

  conn.write('Yeet!')
})

conn.on('data', (data) => {
  console.log('data from server :', data);
})