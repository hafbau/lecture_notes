const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

const cookieParser = require('cookie-parser');
app.use(cookieParser()); // add middleware

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // - which renders the correct home page
  // console.log('req :>> ', req.headers.cookie); //'lang=en; rand=om'
  if (req.cookies.lang === 'en') {
    res.render('english');
  } else if (req.cookies.lang === 'fr') {
    res.render('french')
  } else {
    res.render('home');
  }
});

app.get('/lang/en', (req, res) => {
// - server sets your preference and redirects to home
  res.cookie('lang', 'en');
  res.redirect('/');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
