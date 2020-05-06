**Introduction to HTTP**

![](https://cl.ly/1w2u0r2i052K/Image%202016-08-07%20at%209.23.20%20PM.png "intro to http")

**Starting from the top...**

We know that in order to load an webpage, we page to type a URL (aka Link) into the address bar of our browser. Once we hit enter, the browser loads for a few seconds and BAAM the page is on your screen.

![](https://cl.ly/1Z3t3R1Q1N2g/Image%202016-08-07%20at%208.47.40%20PM.png "browser")

**Internet 101**

Let's break it down to a science. Here's what's happening behind the scenes at a __high level__:

![](https://cl.ly/0D0z3A1R223R/Image%202016-08-07%20at%208.53.03%20PM.png "frontend to server")

In order for your computer's browser (aka `client`, where frontend code lives) to be able to load webpages, it starts communicating with the server to make request for the resources (aka `URL`s) you specified.

The communication is achieved with a communication channel (much like a language) called `HTTP` (Hyper-Text-Transfer-Protocol) which is the technical lingo for what it actually does, __helps devices communicate over a network__ (i.e. over internet or local network).

![](https://cl.ly/100H1v142G0L/Image%202016-08-07%20at%209.14.56%20PM.png "http")

_HTTP is only one type of data exchange protocols. See Reference section below for other types of protocols._


**Step 1: The Request**

The format of the request (sent by the browser) has to be understood by the server, this agreement is achieved with HTTP.

__So what's the format of this `HTTP` request we speak of?__

It's, quite simply, mainly 2 pieces of information.

1. The request ___method___ (let's start with `GET`)
2. The ___path of the resource___ requested (aka URL or URI)

When you type [http://google.ca](http://google.ca) into your browser and then press `Enter`. You are making a `GET` request to that URL (http://google.ca).


**Commonly used Request Methods:**

* `GET` - READ data from the server
* `POST` - SEND data and CREATE an object on the server
* `PUT/PATCH` - SEND data and UPDATE an object on the server
* `DELETE` - DELETE data on the server

Side Notes:

- _they map nicely to CRUD operations_
- _These aren't the only methods available for use with HTTP but they are fully sufficient for most cases._

**URI - Uniform Resource Indicator**

* Also known as **URL - Uniform Recource Locator**
* Has several parts. In `http://www.example.edu:8080/hello?name=faisal`
    - Communication Protocol: `http://`
    - Host: `www.example.edu`
    - Port: `:8080`
    - Path: `/hello`
    - Query parameters: `?name=faisal`

_Side Note: An article about the [difference between URLs and URIs](http://damnhandy.com/2011/01/18/url-vs-uri-vs-urn-the-confusion-continues/)_


**Request Headers**

* Always in the form of `key: value` pairs
* Contain additional information about the client and the request, including:
    - User agent (info about browser)
    - Cookies (data used to identify each `client`)


**Request Body**

Data to be sent to the server (optional)


**Step 2: The Response**

Once the server receives and process the request, it send back a response which contains the following:

**Response status**

- Contains a response code and a message
- Response codes are divided in series
    + **100 series** = informational
    + **200 series** = ok
    + **300 series** = redirection
        * 301 moved permanently
        * 302 moved temporarily
    + **400 series** = client error
        * 401 unauthorized
        * 403 forbidden
        * 404 not found
    + **500 series** = server error
    + Full list: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes


**Response headers**

- Information about the data being returned
    + Content size
    + Media type
        * This follows conventions. See: https://en.wikipedia.org/wiki/Media_type
        * If you're curious, here's a complete list: https://www.iana.org/assignments/media-types/media-types.xhtml
    + ETags (used for caching)
    + ...several others


**Response Body**

* Yep, that's the content
* Usually it's HTML, but can also be pure text, JSON data, images, videos, audio...
