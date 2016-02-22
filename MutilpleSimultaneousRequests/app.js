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

/*setTimeout(function() {
  console.log("Hello World!");
}, 60000);

app.use(function(req, res, next) {  
  console.log("Request for URL:" + req.url);
  res.send("Hello There!");
  console.log("Request has been served for " + req.url);
});*/
