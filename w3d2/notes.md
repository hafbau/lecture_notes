CRUD with Express
===

a.k.a BREAD for jokes

## Review what happens when user starts a request [10m]

[Clean simple](https://s3.amazonaws.com/codecademy-content/projects/3/request-response-cycle-dynamic.svg)
[Hand drawn](https://i.imgur.com/t1I0qON.jpg)

## Let's build something - I've got an idea [5m]

Let's create a dad jokes website where users can:

- Browse a list of dad jokes
- Read details of a particular dad joke
- Edit (Update) a particular dad joke
- Add (Create) a dad joke
- Destroy (Delete) a dad particular joke

- Users can comment on a particular joke?

## Lets design our endpoints [5m]

### End Points

We design design the following end points for our jokes app:

| Action                                | http verb | RESTful end point        | HTML5 end point                |
| ------------------------------------- | --------- | ------------------------ | ------------------------ |
| List all jokes                        | GET       | get '/jokes'             |                          |
| Get a specific joke                    | GET       | get '/jokes/:id'         |                          |
| Display the new form                  | GET       | get '/jokes/new          |                          |
| Create a new joke                     | POST      | post '/jokes             |                          |
| Display the form for updating a joke  | GET       | get '/jokes/:id/edit'    |                          |
| Update the jokes                      | PUT       | put '/jokes/:id          | post '/jokes/:id/edit    |
| Deleting a specific joke               | DELETE    | delete '/jokes/:id'      | post '/jokes/:id/delete' |

#### Nested Resources

You may need to access a nested resources. For example, you need to create a new comment.

| Action               | http verb | end point                  |
| -------------------- | --------- | -------------------------- |
| Create a new comment | POST      | post '/jokes/:id/comments |


## Where do we go from here - The Express! [5m]

- Express is a Web framework for NodeJS
  - Gives us Routing
  - Layered on top of node HTTP server
  - Can Use Template Engine


**Create a joke**

- [workflow reminder](https://s3.amazonaws.com/codecademy-content/projects/3/two-turns-post.svg)

So:

What do we want to do? Show a form to create joke.

```js
app.get('/jokes/new', (req, res) => {
 res.render('new_joke')
})
```

What attributes has a joke:

- text, image, comments (not during creation)


**Show joke**

- endpoint `/jokes/:id`


# B R E A K
**RESUME RECORDING**

**What should a joke page look like?**

- has an image
- full text of joke
- number of comments
- edit and delete links
- comments section
  + heading
  + form to add comment
  + list of the comments

**Edit Joke**

**Delete Joke**

**Post new comments?**

### What we learned today

- Learned that delete requests can be accomplished with post requests in html5