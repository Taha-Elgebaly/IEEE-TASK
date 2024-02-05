# Web Development Overview

### Client Server Arch Components

- Client-Server
- Communication Channel
- Reuest-Response
- Resources & Services

### HTTP

Hypertext Transfer Protocol(HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML.

It was designed for commucication between web browsers and web servers.

### some HTTP Verbs

- GET
- POST 
- PUT 
- DELETE

### Frontend

Developer builds 
- User interface
- Client-side project

### backend 

Vendor provides as a service
- Database management
- Cloud storage
- user autentication 
- push notifications
- Hosting

API end points between frontend and backend

### Static sites vs dynamic sites

![image.png](attachment:image.png)

### frontend

- HTML 
- CSS
- Java script

### backend

- PHP Server Side 

### framework laravel
- laravel easy !
- easy is dangerous!

## Into The Web Application

###  Design Patterns

Design patterns are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code 

### compound pattern
This pattern is used when multiple components work together to have a shared state and handle logic together

- MVC

### Model View Controller full song lyrics 

MVC's a paradigm for factoring your code,
Into functional segments, so your brain does not explode.
To achieve reusability, you've got to keep those boundaries clean,
Model on the one side, view on the other, the controller's in between.
Model View
Yeah, it's got three layers like them Oreos do
Model View Creamy Controller
Model objects represent your application's raison d'être
Custom objects that contain data, logic, and et cetera
You create custom classes in your app's problem domain
Then you can choose to reuse them with other views
But the model objects stay the same
You can model a throttle and a manifold
Model the toddle of a two year old
Model a bottle of fine chardonnay
Model all the glottal stops people say
Model the coddling of boiling eggs
You can model the waddle in Hexley's legs
Model View
You can model all the models that pose for GQ
Model View Controller
View object tend to be controls used to display and edit
Cocoa's got a lot of those, well written, to its credit
Take a Cocoa text view, hand it any old Unicode string
The user can interact with it
It can hold most anything
Oh but the view don't know about the model
That string could be a phone number or the works of Aristotle
Keep the coupling loose
And so achieve a massive level of reuse
Model View
Yeah on a retina display y'know it's all times two
Model View Controller
I'll bet you're wondering now
I'll bet you're wondering how
Data flows between model and view
The controller has to mediate
Between each layer's changing state
To synchronize the data of the two
It pulls and pushes every changed value.
Yeah.
Model View
Mad props to the SmallTalk crew
For Model View Controller
Model View
It's pronounced 'oh-oh', not 'ooh-ooh'
Model View Controller
Controllers know the model and view very intimately
They gotta know just enough to do all the right stuff in this ménage à three
They've got a lot on their plate, also need to integrate OS functionality
In their coordinating role
They give your app its soul
Making it all that it can be
Model View
Notification, delegation, target action too
Model View Controller
Model View
Model View
Model View Controller
Model View
Now you can claim to be an MVC guru
Model View Controller

![image.png](attachment:image.png)

# Basic Network Concepts
## The Internet and the Web

## Summary How does the INTERNET work? | ICT

The video explains how the internet works, focusing on the journey of data from a data center to a device through a network of optical fiber cables. It also discusses the role of IP addresses, domain names, DNS servers, and the efficiency of data transmission through packet routing.

## Highlights

- 🌐 The video explains the journey of data from a data center to a device via a network of optical fiber cables.
- ⚡️ Transferring signals via satellites causes significant delay and latency, so optical fiber cables are used instead.
- 📡 IP addresses uniquely identify devices connected to the internet, and domain names make it easier to access websites.
- 📚 DNS servers act as a phone book for the internet, providing IP addresses corresponding to domain name requests.
- 🌍 Optical fiber cables, laid and maintained by global companies, form the backbone of the internet and enable efficient data transmission.
- 📦 Data is chopped into packets, each with a sequence number and IP addresses, and independently routed to the destination device.
- 📝 Protocols set the rules for data packet conversion, addressing, and routing, ensuring efficient data flow in the internet.

## Key Insights

- 🌐 The internet relies on a complex network of optical fiber cables to transmit data from data centers to devices, enabling global connectivity.
- 📡 IP addresses and domain names play crucial roles in identifying devices and accessing websites on the internet, simplifying the user experience.
- 📚 DNS servers provide the necessary translation between domain names and IP addresses, ensuring seamless communication on the internet.
- 🌍 The laying and maintenance of optical fiber cables across land and undersea enable the efficient and reliable transmission of data worldwide.
- 📦 Dividing data into packets and routing them independently allows for efficient transmission and reliable delivery of data in the internet.
- 📝 Protocols define the rules and standards for data transmission, ensuring interoperability and efficient flow of data in various internet applications.
- ⚙️ Understanding the inner workings of the internet can help users appreciate the complexity behind its seamless connectivity and efficient data transfer.


## Summary How The Web Works - The Big Picture

The video script explains how the web works, covering the role of servers, IP addresses, DNS servers, and essential technologies like HTML, CSS, JavaScript, and HTTP. It also touches on the use of frameworks in web development and the diverse data types exchanged between servers and applications.

## Highlights

- 🌐 A server’s IP address functions as a house address for websites.
- 📥 When entering a URL, a request is made, and a response is received from the server.
- 💻 HTML, CSS, and JavaScript are employed for structuring, styling, and adding interactivity to web pages.
- 🔒 HTTPS encrypts data between the browser and server, ensuring secure communication.
- 📱 Mobile apps utilize JSON data instead of HTML for communication with servers.
- 🌐 The web encompasses various interactions beyond traditional websites.
- ⚡️ WebSockets enable real-time communication without the need for request-response.

## Key Insights

- 💡 Understanding IP addresses and DNS servers is crucial for the functioning of the web.
- 💡 HTML, CSS, and JavaScript serve as the core technologies for building web pages.
- 💡 HTTPS ensures secure data transfer between browsers and servers.
- 💡 Mobile apps use different data formats, such as JSON, for communication with servers.
- 💡 The web includes various interactions beyond traditional websites, encompassing mobile apps.
- 💡 WebSockets enhance user experience by enabling real-time communication.
- 💡 Frameworks simplify web development by providing predefined code and rules.


# Summary The Client Server Model | Clients and Servers

The client-server model and its components, including clients and servers, are explained in the video script, introducing the alternative peer-to-peer model.

## Highlights

- 📝 Introduces the importance of understanding the client-server model in web development.
- 📝 Explains what a client is, including client machines and client programs like web browsers.
- 📝 Defines a server as a computer program that serves requests and differentiates it from high-performance computers.
- 📝 Discusses the client-server model as an architecture that splits computers into clients and servers, emphasizing the request-response cycle via HTTP messages.
- 📝 Mentions the alternative peer-to-peer model, where computers can be both requesters and response providers, contrasting it with the client-server model.

## Key Insights

- 💡 Understanding the client-server model is essential for web developers to comprehend how computers communicate via the web.
- 💡 The client can refer to both a machine (e.g., laptops, smartphones) and a program (e.g., web browsers) that make requests through the web.
- 💡 Servers, as computer programs, serve requests, host web resources, and can perform various tasks, such as managing databases.
- 💡 The client-server model follows a centralized structure, where computers are categorized into requesters (clients) and response providers (servers).
- 💡 The alternative peer-to-peer model allows computers to directly exchange data without a distinction between clients and servers.
- 💡 The client-server model works through the request-response cycle using HTTP messages.
- 💡 Web developers can benefit from understanding both the client-server model and the peer-to-peer model in order to build effective web applications and systems.


# Summary The Http and the Web | Http Explained | Request-Response Cycle

The video script explains the basics of the HTTP protocol, covering its definition, features, and its role in enabling communication and data exchange between clients and servers on the web.

## Highlights

- 🌐 Definition of HTTP: “HTTP stands for hypertext Transfer Protocol, an application layer protocol that allows web applications to communicate”
- 🔄 Request-Response Cycle: “Client makes a request, server responds, and the connection is closed. HTTP is a connectionless protocol”
- 📜 HTTP Message Structure: “HTTP messages consist of start line, headers, and body. Requests and responses differ in content”
- 🌐 Importance of HTTP: “HTTP became the most convenient way to move data on the web due to its evolution and added features”
- 🕸️ How the Web Works: “Client and server connect via TCP/IP, user types URL, connection established, request sent, response received”
- 📨 HTTP Message Details: “Requests include method, URI, and headers. Responses include status code, headers, and response body”

## Key Insights

- 🌐 Importance of HTTP Evolution: HTTP was initially designed for delivering HTML documents, but its continuous evolution made it the primary protocol for data transfer on the web.
- 🔄 Connectionless Protocol: HTTP operates in a request-response cycle where the client and server disconnect after each communication, enhancing efficiency and scalability.
- 📜 HTTP Message Structure: HTTP messages consist of start line, headers, and body, allowing for the exchange of plain text information between client and server.
- 🌐 Role of TCP/IP: The TCP/IP protocol suite establishes the connection between client and server, ensuring reliable data transfer over the internet.
- 🕸️ Web Connectivity: The internet enables the physical connection between the user’s computer and the web server, allowing them to communicate via the HTTP protocol.
- 📨 Request-Response Cycle: The client initiates a request by sending an HTTP message, while the server processes it and sends back a response in the form of another HTTP message.
- 🌐 HTTP Versat



