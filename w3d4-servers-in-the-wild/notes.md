# W3D4 Security & Real World HTTP Servers

### To Do
- [ ] Security issues
- [ ] REST
- [ ] More HTTP methods
- [ ] Method Override
- [ ] Express Middleware
- [ ] Modular Routing
- [ ] JSON API's
- [ ] Alternatives to ExpressJS

### Security Issues

- Ideas on fixing storing passowrd

+ store a reference to the password rather the password
+ also paybe encrypt the database

- Hashing
  + username = jl
  + password = 'password'
  hash = hashing(password)// one-encryption

  hakhdfakhdfo98ewqh3rk9yadfhkr39


- Why not hashing for cookies
  + Performance
  + You will now have to save cookies in some db

- Encryption Cookie
  - encryption at rest

- pub/private key pair encryption
TLS // encryption in trasit
lets Encrypt

```js
const hash = (str, salt) => {
  hashStr = AES(str)
  for ( i < salt)
  hash(hashStr)
}
```
- using bcrypt


### What we learn today

- Using bcrypt to hash password; especially the async workflow
- Better to store hashed password vs in plain sight
- plain text cookies can be changed to easilly login as anothre user
- Hashing gets slowers with higher salt
- dont use bcrypt synchronously

Put a link to rainbow attack














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
| Display the form for updating a photo   | GET       | get '/photos/:id/update'  |
| Update the photos                       | PUT       | put '/photos/:id          |
| Deleting a specific photo                | DELETE    | delete '/photos:id'       |

##### Nested Resources

We needed to access a nested resources. For example, add a photo to an album.

| Action                  | http verb | end point                  |
| ----------------------- | --------- | -------------------------- |
| Add a photo to an album | POST      | post '/albums/:albumId/photos  |


### REST (Representational State Transfer)

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

### Express Middleware

[](./middleware.png)

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


### Express Alternatives
- [Restify (JS)](http://restify.com/)
- [Koa (JS)](https://koajs.com/)
- [Hapi (JS)](https://hapi.dev/api/?v=19.0.5)
- [Sinatra (Ruby)](http://sinatrarb.com/documentation.html)
- [Django (Python)](https://www.djangoproject.com/)