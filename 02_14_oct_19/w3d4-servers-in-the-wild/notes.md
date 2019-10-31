# Real world HTTP Servers

## HTTP Review
Request / Response

What a req looks like?
- where (action / path)
- what (method)
- data
  + body
  + headers (Content-type, cookies)
  + params (/urls/:id)
  + query (/urls/?userId=dkjfdghjfdgsjkhfgru4374874871)

What response looks like?
- status code
- data (xml, json, string) /  error
- headers Content-type, cookies)

## TinyApp Have nots
- not hosted / no https
- no real db
- no CSS
- only uses get / post
- secret in open
- error handling
- testing

Have
- uses bcrypt
- email auth
- real stack

Elements of TA
- template (views)
- Routing
- Data store (Models)
- Middlewares

## App idea (slogram - do you even share photos?)

- user sees login page
- user can register
- upload photos
- view your photsos
- view one photo
- edit and share photo
- delete photo
- categories photos into albums
- friends comment on photos


photo => see all photos
photo => see one photo of all photos
photo => add one photo
photo => edit one photo of all photos
photo => delete one photo of all photos
photo => share one photo of all photos

albums => create an album
albums => add

CRUD the resources
BREAD the resources

IDEMPOTENT

Get Register form => GET /register
Add User => PUT /users (Nirali)

CREATE photo => POST /photos (Sushantkumar)
READ ALL photos => GET /photos (Layth)
READ One photo => GET /photos/:photoId (Hayder)
Edit One photo => PUT /photos/:photoId (Hafiz)
Delete One photo => DELETE /photos/:photoId (Hafiz)




