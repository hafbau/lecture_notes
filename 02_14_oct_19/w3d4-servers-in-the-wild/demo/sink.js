const express = require('express');
const fakeHandler = require("./fakeHandler");
const app = express()


app.use('/wowzers/:username', (req, res, next) => {
  console.log('middleware!')
  if (req.params.username === 'drogo') {
    res.send('error!')
    console.log('sjdhfksjfhk');
  } else {
    next()
  }
})
app.use('*', (req, res, next) => {
  console.log('everyfn!')
  next()
})

app.use((req, res, next) => {
  console.log('hows dx diff everyfn!')
  next()
})

app.use('/', (req, res, next) => {
  console.log('or is dx diff everyfn!')
  next()
})

app.get('/wowzers/:username', (r, s, n) => {
  console.log('passing by');
  n()
}, (r, s, n) => {
  console.log('passing by TWO');
  n()
})

app.get('/wowzers/:username', fakeHandler('jo oo!'))

app.listen(4337, () => {
  console.log('been 4337ing before it was cool!')
})