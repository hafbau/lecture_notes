Networking with TCP and HTTP
===

Hey crew! Sorry for taking extra 10mins of your time today and the tech issues! Yikes!. Thank you for sitting through today's lecture and for your engagement.

Today, we talked about networking and machine to machine communication, focusing on TCP and HTTP.


[The code we wrote is here](https://github.com/hafbau/lecture_notes/tree/master/w2d3)

[Video will be updated once uploaded](https://us02web.zoom.us/rec/share/-pFpILrN5GNJH53TtGLhZJ85T6Tqeaa823VMrKcIz007qICuWkJUFlaXA6MuAbEP)

For a refresher of HTTP, have a look at the `http.md` file on the Github repo linked above.

[For another instructor's take on the topic, checkout Travis' notes here](https://web.compass.lighthouselabs.ca/activities/153/lectures/3413)

The below are notes I wrote in class; enjoy.

### New things we learned today

- `.on` sets up listeners for an event. And the signature is `whatever.on('event', functionToHandleThisEvent)
- nesting server actions to clients within `server.on('connection')` to ascertain connection to the particular client
- In tcp communications happen through the server, two clients don’t directly talk
- setting up a TCP server with `net` module from node
- how to setup server to listen on a port aka how to open a shoe a store
- setting encoding is important. server and client need encoding to be set before communication
- setting up data listeners for both server and client
- how server responds to client's message by writing to the connection object
- server listens on `connection` while client listens for on `connect`
- Hafiz's hot tips for verbal communication and how it translates to machine2machiune protocol

---

## Agenda today

- [x] Quick Review
- [x] Protocol
- [x] TCP
- [-] HTTP (we didn't cover this in depth; don't worry there's plenty of time.)

### Review Async with Settimeout


### About networking

Hafiz's hot tips for networking

- Introduce yourself
- Figure out you speak their language
- handshake
- ensure they're woke and interested
- find out what they do
- take turns speaking / listening
- end cleanly


### What is a protocol?

* It's a formalized way to communicate.
    - Spoken language is a communications protocol, as is body language! But we're getting philosophical here...
* In computer science, it's a set of rules defining a way for two systems to communicate in a way both can make sense of what's going on.

**The web is like a lasagna of protocols** [5m]

* At the bottom layer there's **IP** -> _Internet Protocol_
* On top of it there's **TCP** -> _Transmission Control Protocol_
* And on top that we have **HTTP** -> _Hyper Text Transfer Protocol_
* There are other protocols
    - **FTP** -> _File Transfer Protocol_
    - **SMTP** -> _Simple Mail Transfer Protocol_
    - **XMPP** -> _Extensible Messaging and Presence Protocol_ (used by Slack!)
    - **SSH** -> _Secure Shell_
    - ...and hundreds of others

*Things to google:*

- OSI Models
- TCP/IP model


**Servers** [5m]

- Applications that communicate over a network
- Answer to requests on a specific IP address and port
- For every IP, only **one** server can be listening on a given port
    + You **can** have multiple servers listening on **different ports** on the **same IP**
- Different protocols use different ports
    + HTTP: 80 / HTTPS: 443
    + FTP: 21
    + SMTP: 25
    + SSH: 22


 ### Other Protocols

 - FTP: File Tranfer Protocol
 - XMPP: Extensible Messaging and Prresence Protocol
 - SSH: Secure Shell


**Servers** [5m]

- Applications that communicate over a network
- Answer to requests on a specific IP address and port
- For every IP, only **one** server can be listening on a given port
    + You **can** have multiple servers listening on different ports on the same IP
- Different protocols use different ports
    + HTTP: 80 / HTTPS: 443
    + FTP: 21
    + SMTP: 25
    + SSH: 22


### TCP - Demo [30m]

- Goal is to create a console chat application. This include a server code and client code.

1. Create a `server.js` and a `client.js` file.

2. What should our `server.js` do
  - creates a tcp server
  - listen for connection
    + on receipt of a new connection, sends the connected client a welcome message
      - then listen for any data subsequently sent through that connection
        + on receipt of any data, broadcast that data to all currently connected clients

3. What should our `client.js` do
  - create a tcp connection to our server
    + with `port` and `host`
  - it set it's encoding i.e. how the it interprets server's messages
  - When `connect`-ed, console.log('your connected')
  - Whenever it receives (`data`) message from server, it should display that message to console
  - Whenever we type something to console, it should send what we typed to the server


### HTTP [20m]

* It's the way browsers talk to servers
* It's very simple: just some text structured in a specific way
* It's a **client-server** protocol
    - The **client** makes **requests**
    - The server returns **responses**

**HTTP clients**

Examples of HTTP clients are:

- Browsers
- curl
- postman
- code based client e.g using a library (request)

>
> Every request has only one response
>


**Requests** is made from clients and composed of:

- url
- method (GET POST PUT DELETE) CRUD / BREAD
- headers
- body

**Responses** is from the server to a particular request

- status / codes (100s - info, 200s - good, 300s - redirected, 400s - Bad request, 500s - server error)
- headers
- body

**Http Demo**

*(we did not get to this in class)*

> Have a look in the `4_http.js` to see sample http request made to lighthouselabs.ca

### References

[Cool VSCode tricks - Recommend Quokka.js](vscodecandothat.com)


Thank you 🤘🏿!