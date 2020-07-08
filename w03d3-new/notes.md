## Journey So far [5m]

- Pay attention to stress
- Pay attention to Tiny App requirements before submitting


## 1 - Problem Definition [5m]

> What problem do cookies try to solve?

- Cookies are used by the server to remember everything
- Server has amnesia

HTTP Stateleness



[xkcd](https://xkcd.com/869/)


## 2 - Sans Cookies [10m]

> Can we solve this problem without cookies?

URL Query params
- 1. user makes a request to /my/profile
- 2. server couldnt find any info about ==> ?user=graham&lang=es
- 3. can you login pls? redirect to login
- 4. user login in by fillin the form and sending to server
- 5. server logs user in and redirect to /my/profile?user=graham&lang=es
  - 6. at /my/profile?user=graham&lang=es, the server doesn't remember and back to 2.
- 6. at /my/profile?user=graham&lang=es, the server sends you to your profile

Problems with this solution

- security
- messy url if you're storing too many info in the url
- if you navigate away you have to reauthenticate
  - open up a new tab
- shareability
-

## 3 - Cookies Demo 1- Language Switcher [20m]

- What we did:
  - set up a GET /lang/en route in our index.js
    + In this route we set cookies lang to 'en' (english)
    + and then redirect to '/'
  - In the '/' route, render appropriate language page base on the value of lang cookie

**Is this solution a good solution for this use case?**
> In order words, which of the earlier problems (with the url parameter does it solve?)

We learned that, cookie might not be the solution to our language preference use case - majorly due to shareability



## BREAK [5m]

## 4 - Cookies Demo 2 - User Auth [20m]

Goals:
- User authentication
- Protect the treasure



### Protecting the treasure workflow



## 5 - Recap & Takeaways [5m]
- Cookies are still not secure since the are stored in plain text on the browser
- How to use cookies for protected routes e.g. /treasure based off our database record
- do NOT forget bodyParser and /or cookiePasrser whenever needed e.g using req.cookies.
- we used req.cookies to fetch a particular and cookie and res.cookie to set cookies


## 6 - Closing Comments [5m]

- There's method to the curriculum, don't get frustrated; remember the growth mindset.
- Feedback, please.