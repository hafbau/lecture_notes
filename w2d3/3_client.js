// What should the client do?
// 1. create a connection
// 2. talk / listen

const net = require('net')

const conn = net.createConnection({
  host: 'localhost',// 127.0.0.1
  port: 4337
});

conn.setEncoding('utf-8')

conn.on('data', (data) => {
  console.log('I gat dat from serva >>', data)
})

conn.on('connect', () => {
  console.log('Im soo connected')
})

// process.stdin.setEncoding('utf-8')
process.stdin.on('data', (typedDataByUser) => {
  conn.write(typedDataByUser)
  // console.log('typedDataByUser :>> ', typedDataByUser);
})
