# Servers in the wild

## HTTP Review [30]
*Request*
- method
- action
- data
  + params
  + body
  + headers (cookie)
  + query

*Response*
- data (json / html)
- status
- headers (set-cookie, format etc)

## Tiny App vs the world
have nots
haves

## Tiny App workflow / Elements of TinyApp
basic elements of webserver

## REST
### App ideation
- user stories for CRUD
- extract resources
- extract actions


### RESTful routes (endpoints) for our app
By following REST principles, it allows us to design our end points:

| Action                                | http verb | end point                |
| ------------------------------------- | --------- | ------------------------ |
| List all posts                        | GET       | get '/posts'             |
| Get a specific post                    | GET       | get '/posts/:id'         |
| Display the new form                  | GET       | get '/posts/new          |
| Create a new post                     | POST      | post '/posts             |
| Display the form for updating a post  | GET       | get '/posts/:id/update'  |
| Update the posts                      | PUT       | put '/posts/:id          |
| Deleting a specific post               | DELETE    | delete '/posts:id'       |

#### Nested Resources

You may need to access a nested resources. For example, you need to create a new comment.

| Action               | http verb | end point                  |
| -------------------- | --------- | -------------------------- |
| Create a new comment | POST      | post '/posts/:id/comments  |