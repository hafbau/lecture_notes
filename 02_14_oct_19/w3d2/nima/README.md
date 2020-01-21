## Week 3 Day 2

# CRUD w/ Express

# CREATE READ UPDATE DELETE/DESTROY




Review!!!

- What is the number one thing to learn about Express, according to Nima?
    - Middleware
    Req comes in ----Middleware----> 404
                      |  |
                      |  GET /dogs ------> HTML PAGE
                       GET /cats -------> HTML PAGE

    
- HTTP
    - Hypertext transfer protocol
    - set of rules for communication between a server and client
        - CLIENT SENDS A REQUEST
        - SERVER RESPONDS

- Web app!
    - there are some guidelines to a web app
        - a window into some data
        - generally only 4(5???) things that we can do with data
        - CREATE
        - READ a bunch of data, or READ just one datotomus
        - Update a set of data (or a bunch of datii)
        - Delete (many/one)

Wikipedia:
- Read articles
- Read lists of articles
- Edit/Update articles
- Make new articles
- Delete articles (if an admin)

YouTube:
- Create (upload) a video
- Watch (READ) a video
- Comment (Creating a comment, Updating a video to HAVE a comment) on a video
- Edit video (Update, Create a new version)
- Like/dislike a video (Update like status, Create a like, Delete a like)


CLIENT wants stuff          SERVER has stuff (the ability to do stuff)

HTTP verbs / methods AS A CLIENT
- GET /dogs
- POST /dogs {DATA}
- PUT
- DELETE /cakes/12


GET ----> READ
POST ---> CREATE
PUT ----> UPDATE (and also CREATE) 🤔
DELETE -> DESTROY/DELETE


CRUD...

BREAD
Browse
Read
Edit
Add
Delete/Destroy

## THEME: Blog Posts

--- can create
--- can delete
Blog Article:
    Title --- yes, edit!
    Body --- edit!
    Tags --- edit!
    User (name) --- cannot edit

--- can create new users
Users:
    Name --- cannot edit this