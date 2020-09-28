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
  + [-] Middleware (stretch!)

## Things we learned

- The Express module is much nicer to use than the native `http` module. With its clean routing
- It's really important to understand what's happening in the background when using tools that make our lives easier. This is why we saw the `http` module, then `express`
- New syntax is always exciting; with regards to the alligator tags `<% %>` and `<%= %>`
- The use of custom render function to link html strings. And also, using `res.render` in express for templating purpose!


### Other thoughts from past students
- Using EJS for templating. Interspersing logic (JS code) with markup (html code). Makes dynamic templating smooth. This uses alligator tags `<% %>` and `<%= %>`
- Learned that we could build web application with the `http` from scratch but routing was tedious.
- We saw `nodemon` for restarting our servers when we make changes. On vagrant, you'll be doing `npx nodemon -L`. Feel free to talk to a mentor about that.


[Code we wrote are here.](https://github.com/hafbau/lecture_notes/tree/master/w3d1)

[I want to put Travis' Note here as well, I think they are great.](https://web.compass.lighthouselabs.ca/activities/178/lectures/3423)

## Resources

- [Code Metrics - for code complexity warnings](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)
- [nodemon for restarting your server on save](https://www.npmjs.com/package/nodemon)