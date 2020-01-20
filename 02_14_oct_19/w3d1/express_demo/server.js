const express = require('express')
const { getLucy, getCaro } = require('./route_handlers')
const app = express()
const port = 3000

const createPage = require('../page')

app.use((req, res, next) => {
  console.log('Im always called')
  next()
})
app.get('/', getLucy);

app.get('/', (req, res) => {
  console.log('req.user', req.user)
  res.send(createPage(req.user))
});

app.get('/caro', getCaro)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))