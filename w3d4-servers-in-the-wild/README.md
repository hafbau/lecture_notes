Real World HTTP Servers with Hafiz
===

Hey crew! Congrats! You're becoming web developers. Thanks for an awesome class today.

<a href="https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w3d4-servers-in-the-wild">Link to code and notes repo here.</a>

## HTTP Review
We reviewed HTTP as protocol between clients (e.g. browser, curl, Postman etc) and server.

- HTTP has a request / response cycle

*Request*

- method
- action
- data
  + params
  + body
  + headers (cookie)
  + query

*Response*

- data (json / html / error?)
- status code
- headers (set-cookie, format etc)

*ExpressJS Response Methods that end the request/response cycle*

When you call any of the following functions, the request / response cycle is complete, and no more responses can be sent.

| Method            |	Description                                     |
| ----------------- | ----------------------------------------------- |
| res.download()	  | Prompt a file to be downloaded.                  |
| res.end()         |	End the response process.                       |
| res.json()        |	Send a JSON response.                           |
| res.jsonp()       |	Send a JSON response with JSONP support.        |
| res.redirect()    |	Redirect a request.                             |
| res.render()      |	Render a view template.                         |
| res.send()        |	Send a response of various types.               |
| res.sendFile()    |	Send a file as an octet stream.                  |
| res.sendStatus()  |	Set the response status code and send its string representation as the response body. |

## Tiny App vs the world

**Tiny App workflow / Elements of TinyApp**
Basic elements of TinyApp (webserver):

- Routing
- Middlewares
- Views (Templates)
- Data stores (someone mentioned Models??)


We talked about the `have nots` and `haves` in TinyApp:

**TinyApp Have nots**
- not hosted / no https
- no real db
- no CSS
- only uses get / post
- secret in open
- error handling
- testing

**Have**
- uses bcrypt
- email auth
- real stack


## RESTful Routing

### App ideation
We came up with **Slo~w~gram** - an app to share photos! Where do we start?
We need to start with defining the business logic (user stories), which describe what our application _is_ and how a user can _interact_ with the application.

e.g. from our lecture

```
- user sees login page and logs in
- user can register
- upload photos
- view your photsos
- view one photo
- edit and share photo
- delete photo
- categories photos into albums
- friends comment on photos
```

Once I have some user stories set up, then, we looked at these stories and start picking out the "resources" or _nouns_ that appear in here and the "verbs" or _actions_ that need to be done on those resources.

```
Resources and Verbs:

photo => *see* all photos
photo => *see* one photo of all photos
photo => *add* one photo
photo => *edit* one photo of all photos
photo => *delete* one photo of all photos
photo => *share* one photo of all photos

albums => *create* an album
albums => *add*
```

Each of these things can be mapped to the HTTP verbs!

### RESTful routes (endpoints) for our app
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

#### Nested Resources

We needed to access a nested resources. For example, add a photo to an album.

| Action                  | http verb | end point                  |
| ----------------------- | --------- | -------------------------- |
| Add a photo to an album | POST      | post '/albums/:albumId/photos  |

## Back-End API

- An API will only deliver data, typically in JSON
- The routes will add a version of the API

For example, if we were building an API, our routes would be modified.

- `GET /api/1.0/posts`
- `GET /api/1.0/posts/1`
  ...

### Conventional Data Format

In the case of an API, what do we expect when we do

GET users => a list of users

```
[
  {id: 1,
  first_name: 'Clark',
  last_name: 'Ken',
  ...},
  {id: 2,
  first_name: 'Bruce',
  last_name: 'Wayne',
  ...},
]
```

## Alternatives
### REST alternatives

- GraphQL

GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.

### Alternatives to Express

Koa.js (Javascript) - https://koajs.com/
Sinatra (Ruby) - http://sinatrarb.com/
Flask (Python) - http://flask.pocoo.org/

## Middlewares

*Middleware* functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.


## Modularizing Code

### Routes
To keep our files from becoming 200+ lines long, we can split our app into smaller "routers" where we store the routes for everything that follows a common prefix. For example, every one of our `/photos/*` routes could be put into a common router, which can be attached to every `/photos/*` request.

Take a look at how I define those routes in the `routes/photos.js` file, specifically looking at the `express.Router()` command. From that file, I can export the routes (see the bottom of that file).

In another file, like our `server.js`, we can import those routes and register them to a particular _prefix_ (e.g. `/photos`).

```
app.use('/photos', photoRoutes)
```

#### Other thoughts about modularization

We talked about *Data Access Helpers* (see `demo/dataAccess.js`) to avoid polluting our route handlers.

## References

Interesting links:

- About REST and naming convention : https://restfulapi.net/resource-naming/
- Express modular routing (end of document) : http://expressjs.com/en/guide/routing.html#routing
- Method override : https://www.npmjs.com/package/method-override
- Express middleware : https://expressjs.com/en/guide/using-middleware.html
- JSON APIs responses : https://jsonapi.org/examples
- WordPress REST API : https://developer.wordpress.org/rest-api/
https://restfulapi.net/

Thank you till next time 🤘🏿!