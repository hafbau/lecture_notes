const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true })) // this gives us req.body

const users = {
    'rnd-user-1': 'Tara Bull',
    'rnd-user-2': 'Al Kohorlich',
    'rnd-user-3': 'DJ Khaled'
}

const jokes = {
    'rnd-joke-1': {
        id: 'rnd-joke-1',
        text: 'If a child refuses to sleep during nap time, are they guilty of resisting a rest?',
        image: 'https://parade.com/wp-content/uploads/2019/12/Corny-Jokes-5.jpg',
        userID: 'rnd-user-1',
    },
    'rnd-joke-2': {
        id: 'rnd-joke-2',
        text: 'How do you make holy water? You boil the hell out of it.',
        image: 'https://i.pinimg.com/474x/bd/59/5b/bd595b70360350a143cfb76cd15f1e42--mom-jokes-puns-jokes.jpg',
        userID: 'rnd-user-2',
    }
}

const comments = [{
        id: 'rnd-comment-1',
        text: 'rad',
        jokeID: 'rnd-joke-1',
        userID: 'rnd-user-2',
    },
    {
        id: 'rnd-comment-2',
        text: 'ha ha ha',
        jokeID: 'rnd-joke-1',
        userID: 'rnd-user-3',
    },
    {
        id: 'rnd-comment-3',
        text: 'not funny 🙄',
        jokeID: 'rnd-joke-2',
        userID: 'rnd-user-3',
    }
]

const getComments = (jokeID) => comments.filter(comment => comment.jokeID === jokeID)

app.get('/', (req, res) => {
    const templateVars = {
        jokes: jokes,
        getComments
    }

    res.render('index', templateVars)
})

app.get('/jokes', (req, res) => {
    res.redirect('/')
})

app.get('/jokes/new', (req, res) => {
    res.render('new_joke')
})

app.get('/users/new', (req, res) => {
    res.render('new_user')
})

app.get('/jokes/:id', (req, res) => {
    const joke = jokes[req.params.id]

    const templateVars = {
        joke,
        comments: getComments(joke.id),
        users
    }

    res.render('show_joke', templateVars)
})

app.get('/jokes/:id/edit', (req, res) => {
    const joke = jokes[req.params.id]

    const templateVars = {
        joke: joke,
    }

    res.render('edit_joke', templateVars)
})

app.post('/jokes', (req, res) => {
    const newjoke = {
        id: Math.random().toString(16).slice(2, 8),
        text: req.body.text,
        image: req.body.image
    }

    jokes[newjoke.id] = newjoke

    res.redirect("/")
})

app.post('/jokes/:id', (req, res) => {
    const editedjoke = {
        text: req.body.text,
        image: req.body.image
    }

    jokes[req.params.id] = editedjoke

    res.redirect("/")
})

app.post('/jokes/:id/delete', (req, res) => {
    delete jokes[req.params.id]

    res.redirect("/")
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on ${PORT}`)
})