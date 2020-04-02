const express = require('express');

const app = express()
const port = 3000

// set the view engine to ejs
app.set('view engine', 'ejs');
// Middlewares

app.use(function (request, response, next) {
  console.log(request.method, request.url);
  next()
})

app.use(function (request, response, next) {
  request.user = {
    name: "hafiz"
  }
  next()
})

app.get('/', (req, res) => {
  const templateVars = {
    user: req.user,
    key: "value",
    key2: {
      key3: "Im a nested key"
    }
  };

  res.render('index', templateVars);
})

app.get('/dogs', (req, res) => {
  res.render('index', { soo: 'kjhd'})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))