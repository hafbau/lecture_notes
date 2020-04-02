const router = reuire('express').Router()

router.get("/", (req, res) => {
  const userID = req.session.user_id
  const user = users[userID];
  const myURL = urlsForUser(userID);
  const templateVars = {
    user: user,
    urls: myURL
  };
  console.log('USER: ', userID);
  console.log('DATA: ', users[userID]);



  res.render("urls_index", templateVars);
});



router.get("/:shortURL", (req, res) => {
  const shortURL = req.params.shortURL;
  const longURL = urlDatabase[shortURL];

  const userID = req.session.user_id;
  const user = users[userID];

  const templateVars = {
    user: user,
    shortURL,
    longURL
  };
  // const templateVars = { username: req.cookies['username'] , shortURL , longURL };

  res.render("urls_show", templateVars);
});

router.get("/u/:shortURL", (req, res) => {
  const shortURL = req.params['shortURL'];
  const longURL = urlDatabase[shortURL]['longURL'];

  res.redirect(longURL);
});

module.exports = router.routes()