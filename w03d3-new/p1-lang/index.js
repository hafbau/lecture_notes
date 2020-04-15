const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

const cookieParser = require('cookie-parser');
app.use(cookieParser()); // add middleware

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // check user lang preference
  // if its english render english
  // console.log('req :', req.headers.cookie);// lang=en; theme=dark; userid=1;
  if (req.cookies.lang === 'en') {
  } else if (req.cookies.lang === "fr") {
    res.render('french')
  } else {
    res.render("home");
  }
  // else if fr render
  // else  render home
});

// Should have been a POST not GET, since we are changing server state by setting cookies
app.get("/lang/en", (req, res) => {
  res.cookie('lang', 'en')
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
