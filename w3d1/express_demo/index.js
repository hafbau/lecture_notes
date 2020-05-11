const express = require('express');
const routeHandlers = require('./routes');

const PORT = 3001;
// server setup
const app = express();

app.set('view engine', 'ejs');

app.use((request, response, next) => {
  console.log('Hey Im a middleware')
  request.user = 'Hafiz'
  const start = Date.now();
  
  next();

  const duration = Date.now() - start;
  console.log(`${request.method} ${request.url} took ${duration}ms`);
})

// handle requests
app.get('/', (request, response, next) => {
  console.log('getting home 1');
  next()
})
app.get('/', (request, response, next) => {
  console.log('getting home 2');
  next()
})
app.get('/', (request, response, next) => {
  console.log('getting home 3');
  next()
})
app.get('/', (request, response, next) => {
  console.log('getting home 4');
  next()
})
app.get('/', (request, response, next) => {
  console.log('getting home 5');
  next()
})
app.get('/', routeHandlers.getHome)
app.get('/daniel', routeHandlers.getDaniel)

// listening
app.listen(PORT, () => console.log(`Express server listening on ${PORT}`))