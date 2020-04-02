// expresS_server.js

const express = require("express");
const app = express();
var methodOverride = require('method-override')
const PORT = 8080; // default port 8080
app.set("view engine", "ejs");

const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');

const urlRoutes = require('./routes/urls')

const { } = require('./helpers');
// const morgan = require('morgan')
app.use(methodOverride('_method'))
app.use((req, res, next) => {
  const start = Date.now();
  console.log('Endpoint', req.method, req.url);
  next();
  const time = Date.now() - start
  console.log('time it took', time, 'ms')
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
  name: 'session',
  keys: ['secret' , 'terces'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// ============================== GLOBALS ================================= //



// ============================== GET REQUESTS ================================= //
app.use((req, res, next) => {
  const userID = req.session.user_id;
  const user = users[userID]
  req.user = user;
  next()
})
app.use('/urls', urlRoutes)
// req.session.user_id = "some value";
// req.session.user_id
// req.session.user_id = null;


app.get("/new", (req, res) => {

  if(req.user){
  	// const user = users[userID];
  	const templateVars = { user: req.user };
  	res.render("urls_new" , templateVars);
  } 
  else {
  	res.redirect('/urls');
  }
});

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/register", (req, res) => {

  res.render("urls_user");
});
app.get("/login", (req, res) => {

  res.render("urls_login");
});

// ============================== POST REQUESTS ================================= //

app.post("/urls", (req, res) => {
  const longURL = req.body.longURL;
  const shortURL = generateRandomString();
  urlDatabase[shortURL] = longURL;
  // res.redirect(`/urls/${shortURL}`);    
  res.redirect('/urls');            
});

app.delete("/urls/:shortURL/delete", (req, res) => {
  const userID = req.session.user_id;
  const shortURL = req.params['shortURL'];
  if(urlDatabase[shortURL]['userID'] === userID) {
  	delete urlDatabase[shortURL];
  	res.redirect('/urls'); 
  }
  else {
  	res.redirect('/urls');
  }                
});



app.post("/urls/:shortURL", (req, res) => {
  const shortURL = req.params.shortURL;
  res.redirect(`/urls/${shortURL}`);                
});



app.post("/urls/:shortURL/edit", (req, res) => {
  const shortURL = req.params['shortURL'];
  const longURL = req.body['longURL'];
  const userID = req.session.user_id;
 
  if(urlDatabase[shortURL]['userID'] === userID) {
  	urlDatabase[shortURL]['longURL'] = longURL;
  }

  res.redirect('/urls');                
});



app.post("/login", (req, res) => {  
  const pw = req.body['password'];
  const email = req.body['emailAddress'];
  const pwStored = getPW(email);
  const hashedPassword = bcrypt.hashSync(pw, 10);
  
  let userID = getKey(users , email);
  if(!checkEmail(users , email) && bcrypt.compareSync(pw, hashedPassword)) {
    console.log('LOGGED IN');
  	req.session.user_id = userID;
  	res.redirect('/urls');
  }
  else {
  	res.status(400).send('Invalid email / password'); 
  	}        
});



app.post("/logout", (req, res) => {
  req.session = null;
  res.status(200).redirect('/urls');               
});



app.post("/register", (req, res) => {
	const test = req.body.emailAddress;
	const password = req.body['password'];
	const hashedPassword = bcrypt.hashSync(password, 10);

	// Check if valid email and password input
  	if(test.length !== 0 && checkEmail(users , test)) {
  		let newUser = {};
  		userID = generateRandomString();

  		newUser['id'] = userID;
  		newUser['email'] = req.body.emailAddress;
  		newUser['password'] = hashedPassword;

  		users[userID] = newUser;
      req.session.user_id = userID;
  		//res.cookie("user_id" , userID);
  		res.redirect('/urls')
  	}
  	

  	// Email or password is invalid
  	else {
  		res.status(400).send('Invalid email / password'); 
  	}
});




// ================================== LISTEN ===================================== //

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

