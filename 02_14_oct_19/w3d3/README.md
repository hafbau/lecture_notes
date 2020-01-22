HTTP Cookies & User Authentication
===

Thanks for today! We took our `Coffee Runs` application further by implementing authentication.

[Code we wrote is here.](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w3d3)

Here are the things we covered:

(Shout out to Francis (instructor from Montreal) for [the original notes](https://github.com/FrancisBourgouin/lhl-12-w3d3/blob/master/README.md) that I adapted.)

## Review of W3D2 code
- Focus on modularization and error driven development.

## Http is stateless

What do we mean by statelessness?

- The server's got amnesia. It doesn't remember you (context)
- The server processes every request like a new request
- [xkcd](https://xkcd.com/869/)

What is state?

- Application state is server-side data which servers store to identify incoming client requests, their previous interaction details, and current context information.
- Ex: login state, logout state
- short / long term

### Benefits

- Scalability - no session related dependency
- Less complex - less synchroniztion
- Easier to cache
- The server can't have amnesia since it can't remember wtf. It cannot lose track of information

### Disadvantages

- cannot easily keep track context
- context has to provided each time
- Good for transactions, not good for conversations.

## Using cookies to remember the user (simple context in general)

### How cookies work

- a cookie is a small text file that is stored by a browser on the user’s machine

- a collection of key-value pairs that store information
  - shopping-cart, game scores, ads, and logins

`name=hafiz; style=weirdo;`

- The response header will set the cookie

  Set-Cookie: <em>value</em>[; expires=<em>date</em>][; domain=<em>domain</em>][; path=<em>path</em>][; secure]

- The browser will store the cookie
- The browser will send the cookie in the request headers of subsequent requests
- can be set for a specific domain
- can have an expiration date, if not session cookie

### Using cookie-parser

- We're going to store the user id in the cookies
- We need to install a middleware in Express to process the cookie: cookie-parser
  - setting the cookie: `res.cookie('cookieName','cookieValue')` e.g. `res.cookie('userId', 12344)`
  - reading the cookie: `req.cookies.cookieName` OR `req.cookies[cookieName]` e.g. `res.cookie.userId`

### Registration workflow
  - We need a link on the home page that links to the registration form [/register ]
  - We need the registration form to be rendered [GET /register]
  - Handle submission of the form [POST /register]
    + add user to data store
    + tell browser to keep cookie
    + redirect to home
    + of course VALIDATIONS!!

```js
// GET /register
app.get('/register', (req, res) => {
  // Could check if user is already logged in?
  res.render('register')
})

// POST /register
app.post('/register', (req, res) => {
  // if the form is wired up correctly
  const { email, password } = req.body;
  // addUser is a function that we will create (must have created). This function contains the logic to add user into our data store
  const createdUser = addUser(req.body);

  res.cookie('userId', createdUser.id);
  res.redirect('/');
})
```

### Security Concerns

- In transit
  + http is transfered in plain text
  + vulnerable to sniffing; request being intercepted in transit. The captured cookie can then be set manually
  + solution: use https
  + cookie option
    - secure: ensure only https i.e `{ secure: true }`
    - httpOnly: prevents javascript to access cookies with `document.cookie` i.e `{ httpOnly: true }

  ```js
  const cookieParser = require('cookie-parser');

  //...
  // encouraging the browser to enforce https with { secure: true }
  // instructing the browser to not allow access via javascript; { httpOnly: true }
  // still storing in plain text though
  app.use(cookieParser({ secure: true, httpOnly: true }));
  ```

- At rest
  + Cookies are stored in plain text in the browser
  + You can access it in developer tools
  + Encrypted cookies to the rescue - `cookie-session`
    - setting the cookie: `req.session.cookieName = 'cookieValue'` e.g. `res.session.userId = 12344)`
    - reading the cookie: `req.session.cookieName` OR `req.session[cookieName]` e.g. `res.session.userId`

  ```js
  const cookieSession = require('cookie-session');

  app.use(
    cookieSession({
      name: "session",
      keys: ["mysupersecretkeythatshouldnotbehereinplainsight,ifIamarealdeveloper!"]
    })
  );
  ```

### About that password
**Never ever** store password in plain text! eek!

#### Difference between encrypted and hashing

##### Hash

- turns a message into a combination of text + number + special characters
- Hashing is a 1 way process. You cannot retrieve the original string from the hash
- Useful for passwords
- The password entered will be hashed and the 2 hashed will be compared

##### Encryption

- Encryption turns data into a series of unreadable characters
- Encrypted strings can be reversed if you have the key

#### Bcrypt

- Bcrypt will hash the password with a salt to make it more resistant to attacks
- Bcrypt will slow down the server. It should be async. Tricky! Note that we're using the `Sync` versions though.
- Beware, you could run into version dependecies issues as well. Hail a mentor if that happens.

```js
const bcrypt = require('bcrypt')

// somewhere within registration logic
// before you save the user to your data store
const hashedPassword = bcrypt.hashSync(password)
userData.password = hashedPassword
const createdUser = addUser(userData)
// ... rest of registration logic

// somewhere within LOGIN logic
// after checking if email / username exists in the database
const passwordIsMatched = bcrypt.compareSync(
  userFromOurDataStore.password,
  currentPasswordEnteredByUserFromReq.body
)
if (passwordIsMatched) {
  // success log user in / set cookie

  // redirect somewhere; home?
} else {
  // error message
}
```