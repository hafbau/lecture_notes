Networking with TCP and HTTP
===

## Agenda today

- [x] Quick Review
- [x] Protocol
- [x] TCP
- [-] HTTP

### Review Async with Settimeout


### About networking

Hafiz's hot tips about networking

- Introduce yourself
- Figure out if speaking the same lang
- Handshake
- figure out if they're not asleep
- start a conversation
- one speak, the other listens
- end cleanly

### What is a protocol?

- it governs human communications as well machine to machine communication


**The web is like a lasagna of protocols** [5m]

* At the bottom layer there's **IP** -> _Internet Protocol_ 
* On top of it there's **TCP** -> _Transmission Control Protocol_
* And on top that we have **HTTP** -> _Hyper Text Transfer Protocol_
* There are other protocols
    - **FTP** -> _File Transfer Protocol_
    - **SMTP** -> _Simple Mail Transfer Protocol_
    - **XMPP** -> _Extensible Messaging and Presence Protocol_ (Slack)
    - **SSH** -> _Secure Shell_
    - ...and hundreds of others

**Things to google**
- OSI Model
- TCP/IP model

**Servers** [5m]

- Applications that communicate over a network
- Answer to requests on a specific IP address and port
- For every IP, only **one** server can be listening on a given port
    + You **can** have multiple servers listening on different ports on the same IP
- Different application protocols use different ports
    + HTTP: 80 / HTTPS: 443
    + FTP: 21
    + SMTP: 25
    + SSH: 22


### TCP - Demo

- Goal is to create a console chat application. This include a server code and client code.

Data flow for our chat app, if I were sending a message to Henry, is like: `Me -> server -> Henry`

### HTTP

* It's the way browsers talk to servers
* It's very simple: just some text structured in a specific way
* It's a **client-server** protocol
    - The **client** makes **requests**
    - The server returns **responses**

**HTTP clients**
??


**Requests** is made from clients and composed of:


**Responses** is from the server to a particular request. And includes:


**Http Demo** [10m]

### New things we learned today

- setting up a TCP server with `net` module from node
- how to setup server to listen on a port aka how to open a shoe a store
- server and client need encoding to be set before communication
- setting up data listeners for both server and client
- how server responds to client's message by writing to the connection object
- server listens on `connection` while client listens for on `connect`
- Hafiz's hot tips for verbal communication and how it translates to machine2machiune protocol

### References

[Cool VSCode tricks - Recommend Quokka.js](vscodecandothat.com)


Thank you 🤘🏿!