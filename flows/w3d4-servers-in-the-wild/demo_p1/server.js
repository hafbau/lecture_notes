const express = require('express');

// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')
const bcrypt   = require('bcrypt');
const saltRounds = 10;

const app = express();
const PORT = 8000;
// logging to STDOUT
const morgan = require('morgan');
app.use(morgan('tiny'))

app.use(cookieSession({
  name: 'session',
  keys: [
    'supersecretstringthatshouldideallybesavednotincodebutforsuresuperlong',
    'anotherlongone'
  ]
}));

// SET SESSION / COOKIE
// res.cookie('username', username) ===> req.session.username = username

// GET SESSION
// req.cookies.username ===> req.session.username
// const { username } = req.session ===> const { username } = req.session

// clearing session
// req.clearCookie() ===> req.session.username = null;

// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// FAKE USER DB
const users = {
  'kv': { username: 'kv', password: '123', firstName: 'Khurram' },
  'al': { username: 'al', password: '456', firstName: 'Andy' }
};

// ALL THE ROUTES
app.get('/admin/users', (req, res) => {
  res.json(users);
})

app.get('/', (req, res) => {
  const { username } = req.session;
  if(username in users) {
    res.redirect('/treasure')
  } else {
    res.render('home');
  }
});

// PROTECTED ROUTE
app.get('/treasure', (req, res) => {
  // check if cookie is set
  // 'username=kv; lang=en'
  const { username } = req.session;

  if(username in users) {
    const loggedInUser = users[username];

    const templateVars = {
      username: loggedInUser.username,
      //password: loggedInUser.password
    }
    res.render("treasure", templateVars);
  } else {
    res.redirect('/')
  }
});

app.get('/login', (req, res) => {
  res.render('login', { error: undefined });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const existingUser = users[username];

  // if (username in users) {
  if (existingUser) {
    bcrypt.compare(password, existingUser.password, function (err, isPasswordMatch) {
      // Store hash in your password DB.
      // newHash = hash the submitted password
      // compare the already existinghashed password to the newhash password
      if (isPasswordMatch) {
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
    });

    
  } else {
    res.status(401)
    res.render(
      'login', { error: 'No account under your name. Sign up instead?' }
    )
  }
})

app.get('/signup', (req, res) => {
  res.render('signup', { error: undefined, submittedData: null });
});

app.post('/signup', (req, res) => {
  const {
    username,
    password,
    firstName
  } = req.body;
  console.log('password :>> ', password);
  
  if (username in users) {
    res.status(400)
    res.render('signup', { error: 'Username already exist', submittedData: {} })
  } else {
    // hashedPassword will be undefined since bycrypt.hash is async
    // const hashedPassword = bcrypt.hash(password, saltRounds, function (err, hash) {
      //  DO NOT USE THE BELOW SYNC VERSION OF BCRYPT
    // bcrypt.hashSync(password, saltRounds, function (err, hash) {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      // Store hash in your password DB.
      console.log('hashedPassword :>> ', hash);
      users[username] = {
        username,
        password: hash,
        firstName
      };

      req.session.username = username;
      res.redirect('/')
    });

    // req.session.username = username;
    // res.redirect('/')
  }
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
