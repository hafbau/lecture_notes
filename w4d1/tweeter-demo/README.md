# Tweeter Project

A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol' CSS3 to help web bootcamp students get comfortable with their front-end chops with those technologies.

## Technical Approach & Objectives

This is the complete version of this project (for teachers only).

There is a separate public repo with the starter (incomplete) code for students to fork and clone, located here:

<https://github.com/lighthouse-labs/tweeter>

The server is built with Node, Express and Mongo and allows users to request and submit tweets via a JSON end-point. The server/express code should not require any change from the student.

Students must work with and implement the HTML, CSS and client-side JS to bring this project to life.

## Final Product

The end result should look and function like this:

!["End Result"](https://cl.ly/a510eaad78b0/Screen%252520Recording%2525202019-03-21%252520at%25252012.02%252520PM.gif)

## Getting Started

1. Fork and clone your fork of this repository.
2. Install dependencies: `npm install` or `npm i` for short.
3. Start the web server from the command line: `npm start`
5. Open the app on <http://localhost:8080/> and make sure that it's loading.


## Dependencies & Troubleshooting

Dependencies:

- MongoDB
- Express
- Node 5.10.x or above

**This project assumes that:**

- It is running in our Vagrant machine (and therefore...)
- It is Running with Node 5.10.x or above
- `mongod` is up and running in the VM (you may have to start it up if connection fails). You can check if it is by using `ps aux | grep mongod` to see a list of processes that match `mongod`
- MongoDB is ready for connections on port 27017



