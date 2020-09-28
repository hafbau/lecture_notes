const express = require('express');
const images = require('./images.json');
const server = express();

const PORT = 3000;

server.listen(PORT, () => console.log('Server is on', PORT));

// Tell express we're using ejs
server.set('view engine', 'ejs');

// server[method](url, routehandler)
// routeHandler = (request, response) => {}
server.get('/', (request, response) => {
  const localVariablesToBeUsedInTemplate = {
    name: 'Bradley',
    shoes: images
  };
  
  // response.render(templateRelativePath, localVariablesToBeUsedInTemplate)
  // response.render('user/index')
  response.render('index', localVariablesToBeUsedInTemplate);
  // More about localVariablesToBeUsedInTemplate:
  // 1. It is ALWAYS an object with key-value pairs
  // 2. The keys will be available as local variables in the template
  // 3. We can access these local variables in the template using the aligator tags
})

server.get('/rand', (request, response) => {
  response.send(`${Math.random()}`)
})
