const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

const cookieParser = require('cookie-parser');
app.use(cookieParser()); // add middleware

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // without cookParser our cookies look like so: lang=en; name=hafiz; hobby=sleeping
  console.log('req :>> ', req.headers.cookie);
  // 1. see if lang cookie is set
  const cookie = req.cookies.lang;
  if (cookie === 'en') {
    // 2. if set to en then render english
    res.render('english')
  } else if(cookie == 'fr') {
    // 3. else if fr render french
    res.render('french')
  } else {
    // 4. ELSE render home
    res.render('home');

  }
});

app.get('/lang/en', (req, res) => {
  // set lang cookie to en
  res.cookie('lang', 'en')
  // redirect back home
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
