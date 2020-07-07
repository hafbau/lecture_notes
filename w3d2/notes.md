CRUD with Express
===

a.k.a BREAD for jokes

## Review what happens when user starts a request [10m]

[Clean simple](https://s3.amazonaws.com/codecademy-content/projects/3/request-response-cycle-dynamic.svg)
[Hand drawn](https://i.imgur.com/t1I0qON.jpg)

## Let's build something - I've got an idea [5m]

Let's create a dad jokes website where users can:

- Browse through a list of jokes
- Add our own good dad joke
- Read more detail about a joke
  - read comments on a particular joke
  - add your own comment
- Edit a dad joke
- Delete a joke

Uniform **Resource** Locator


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
| Update the jokes                      | PUT       | put '/jokes/:id          | post '/jokes/:id    |
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

## Demo

### Browse jokes

### Create a joke

- [workflow reminder](https://s3.amazonaws.com/codecademy-content/projects/3/two-turns-post.svg)

Soooo:


What attributes has a joke:

- text, image, comments (not during creation)




# B R E A K
**RESUME RECORDING**


### Show joke

- endpoint GET `/jokes/:id`

**What should a joke page look like?**

- has an image
- full text of joke
- number of comments
- edit and delete links
- comments section
  + heading
  + form to add comment
  + list of the comments

### Edit Joke

### Delete Joke

### Post new comments?

### What we learned today
