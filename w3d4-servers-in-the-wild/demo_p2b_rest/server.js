const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true })) // this gives us req.body

const generateRandomID = () => Math.random().toString(16).slice(2, 8);

// RESTFUL ROUTES BELOW

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on ${PORT}`)
})