# W3D4 Security & Real World HTTP Servers

Hey folks, thanks for putting up with me today. The lecture ran long - sorry about that 😐. Here are notes about the things we covered today and others we didn't get to.

### To Do
- [x] Security issues
- [x] REST
- [x] More HTTP methods
- [x] Method Override
- [x] Express Middleware
- [-] Modular Routing (stretch)
- [-] JSON API's (notes)
- [-] Alternatives to ExpressJS (notes)

### Security Issues

**Three loopholes of the demo:**
- Password in plain text
- Cookies not secure
- Unencrypted data across network (http)

```js
const hashWithSaltround = (sltRnd, password) => {
  let hash = password
  for(let i = 0; i < sltRnd; i++) {
    hash = hashFn(hash)
  }
  return hash
}
```

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

##### When to use...
- plain cookies:


- encrypted cookies


#### HTTP Secure (HTTPS)

[See Image](./Man-In-The-Middle-Attack.png)
* HTTPS uses Transport Layer Security (TLS) to encrypt communication between client and server
* Encrypted using asymmetric cryptography which uses a public key and private key system
* The public key is available to anyone who wants it and is used to encrypt the communication
* The private key is known only to the receiver and is used to decrypt the communication


### Class Quiz

https://gist.github.com/hafbau/661e2f961184cc2fe18714dfddc54cc6

photo => *see* all photos
photo => *see* one photo of all photos
photo => *add* one photo
photo => *edit* one photo of all photos
photo => *delete* one photo of all photos
photo => *share* one photo of all photos

albums => *create* an album
albums => *add*

Each of these things can be mapped to the HTTP verbs!

#### RESTful routes (endpoints) for our app
By following REST principles, which really answers two simple questions we can generate _most_ of the routes that our application should have.

1. What resources are we dealing with?
2. What are we doing to those resources?

Here's what we came up with for the design of our end points:

| Action                                  | http verb | end point                 |
| --------------------------------------- | --------- | ------------------------- |
| List all photos                         | GET       | get '/photos'             |
| Get a specific photo                     | GET       | get '/photos/:id'         |
| Display the new form                    | GET       | get '/photos/new         |
| Create a new photo                      | POST      | post '/photos           |
| Display the form for updating a photo   | GET       | get '/photos/:id/edit'  |
| Update the photos                       | PUT       | put '/photos/:id          |
| Deleting a specific photo                | DELETE    | delete '/photos/:id'       |

##### Nested Resources

We needed to access a nested resources. For example, add a photo to an album.

| Action                  | http verb | end point                  |
| ----------------------- | --------- | -------------------------- |
| Add a photo to an album | POST      | post '/albums/:albumId/photos  |


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


### Express Middleware

[See Image](./middleware.png)

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


### Express Alternatives
- [Restify (JS)](http://restify.com/)
- [Koa (JS)](https://koajs.com/)
- [Hapi (JS)](https://hapi.dev/api/?v=19.0.5)
- [Sinatra (Ruby)](http://sinatrarb.com/documentation.html)
- [Django (Python)](https://www.djangoproject.com/)