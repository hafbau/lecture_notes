const express = require('express');
const bcrypt =  require('bcrypt');
const cookieSession = require('cookie-session');
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

// const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');

// logging to STDOUT
const morgan = require('morgan');
app.use(morgan('tiny'))

// app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['superlongsecretkey', 'anothersecretthatshouldnotbeembeddedincodetypically']
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

// APP LOGIC STARTS

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
  console.log('req,', req)
  // 'username=al' => { username: 'al'}
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
  // 1. extract the login credential being sent in the request;
  const { username, password } = req.body;
  // 2. Check if we know this user by their username (email)
  const existingUser = users[username];
  // key in object
  if (username in users) {
    // 2a. Yes username exists; check if password matches
    bcrypt.compare(password, existingUser.password, function(err, isPasswordMatched) {
      console.log('isPasswordMatched :>> ', isPasswordMatched);
      if(isPasswordMatched) {
        // 3. set cookie to the user's unique identifier ==> username
        // res.cookie('username', username)
        req.session.username = username;
        // 4. pass to where you intended to go; redirect to treasure
        res.redirect('/treasure')
      } else {
        // 2b. send password doesn;t match error
        // res.send('Wrong password, try again!')
        res.render('login', { error: 'Password mismatch', username: username })
      }

    })
   

  } else {
    // 5. We do not have the username in our db, so send user does not exist error
    res.status(401)
    res.render(
      'login', { error: 'No account under your name. Sign up instead?' }
    )
  }
})

app.get('/signup', (req, res) => {
  res.render('signup', { error: undefined, submittedData: {} });
});

app.post('/signup', (req, res) => {
  const {
    username,
    password,
    firstName
  } = req.body;
  
  if (username in users) {
    res.status(400)
    res.render('signup', { error: 'Username already exist', submittedData: {} })
  } else {
    bcrypt.hash(password, 5, function(err, hashedPassword) {
      // Store hash in your password DB.
      users[username] = {
        username,
        password: hashedPassword,
        firstName
      };
    });
      

      req.session.username = username;
      res.redirect('/')
  }
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
