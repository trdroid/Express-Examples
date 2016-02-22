### Purpose

The purpose of this sample app is to check how an Express app behaves when multiple requests are made while some requests take a little longer to run. 

Is there any chance for 

### Creating the app

> droid@droidserver:~/onGit/Express.js$ express MutilpleSimultaneousRequests

     create : MutilpleSimultaneousRequests
     create : MutilpleSimultaneousRequests/package.json
     create : MutilpleSimultaneousRequests/app.js
     create : MutilpleSimultaneousRequests/public
     create : MutilpleSimultaneousRequests/routes
     create : MutilpleSimultaneousRequests/routes/index.js
     create : MutilpleSimultaneousRequests/routes/users.js
     create : MutilpleSimultaneousRequests/public/images
     create : MutilpleSimultaneousRequests/public/stylesheets
     create : MutilpleSimultaneousRequests/public/stylesheets/style.css
     create : MutilpleSimultaneousRequests/views
     create : MutilpleSimultaneousRequests/views/index.jade
     create : MutilpleSimultaneousRequests/views/layout.jade
     create : MutilpleSimultaneousRequests/views/error.jade
     create : MutilpleSimultaneousRequests/bin
     create : MutilpleSimultaneousRequests/bin/www
  
     install dependencies:
       $ cd MutilpleSimultaneousRequests && npm install
  
     run the app:
       $ DEBUG=MutilpleSimultaneousRequests:* npm start
  
     create : MutilpleSimultaneousRequests/public/javascripts



> MutilpleSimultaneousRequests$ npm install

    debug@2.2.0 node_modules/debug
    └── ms@0.7.1
    
    cookie-parser@1.3.5 node_modules/cookie-parser
    ├── cookie-signature@1.0.6
    └── cookie@0.1.3
    
    serve-favicon@2.3.0 node_modules/serve-favicon
    ├── parseurl@1.3.1
    ├── fresh@0.3.0
    ├── ms@0.7.1
    └── etag@1.7.0
    
    morgan@1.6.1 node_modules/morgan
    ├── on-headers@1.0.1
    ├── basic-auth@1.0.3
    ├── depd@1.0.1
    └── on-finished@2.3.0 (ee-first@1.1.1)
    
    express@4.13.4 node_modules/express
    ├── array-flatten@1.1.1
    ├── utils-merge@1.0.0
    ├── content-type@1.0.1
    ├── methods@1.1.2
    ├── merge-descriptors@1.0.1
    ├── vary@1.0.1
    ├── escape-html@1.0.3
    ├── cookie-signature@1.0.6
    ├── etag@1.7.0
    ├── fresh@0.3.0
    ├── cookie@0.1.5
    ├── parseurl@1.3.1
    ├── content-disposition@0.5.1
    ├── serve-static@1.10.2
    ├── range-parser@1.0.3
    ├── path-to-regexp@0.1.7
    ├── depd@1.1.0
    ├── qs@4.0.0
    ├── on-finished@2.3.0 (ee-first@1.1.1)
    ├── finalhandler@0.4.1 (unpipe@1.0.0)
    ├── proxy-addr@1.0.10 (forwarded@0.1.0, ipaddr.js@1.0.5)
    ├── send@0.13.1 (destroy@1.0.4, statuses@1.2.1, ms@0.7.1, mime@1.3.4, http-errors@1.3.1)
    ├── accepts@1.2.13 (negotiator@0.5.3, mime-types@2.1.10)
    └── type-is@1.6.11 (media-typer@0.3.0, mime-types@2.1.10)
    
    body-parser@1.13.3 node_modules/body-parser
    ├── bytes@2.1.0
    ├── content-type@1.0.1
    ├── depd@1.0.1
    ├── qs@4.0.0
    ├── on-finished@2.3.0 (ee-first@1.1.1)
    ├── http-errors@1.3.1 (statuses@1.2.1, inherits@2.0.1)
    ├── iconv-lite@0.4.11
    ├── raw-body@2.1.5 (unpipe@1.0.0, bytes@2.2.0, iconv-lite@0.4.13)
    └── type-is@1.6.11 (media-typer@0.3.0, mime-types@2.1.10)
    
    jade@1.11.0 node_modules/jade
    ├── commander@2.6.0
    ├── character-parser@1.2.1
    ├── void-elements@2.0.1
    ├── mkdirp@0.5.1 (minimist@0.0.8)
    ├── constantinople@3.0.2 (acorn@2.7.0)
    ├── jstransformer@0.0.2 (is-promise@2.1.0, promise@6.1.0)
    ├── with@4.0.3 (acorn@1.2.2, acorn-globals@1.0.9)
    ├── clean-css@3.4.9 (commander@2.8.1, source-map@0.4.4)
    ├── transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)
    └── uglify-js@2.6.1 (async@0.2.10, uglify-to-browserify@1.0.2, source-map@0.5.3, yargs@3.10.0)


### Changes to app.js 

```javascript
var express = require('express');

var app = express();

console.log("Server started ...");
console.log("******************");

setTimeout(function() {
  console.log("Hello World!");
}, 60000);

app.use(function(req, res, next) {  
  console.log("Request for URL:" + req.url);
  res.send("Hello There!");
  console.log("Request has been served for " + req.url);
});

module.exports = app;
```

### Running the app

After running the app, the following output is displayed ...

     Server started ...
     ******************

After making a request in the browser for http://localhost:8999/hello1

     Request for URL:/hello1
     Request has been served for /hello1
     Request for URL:/favicon.ico

Similarly, making requests for http://localhost:8999/hello2 & http://localhost:8999/hello3 immediately results in 

     Request for URL:/hello2
     Request has been served for /hello2
     Request for URL:/favicon.ico
     Request has been served for /favicon.ico
     Request for URL:/hello3
     Request has been served for /hello3
     Request for URL:/favicon.ico
     Request has been served for /favicon.ico

After 1 minute passes, the following line is printed in the server's console

     Hello World!
     
### Snapshot

### Changes to app.js

```javascript
var express = require('express');

var app = express();

console.log("Server started ...");
console.log("******************");

var counter = 10;

app.use(function(req, res, next) {  
  console.log("Request for URL:" + req.url);
  console.log("Waiting for " + counter + " minutes");
  
  if(counter == 0) {
    counter = 10;  
  } else {
    counter--;
  }
    
  setTimeout(function() {      
      res.send("Hello World!");
      console.log("Request has been served for " + req.url);
   }, counter * 60 * 1000);
 });
 
module.exports = app;
```
### Running the app

     Server started ...
     ******************

<b> Making the following request one after the other immediately from different browser tabs </b>

http://localhost:8999/hello1

http://localhost:8999/hello2

http://localhost:8999/hello3

http://localhost:8999/hello4

http://localhost:8999/hello5

http://localhost:8999/hello6

http://localhost:8999/hello7

http://localhost:8999/hello8

http://localhost:8999/hello9

http://localhost:8999/hello10

     Request for URL:/hello1
     Waiting for 10 minutes
     Request for URL:/hello2
     Waiting for 9 minutes
     Request for URL:/hello3
     Waiting for 8 minutes
     Request for URL:/hello4
     Waiting for 7 minutes
     Request for URL:/hello5
     Waiting for 6 minutes          
     Request for URL:/hello6       <--- at this request, there was a brief pause; paused until I made the 10th request, and then the following started printing to the console 
     Waiting for 5 minutes
     Request for URL:/hello7
     Waiting for 4 minutes
     Request for URL:/hello8
     Waiting for 3 minutes
     Request for URL:/hello9
     Waiting for 2 minutes
     Request for URL:/hello10
     Waiting for 1 minutes
     Request has been served for /hello10
     Request for URL:/favicon.ico
     Waiting for 0 minutes         <--- counter has decremented to 0 by now, so the 10th request is served immediately, while the others are blocked until the setTimeout time elapses 
     Request has been served for /hello9
     Request for URL:/favicon.ico  <--- Also a request for /favicon.ico for the 10th request has come after serving the 10th request
     Waiting for 10 minutes    <--- The counter is set back to 10 minutes as dictated by the logic
     Request for URL:/hello6   <--- The request for /hello6 seemed like its timedout; As soon as I touched the tab, it sent a request again, and so is the case with the requests made in the earlier tabs, as shown further
     Waiting for 9 minutes    
     Request for URL:/hello5
     Waiting for 8 minutes
     Request for URL:/hello4
     Waiting for 7 minutes
     Request has been served for /hello8
     Request for URL:/hello3
     Waiting for 6 minutes

### Observations

Multiple requests can be made SIMULTANEOUSLY to an express app. 

Is there a chance for a race condition?

If processing request A updates a global variable, before it gets busy with something, then processing request B might change the value of the global variable updated for request A.

Need more insight here!!


