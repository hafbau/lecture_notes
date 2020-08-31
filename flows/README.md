Web servers 101
===

Thanks crew! Here are we talked about today:

## Agenda Today

- [x] HTTP Review
- [x] HTTP Servers - Demo
  + [x] Routing
  + [x] Templating
- [x] Express Servers - Demo
  + [x] EJS
  + [x] Middleware (stretch!)

## Things we learned

- Using Express module vs using the native `http` module. With its clean routing ..er.. middlewares
- Using EJS for templating. Interspersing logic (JS code) with markup (html code). Makes dynamic templating smooth. This uses alligator tags `<% %>` and `<%= %>`
- Learned that we could build web application with the `http` from scratch but routing was tedious.
- Learned refactoring `routeHandlers` into their own files (module)
- We saw `nodemon` for restarting our servers when we make changes. On vagrant, you'll be doing `npx nodemon -L`. Feel free to talk to a mentor about that.


[Code we wrote are here.](https://github.com/hafbau/lecture_notes/tree/master/w3d1)

[I want to put Travis' Note here as well, I think they are great.](https://web.compass.lighthouselabs.ca/activities/178/lectures/3423)