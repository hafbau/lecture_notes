HTTP Cookies & User Authentication
===

Hey gang, thanks for sitting through today's lecture about user authentication and cookies ... yum!

[The code we wrote is linked here](https://github.com/hafbau/lecture_notes/tree/master/w3d3)

[Video upload will be here once done](#)

## Things we learned.

- Cookies are ways to deal with HTTP statelessness but they are not the only way and may not be right for all scenarios e.g. our lang preferences due to shareability.
- Cookies are not secure
- CookieParser (the library) just helps us to parse cookies. We would have to parse cookies manually without it.
- `res.cookie...` for setting cookie. `req.cookies.` when fetching
- Don't just check cookie's existence, check if you(server) recognize what the cookie represents e.g. in your database
- Get `morgan` for HTTP logging to console.
- Nodemon is nice - it helps restarts `.js` files by default

## Journey So far [5m]

- Pay attention to stress
- Pay attention to Tiny App requirements before submitting


## 1 - Problem Definition [5m]

> What problem do cookies try to solve?

Statelessness of HTTP - session persistence

[xkcd](https://xkcd.com/869/)


## 2 - Sans Cookies [10m]

> Can we solve this problem without cookies?

1. user request /my/profile
2 Server couldn't find info about, asks client (user) to login
3. redirects to login
4. user filled login form and submit
5. server checks req.body and find creds combo tha works -  checks through db
6. redirect to /my/profile?user_id=2
7. user goes to /my/profile/?user_id=2
8. server fetches user details from query params

Problems about this strtategy

- security
- shareability
- user navigates to a different link on the website, they loose authentication
- new tab looses authentication

## 3 - Cookies Demo 1- Language Switcher [20m]

### Our workflow

- click on the preferred page to set preference
- server sets your preference and redirects to home
- which renders the correct home page

Summary: We learned that while cookies are great (or yumm!), they might not be the right solution to our language preference use case. Majorly due to shareability.

## BREAK [5m]

## 4 - Cookies Demo 2 - User Auth [20m]

### POST /login workflow

+ get credentials from req.body
+ check if user is in our db
+ check if user's password match submitted
+ set cookie and redirect home
+ ELSE show user some error e.g. res.send('error message')


### Protecting the treasure workflow

+ extract the previously set `username` cookie -> req.cookies.username
+ check if username is in db
+ if yes show them the treasure
+ ELSE send them home? or login?


## 5 - Recap & Takeaways [5m]

- Cookies are ways to deal with HTTP statelessness but they are not the only way and may not be right for all scenarios e.g. our lang preferences due to shareability.
- Don't just check cookie's existence, check if you(server) recognize what the cookie represents e.g. in your database
- Get `morgan` for HTTP logging to console.
- Cookies are not secure
- Nodemon is nice - it helps restarts `.js` files by default
- Cookies just helps us to parse cookies. We would have to parse cookies manually without it.
- `res.cookie...` for setting cookie. `req.cookies.` when fetching

## 6 - Closing Comments [5m]

- There's method to the curriculum, don't get frustrated; remember the growth mindset.
- Feedback, please.