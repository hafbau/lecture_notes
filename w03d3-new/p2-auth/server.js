const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

// Use cookies!
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');

// logging to STDOUT
const morgan = require('morgan');

app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('tiny'))
app.set("view engine", "ejs");

// APP LOGIC STARTS

// FAKE USER DB
const users = {
  "kv": { username: "kv", password: "123", firstName: "Khurram" },
  "al": { username: "al", password: "456", firstName: "Andy" }
};

// ALL THE ROUTES

app.get("/", (req, res) => {
  res.render('home');
});

// Any user can view the treasure (as long as you are logged in)
app.get("/treasure", (req, res) => {
  // Check if user is logged in
  // check if username cookie is set and if we know the username (exists in users db)
  const { username } = req.cookies;
  const loggedInUser = users[username];

  if (loggedInUser) {
    const templateVars = {
      user: loggedInUser
    }
    res.render("treasure", templateVars);
  } else {
    res.redirect('/');
  }
});

// FORMS FOR AUTENTICATION
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  // Check req.body for submitted creds
  const { username, password } = req.body;
  const existingUser = users[username];
  if (existingUser && existingUser.password === password) {
    res.cookie('username', username);
    res.redirect('/')
  } else {
    // typically you want to rerender the page with Errors!
    // I'm being lazy
    res.send('I dont know you')
  }
  // if server knows user, then let'em in other OUT!!!

})


app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/:some', (req, res) => {

})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
