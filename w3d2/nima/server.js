const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true })) // this gives us req.body

const users = {
    '5cu2t': 'Nima Boscarino',
    '7bn18s': 'Bob Bobson',
    '7an01': 'Bradlina Kristoferrettason'
}

const blogs = {
    '5sg1': {
        title: 'I love rain',
        content: `Oh man, can't get enough of it`,
        user: '7an01'
    },
    '61g236': {
        title: 'INSERT POLLITICALLY CHARGED STATEMENT',
        content: `Am I the only one who feels this way?`,
        user: '7bn18s'
    },
    '91bv16': {
        title: 'Its',
        content: `Ya boi`,
        user: '5cu2t'
    },        
}

app.get('/', (req, res) => {
    let templateVars = {
        blogs: blogs
    }

    res.render('index', templateVars)
})

app.get('/blogs', (req, res) => {
    res.redirect('/')
})

app.get('/blogs/new', (req, res) => {
    res.render('new_blog')
})

app.get('/users/new', (req, res) => {
    res.render('new_user')
})

app.get('/blogs/:id', (req, res) => {
    let blog = blogs[req.params.id]

    let templateVars = {
        blog: blog,
        blogID: req.params.id
    }

    res.render('edit_blog', templateVars)
})

app.post('/blogs', (req, res) => {
    console.log(req.body)
    const newBlog = {
        title: req.body.title,
        content: req.body.content
    }

    blogs[Math.random()] = newBlog

    res.redirect("/")
})

app.post('/blogs/:id', (req, res) => {
    const editedBlog = {
        title: req.body.title,
        content: req.body.content
    }

    blogs[req.params.id] = editedBlog

    res.redirect("/")
})

app.post('/blogs/:id/delete', (req, res) => {
    delete blogs[req.params.id]

    res.redirect("/")
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on ${PORT}`)
})