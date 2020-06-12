Real World HTTP Servers with Hafiz
===

Hey crew! Congrats! You're becoming web developers. Thanks for an awesome class today.

<a href="https://github.com/hafbau/lecture_notes/tree/master/w3d4-servers-in-the-wild">Link to code and notes repo here.</a>


### What we learn today

- Using bcrypt to hash password; especially the async workflow
- Better to store hashed password vs in plain sight
- plain text cookies can be changed to easilly login as anothre user
- Hashing gets slowers with higher salt rounds -  we used 10 in the demo.
- Prefer using bcrypt asynchronously

- also, its Deb and Dexter MORGAN ;) (I'm a fake fan!)

### To Do
- [x] Security issues (demo_p1)
- [-] REST and Advanced Express (demo_p2)


#### Storing Passwords
* We **never** want to store passwords as plain text
* Passwords should always be _hashed_ 
* **Hashing**:
  * The original string is passed into a function that performs some kind of transformation on it and returns a different string (the _hash_)
  * This is a one way process: a hashed value cannot be retrieved
* We make hashing more secure by adding a _salt_ to the original string prior to hashing
* This [helps to protect against Rainbow Table attacks](https://stackoverflow.com/questions/420843/how-does-password-salt-help-against-a-rainbow-table-attack)

#### Encrypted Cookies
* Plain text cookies can be manipulated by users
* It's better practice to use _encrypted_ cookies
* **Encryption**:
  * Similar to hashing, the string is scrambled/transformed by a function
  * This is a two-way process: encrypted strings can be decrypted by the intended recipient

#### HTTP Secure (HTTPS)

[](./Man-In-The-Middle-Attack.png)

* HTTPS uses Transport Layer Security (TLS) to encrypt communication between client and server
* Encrypted using asymmetric cryptography which uses a public key and private key system
* The public key is available to anyone who wants it and is used to encrypt the communication
* The private key is known only to the receiver and is used to decrypt the communication

#### When to use...
- plain cookies:
    - *almost never use plain cookies*
    - maybe for:
      - language selection
      - shopping cart for non-logged in users
      - analytics
  - encrypted cookies:
    - *do this by default*
    - only store user_id (rest can go in database)
  - server-side sessions
    - *not worth hassle for small projects*
    - if you need to store lots of session data
    - if you frequently change session data
    - you want the ability to invalidate specific users' sessions

- Types of Cryptography:
  - Hashing (one way): Password Encryption
  - Encryption (two way): Cookie Encryption
  - Public Key Crypto: HTTPS

#### REST and Advanced Express

## REST

Representational State Transfer

- REST is a pattern, a convention to organize our url structure

  - Resource based routes convention

  - The key abstraction of information in REST is a resource.

  - REST uses a resource identifier to identify the particular resource involved in an interaction between components.

  - It should use http verbs to express what the request wants to accomplish
  - Resource information must be part of the url
  - It uses common data formats (JSON for API)
  - Communication is stateless
  - Each request must pass all information needed to fulfill the request
  - Idempotency of requests

* REST means that the path that we are going to should represent the data being transferred
* An API that uses the REST convention is said to be RESTful
* RESTful routes look like:

  | **Method** | **Path** | **Purpose** |
  |:---:|:---|:---|
  | GET | /resources | Retrieve all of a resource (Browse) |
  | GET | /resources/:id | Retrieve a particular resource (Read) |
  | POST | /resources/:id | Update a resource (Edit) |
  | POST | /resources | Create a new resource (Add) |
  | POST | /resources/:id/delete | Delete an existing resource (Delete) |

* RESTful API's have some advantages:
  * If I know that your API is RESTful, then I can easily guess at what endpoints you have defined and I don't need to read your documentation to figure it out
  * Results in clean URLs (ie. `/resource` instead of `/get-my-resource`)
  * The desired action is implied by the HTTP verb
  * This method of specifying URLs is chainable (eg. `/user/123`, `/user/123/resource` or `/user/123/resource/456`)

* Selectors are always plural (eg. `/resources`, `/users`)
* Actions are always singular (eg. `/login`, `/register`)

### Express Alternatives
- [Restify (JS)](http://restify.com/)
- [Koa (JS)](https://koajs.com/)
- [Hapi (JS)](https://hapi.dev/api/?v=19.0.5)
- [Sinatra (Ruby)](http://sinatrarb.com/documentation.html)
- [Django (Python)](https://www.djangoproject.com/)

### Express Middleware
- We can bring in third-party middleware (functions) or we can define our own

  ```js
  app.use((req, res, next) => {
    // do something (eg. console.log the current time)
    console.log('Time:', Date.now());
    // call next() when the middleware is finished
    next();
  });
  ```

- Frequently used Express middleware includes loggers (`morgan`) and parsers (`cookie-parser` or `body-parser`)

### More HTTP Methods
- We have more [*verbs*](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) available to us than just `GET` and `POST`
- Popular ones are `PUT`, `PATCH`, and `DELETE`
- `PUT`: used to replace an existing resource
- `PATCH`: update part of an exisiting resource
- `DELETE`: delete an existing resource
- We can access these other methods via AJAX requests (we'll introduce you to AJAX in week 4) or by using the [`method-override`](https://www.npmjs.com/package/method-override) package
- Using these new verbs, our routes table now looks like:

  | **Method** | **Path** | **Purpose** |
  |:---:|:---|:---|
  | GET | /resources | Retrieve all of a resource (Browse) |
  | GET | /resources/:id | Retrieve a particular resource (Read) |
  | PUT | /resources/:id | Replace a resource (Edit) |
  | PATCH | /resources/:id | Update a resource (Edit) |
  | POST | /resources | Create a new resource (Add) |
  | DELETE | /resources/:id | Delete an existing resource (Delete) |

### Modular Routing
- Store routes in multiple files to keep them organized
- In Express, we need to use the Express.Router() method to give us back a **router** object
- All routes will be added to this _router_ object
- Finally, we export the _router_ object from the file to be imported into our Express server file (eg. `server.js`)

  ```js
  // post-router.js
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    // typical route handler in here
    res.send('hello world');
  });

  module.exports = router;

  // server.js
  const postRouter = require('./routes/post-router');
  app.use('/posts', postRouter);
  ```

### JSON API's
- So far, our servers have been returning server-side rendered templates, but our Express server can be configured to return different types of information including strings/objects (`res.send`), files (`res.sendFile`), and JSON (`res.json`)
- JSON API's are concerned only with sending data (as opposed to HTML), so they are typically consumed with AJAX requests

## Back-End API

- An API will only deliver data, typically in JSON
- The routes will add a version of the API

For example, if we were building an API, our routes would be modified.

- `GET /api/1.0/posts`
- `GET /api/1.0/posts/1`
  ...

## References

Interesting links
About REST and naming convention : https://restfulapi.net/resource-naming/
Express modular routing (end of document) : http://expressjs.com/en/guide/routing.html#routing
Method override : https://www.npmjs.com/package/method-override
Express middleware : https://expressjs.com/en/guide/using-middleware.html
JSON APIs responses : https://jsonapi.org/examples
WordPress REST API : https://developer.wordpress.org/rest-api/
https://restfulapi.net/

This note is an adaptaion of Andy's note - Thanks Andy.

Thank you till next time 🤘🏿!