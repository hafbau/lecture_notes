const httpClient = require('request');

// defaults to `GET` method if none is passed
httpClient('http://lighthouselabs.ca', (err, resp, body) => {
  if (err) {
    return console.log('err :>> ', err);
  }
  console.log('body :>> ', body);
})