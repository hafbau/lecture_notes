# W03D3 - Cookies 

With Hafiz Suara
- April 14, 2020

## Journey So far [5m]

- Tiny App
- Pay attention to stressed


## 1 - Problem Definition [5m]

> What problem do cookies try to solve?

What the problem with HTTP does cookies solve:

Saves data (session) so it knows when you come back - remembers who you are (in the case of authentication)
- http server cannot maintain session

[xkcd](https://xkcd.com/869/)

> Server has amnesia


## 2 - Sans Cookies [10m]

> Can we solve this problem without cookies?

Yes, using the query parameters.

1. User requests /my/profile
2. Server couldn't find info about (e.g cookie), asks client (user) to login
3. redirects to login
4. user filled login form and send to server
5. server checks `req.body` and finds cred combo that works i.e. that matches a record in the database (we used a fake `users` object as our db)
6. server redirects /my/profile?user=amy
7. user goes to /my/profile?user=1&lang=es
8. server will GET who you are from the query params
9. lets you access the resource / page

Problems with this approach for authentication
- not secure / changeable
- limited shareabilty e.g on SM, twitter etc.
- if user navigates elsewhere, they lose the query params
- new tab will lose session

## 3 - Cookies Demo 1- Language Switcher [20m]

We learned cookie might not be the solution to our language preference use case - majorly due to shareability

## BREAK [10m]

## 4 - Cookies Demo 2 - User Auth [20m]


## 5 - Recap & Takeaways [5m]

- Don't just check cookie's existence, check if you recognize what the cookie represents e.g in your db
- When it might be inappropriate to use cookies e.g language preference. It can be useful to use url params instead due to shareability
- Get morgan for logging to console! Yes do it!
- Use dev tools to monitor request / response and their headers
- Cookies are not secure and can be easily modified
- Protecting authenticated routes e.g `/treasure`
- Nodemon is nice! `nodemon -L <server.js>` for if you're on vagrant
- Cookier Parser just parses - we could access cookies without it i.e from `req.headers.cookie`
- Also, `req.cookies` when trying to access cookie (note the plural and `req` not `res`)

## 6 - Closing Comments [5m]

- There's method to the curriculum, don't get frustrated; remember the growth mindset.
- Feedback, please.
