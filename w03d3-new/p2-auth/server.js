const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');

// logging to STDOUT
const morgan = require('morgan');
app.use(morgan('tiny'))

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
  // 1. do I know you? a.ka do you have matching cookie
  const username = req.cookies.username;
  if (username in users) {
    res.render('treasure', { username });
  } else {
    res.redirect('/')
  }
});

// FORMS FOR AUTENTICATION
app.get('/login', (req, res) => {
  res.render('login', { error: undefined, username: undefined });
});

app.post('/login', (req, res) => {
  // 1. extract the login credential being sent in the request; put in a variable
  const { username, password } = req.body
  // console.log('credential :>> ', credentials);
  // 2. Check if we know this user by their username (email)
  const existingUser = users[username];
  // if (existingUser !== undefined) {
  // if (existingUser) {
  if (username in users) {
    // 2a. Yes username exists; check if password matches
    if(password === existingUser.password) {
      // 3. set cookie to the user's unique identifier ==> username
      res.cookie('username', username)
      // 4. pass to where you intended to go; redirect to treasure
      res.redirect('/treasure')
    } else {
      // 2b. send password doesn;t match error
      // res.send('Wrong password, try again!')
      res.render('login', { error: 'Password mismatch', username: username })
    }

  } else {
    // 5. We do not have the username in our db, so send user does not exist error
          // Ideal; send them to the login page again with appropriate error message
    res.status(401).send('Username does not exist, sign up instead?')
  }

})


// STRETCH
app.get('/signup', (req, res) => {
  res.render('signup');
});



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
