const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');

// logging to STDOUT
const morgan = require('morgan');
app.use(morgan('combined'))

app.use(cookieParser());

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
app.get('/', (req, res) => {
  res.render('home');
});

// Any user can view the treasure (as long as you are logged in)
app.get('/treasure', (req, res) => {
  // check if cookie is set
  const { username } = req.cookies;
  if(username in users) {
    const loggedInUser = users[username];

    const templateVars = {
      username: loggedInUser.username,
      password: loggedInUser.password
    }
    res.render('treasure', loggedInUser);
  } else {
    res.redirect('/')
  }
});

// FORMS FOR AUTENTICATION
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  // extract the submitted credentials => username / password
  const { username, password } = req.body;
  const existingUser = users[username];

  // THIS IS AN ALTERNATIVE WAY OF THINKING ABOUT THE WORKFLOW
  // if (existingUser && existingUser.password === password) {
  //   // set cookie and redirect
  // } else {
  //   // username or passwor error
  // }

  // check first if we know the username
  if (username in users) {
    // check second, if the password matches the db
    // { username: 'kv', password: '123', firstName: 'Khurram' }
    
    if (existingUser.password === password) {
      // set cookie
      res.cookie('username', username);
      // once cookie is set, redirect home
      res.redirect('/')
    } else {
      // ELSE send error = password mismatch; reset password?
      res.status(401)
      res.send('Password mismatch. <a href="/reset-password">Reset password</a>')
    }
  } else {
    // ELSE send some error = user not found, register instead
    res.status(401)
    res.send('No account under your name. <a href="/signup">Sign up instead?</a>')
  }



})

app.get('/signup', (req, res) => {
  // const newUser = {
  //   id: randlsadfjlksdhkf,
  //   ksfk
  // }
  res.render('signup');
});



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
