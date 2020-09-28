Web servers 101
===

Thanks crew! Here are things we talked about today:

## Agenda Today

- [x] HTTP Review
- [x] HTTP Servers - Demo
  + [x] Routing
  + [x] Templating
- [x] Express Servers - Demo
  + [x] EJS

### Thoughts from past students on what was learned
- Learned that we could build web application with the `http` from scratch but routing was tedious.
- The Express module is much nicer to use than the native `http` module. With its clean routing
- Using EJS for templating. Interspersing logic (JS code) with markup (html code). Makes dynamic templating smooth. This uses alligator tags `<% %>` and `<%= %>`
- We saw `nodemon` for restarting our servers when we make changes. On vagrant, you'll be doing `npx nodemon -L`. Feel free to talk to a mentor about that.


[Code we wrote are here.](https://github.com/hafbau/lecture_notes/tree/master/w3d1)

[I want to put Travis' Note here as well, I think they are great.](https://web.compass.lighthouselabs.ca/activities/178/lectures/3423)


### Notes about EJS

- Install ejs for it to be available for express to use: `npm i ejs`

- Create a `views` directory in your root directory. Express will look for your template files in the views directory. Make sure to have it.

> For example we created an `index.ejs` file within the views directory of our express_demo project.

- In our `server.js` file, we can now call `response.render` function instead of the generic `response.send`. Like so:

```js
// ... rest of the code removed for brevity; see express_demo/server.js for complete code
// response.render(templateRelativePath, localVariablesToBeUsedInTemplate)
  // response.render('user/index')
  response.render('index.ejs', localVariablesToBeUsedInTemplate);
  // More about localVariablesToBeUsedInTemplate:
  // 1. It is ALWAYS an object with key-value pairs
  // 2. The keys will be available as local variables in the template
  // 3. We can access these local variables in the template using the aligator tags
```

- Tell express that the view engine is `ejs`:

```js
server.set('view engine', 'ejs')
```
> This will make is unncessary to include the template extension during render
> With the line above we will now do `response.render('index')` instead of `response.render('index.ejs')`

- EJS partials are how you use a template within another template. (we did not go into this in class - watch out for it on Compass)


## Resources

- [Code Metrics - for code complexity warnings](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)
- [nodemon for restarting your server on save](https://www.npmjs.com/package/nodemon)