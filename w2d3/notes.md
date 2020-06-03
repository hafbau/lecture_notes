Networking with TCP and HTTP
===

## Agenda today

- [ ] Quick Review
- [ ] Protocol
- [ ] TCP
- [ ] HTTP

### Review Async with Settimeout [10m]


### About networking

Hafiz's hot tips for networking

- Introduce yourself
- Figure out you speak their language
- handshake
- ensure they're woke and interested
- find out what they do
- take turns speaking / listening
- end cleanly

### What is a protocol? [10m]

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

*Thing to google*
- OSI model
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

ports >1043 < ~65,535 can be randomly assigned


### TCP - Demo [30m]

- Goal is to create a console chat application. This include a server code and client code.



### HTTP [20m]

* It's the way browsers talk to servers
* It's very simple: just some text structured in a specific way
* It's a **client-server** protocol
    - The **client** makes **requests**
    - The server returns **responses**

**HTTP clients**
??


**Requests** is made from clients and composed of:
- url
- method
- body?
- header?

**Responses** is from the server to a particular request. And includes:

- status
- header
- body

**Http Demo** [10m]

### New things we learned today

- `.on` sets up listeners for an event. And the signature is `whatever.on('event', functionToHandleThisEvent)

- nesting server actions to clients within `server.on('connection')` to ascertain connection to the particular client

- how to create server and connection to server

- setting encoding is important.

- In tcp communications happen through the server, two clients don’t directly talk

- understanding that the callback passed to `.on` method runs asynchronously and so order of execution will depend on the particular event being triggered (*async sockets* in Brian M's words)

### References

[Cool VSCode tricks - Recommend Quokka.js](vscodecandothat.com)


Thank you 🤘🏿!