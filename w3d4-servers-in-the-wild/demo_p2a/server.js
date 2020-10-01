const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true })) // this gives us req.body
app.use(cookieSession({
    keys: [
        'supersecretsecret', 'anotherreallylongrandomstring', 'knockknockwhosthereshhhitsasecret'
    ]
}))

const users = {
    'kv': {
        username: 'kv',
        password: '123',
        firstName: 'Khurram'
    },
    'al': {
        username: 'al',
        password: '456',
        firstName: 'Andy'
    }
};
const jokes = {
    'rnd-joke-1': {
        id: 'rnd-joke-1',
        text: 'If a child refuses to sleep during nap time, are they guilty of resisting a rest?',
        image: 'https://parade.com/wp-content/uploads/2019/12/Corny-Jokes-5.jpg',
        username: 'kv',
    },
    'rnd-joke-2': {
        id: 'rnd-joke-2',
        text: 'How do you make holy water? You boil the hell out of it.',
        image: 'https://i.pinimg.com/474x/bd/59/5b/bd595b70360350a143cfb76cd15f1e42--mom-jokes-puns-jokes.jpg',
        username: 'al',
    }
}

const comments = [{
        id: 'rnd-comment-1',
        text: 'rad',
        jokeID: 'rnd-joke-1',
        username: 'al',
    },
    {
        id: 'rnd-comment-2',
        text: 'ha ha ha',
        jokeID: 'rnd-joke-1',
        username: 'kv',
    },
    {
        id: 'rnd-comment-3',
        text: 'not funny 🙄',
        jokeID: 'rnd-joke-2',
        username: 'kv',
    }
]

const getComments = (jokeID) => comments.filter(comment => comment.jokeID === jokeID)

const generateRandomID = () => Math.random().toString(16).slice(2, 8);

app.get('/jokes', (req, res) => {
    const templateVars = {
        jokes: jokes,
        getComments
    }

    res.render('jokes', templateVars)
})

app.get('/jokes/new', (req, res) => {
    res.render('new_joke')
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
        id: generateRandomID(),
        text: req.body.text,
        image: req.body.image,
        username: req.session.username
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


app.post('/jokes/:id/comments', (req, res) => {
    const jokeID = req.params.id;
    if (jokeID in jokes) {
        const { text } = req.body;
        comments.unshift({
            id: generateRandomID(),
            text,
            username: req.session.username,
            jokeID
        })
    }

    res.redirect("/jokes/" + jokeID)
})



// AUTH
app.get('/admin/users', (req, res) => {
    res.json(users);
})

app.get('/', (req, res) => {
    const {
        username
    } = req.session;
    console.log('req.session :>> ', req.session);
    if (username in users) {
        res.redirect('/jokes')
    } else {
        res.render('home');
    }
});


app.get('/login', (req, res) => {
    res.render('login', {
        error: undefined
    });
});

app.post('/login', (req, res) => {
    const {
        username,
        password
    } = req.body;
    const existingUser = users[username];

    if (username in users) {
        if (existingUser.password === password) {
            req.session.username = username;

            res.redirect('/')
        } else {
            res.status(401)
            res.render(
                'login', {
                    error: 'Password mismatch. Reset password?'
                }
            )
        }
    } else {
        res.status(401)
        res.render(
            'login', {
                error: 'No account under your name. Sign up instead?'
            }
        )
    }
})

app.get('/signup', (req, res) => {
    res.render('signup', {
        error: undefined,
        submittedData: null
    });
});

app.post('/signup', (req, res) => {
    const {
        username,
        password,
        firstName
    } = req.body;

    if (username in users) {
        res.status(400)
        res.render('signup', {
            error: 'Username already exist',
            submittedData: {}
        })
    } else {
        users[username] = {
            username,
            password,
            firstName
        };
        req.session.username = username;
        res.redirect('/')
    }
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on ${PORT}`)
})