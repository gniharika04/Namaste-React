
## Chapter 01 - Inception
______________________________________________________________________________________________________________

## Q:1 What is Emmet?
Ans: 
1. Emmet is the essential plug-in for web-developers. It's a short hand expression.
2. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure.
3. Most useful common abbreviations are:
HTML-
 html:5 - generates html5 boilerplate,
 ui>li - nested elements
 div> h1+h2 - generate siblings inside div here
 h1.#heading.conatiner.content - create h1 element with id container and classes container & content


## Q:2 Difference between a Library and Framework?
Ans: Library - 
1. A library is a collection of packages, pre-defined helper functions, objects, classes, modules that perform specific operations and boosts the development.
2. Libraries contain a number of methods that a developer can just call whenever they write code. 
3. Example- React, JQuery, Loadash

Framework -
1. Framework contains the basic flow and architecture of an application. The major difference between library and framework is the complexity. Basically it's a foundation upon which applications are built.
2. The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.


## Q:3 What is CDN? Why do we use it?
Ans: A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.


## Q:4 Why is React known as React?
Ans: 
1. React is developed by Facebook developers. 
2. React is named React because of its ability to react to changes in data.
3. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
4. The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
React is a JavaScript-based UI development library.


## Q:5 What is crossorigin in script tag?
Ans: The crossorigin attribute sets the mode of the request to an HTTP CORS Request. 
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
Syntax - <script crossorigin="anonymous|use-credentials">


## Q:6 What is difference between React and ReactDOM?
Ans: React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM.
The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering.


## Q:7 What is difference between react.development.js and react.production.js files via CDN?
Ans: Development is the stage of an application before it's made public while production is the term used for the same application when it's made public.
Development build is several times (maybe 3-5x) slower than the production build.


## Q:8 What is async and defer?
Ans: Async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process ) and don’t wait for anything.
Syntax - <script src="demo_async.js" async></script>

Defer - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.
Syntax - <script src="demo_defer.js" defer></script>