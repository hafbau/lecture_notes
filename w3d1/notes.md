Web servers 101
===

## Agenda Today

- [x] HTTP Review
- [x] HTTP Servers - Demo
  + [x] Routing
  + [x] Templating
- [x] Express Servers - Demo
  + [x] EJS
  + [x] Middleware (stretch!)

> Promises have 3 states: Pending / resolved / rejected

### HTTP Review [10m]

**What are the most important things about HTTP?**

- HTTP is request / response cycle based. It cannot respond without a request
- Request
  + URL akas / Path / Address
  + HTTP methods e.g. GET, POST
  + They are asynchronous
  + url + method === endpoints

- Response
  + Status codes  e.g 200 / 300 / 400 / 500
  + Body
  + Headers

- HTTP is stateless


### HTTP Servers - Demo [40m]



#### Routing



#### Templating



# B R E A K


### Express [40m]



#### EJS



#### Middleware



### Things we learned

- Using Express module vs using the native `http` module. With its clean routing ..er.. middlewares
- Using EJS for templating. Interspersing logic (JS code) with markup (html code). Makes dynamic templating smooth. This uses alligator tags `<% %>` and `<%= %>`
- Learned that we could build web application with the `http` from scratch but routing was tedious.
- Learned refactoring `routeHandlers` into their own files (module)
- We saw `nodemon` for restarting our servers when we make changes. On vagrant, you'll be doing `npx nodemon -L`. Feel free to talk to a mentor about that.