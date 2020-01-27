# Real world HTTP Servers

## HTTP Review
Architecture
  - Client / Server

Request
  - method
  - url / path
  - data
    - headers (cookies)
    - URL
      + params /noun/:noun_id
      + query /nouns?name=somevalue e.g. Get /articles?page=1&author=hafiz
    - body
      email=myema@ema&password=supersecret
      {
        email: 
      }
       PUT / POST

```js
req.query

{
  page: '1',
  author: 'hafiz'
}
```

Response
  - status
  - body / data (json / html / error?)
  - error

## TA vs the world

Not real world
- no persistent databases
- backdoor endpoint
- proper validation / sanitization of user inputs
- automated testing
- error handling
- logging
- no deployment (https)

Haves
- email auth
- bcrypt
- encrypted cookies

## Rest

user stories
- users can see all photos [GET /photos]
- users can see one photo [GET /photos/:id]
- users can comment on a photo [POST /photos/:id/comments]
- users can have an account [PU(OS)T /users] /register
- users can login [PU(OST)T /sessions] => /login
- users can have reactions on their photot
- users can upload

extract nouns and verbs

**Nouns**
- users (accounts)
- photos
- comments
- reactions

**Verbs**
- 


## API

## Middleware

## Modularization (Refactor)





