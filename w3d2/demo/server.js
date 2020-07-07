const express = require('express')
const bodyParser = require('body-parser')
const {
    users,
    jokes,
    comments,
    generateRandomID,
    getComments
} = require('./dataHelpers')

const app = express()
const PORT = 3000

// whenever we call response.render('blah'),
// look for 'blah.ejs' in `views` folder
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true })) // this gives us req.body

// Server 2 server request:
// this server is making a request to google.com's server
// request.get('google.com', (err, response, body) => {
    
// })

// Express Middlewares: Routing + Controllers?
app.get('/jokes', (request, response) => {
    response.render('index', { ourJokes: jokes, getComments: getComments, users: users })
})

app.get('/jokes/new', (request, response) => {
    response.render('new_joke')
})

app.post('/jokes', (req, res) => {
    // Goal: Create Joke - save a new joke in our data storage
    // 1. get the submitted body of data from the request
    const dataFromUser = req.body
    console.log('dataFromUser', dataFromUser)
    // 2. create the representation of a joke
    const newJoke = {
        id: generateRandomID(),
        text: dataFromUser.text,
        image: dataFromUser.image,
        userID: 'rnd-user-1'
    }
    // 3. add that newly formed joke to our data store
    jokes[newJoke.id] = newJoke

    // 4. respond to the request
    res.redirect('/jokes')
})


app.get('/jokes/:jokeID/edit', (request, response) => {
    const theJokeID = request.params.jokeID
    const jokeData = jokes[theJokeID]
    response.render('edit_joke', { joke: jokeData })
})

app.post('/jokes/:jokeID', (req, res) => {
    // Goal: Create Joke - save a new joke in our data storage
    // 1. get the submitted body of data from the request
    const editFromUser = req.body
    console.log('editFromUser', editFromUser)
    // 2. create the representation of a joke
    const theJokeID = req.params.jokeID
    const jokeData = jokes[theJokeID]

    const updatedJoke = {
        id: jokeData.id,
        text: editFromUser.text,
        image: editFromUser.image,
        userID: jokeData.userID
    }
    // 3. add that newly formed joke to our data store
    jokes[updatedJoke.id] = updatedJoke

    // 4. respond to the request
    res.redirect('/jokes/' + theJokeID)
})

app.get('/jokes/:jokeID', (request, response) => {
    // Goal is to show a page with full details about a joke
    // 1. Identify the joke that is being requested
    const theJokeID = request.params.jokeID
    const jokeData = jokes[theJokeID]

    // 2. Render a joke template (ejs) with the joke data
    response.render('show_joke', { joke: jokeData, getComments: getComments, users: users })
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on ${PORT}`)
})