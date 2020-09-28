Web servers 101
===

## Agenda Today

- [ ] HTTP Review
- [ ] HTTP Servers - Demo
  + [ ] Routing
  + [ ] Templating
- [ ] Express Servers - Demo
  + [ ] EJS


### Intro

- Stress / Imposter syndrome is real
- My style - adaptable
- Decorum


### HTTP Review [10m]

**What are the most important things about HTTP?**

- It's a client/server communication protocol
- It uses/transfers hypertext / html (strings)
- It's request / response cycle


**Request**
 + URL
 + Method (GET / POST / PUT / DELETE)
 + route = url + method
 + body (optional)


**Response**
+ Status Codes (100s / 200s / 300s / 400s / 500s )
+ Body (optional)


**HTTP Stateless**
- https servers have amnesia




### HTTP Servers - Demo [40m]



#### Routing



#### Templating



# B R E A K


### Express [40m]



#### EJS

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


### Things we learned
// ... we did not get to this in class