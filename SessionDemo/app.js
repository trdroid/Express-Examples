var express = require('express'),
	session = require('express-session');

var app = express();

app.use(session({secret: 'To be or not to be!!'}));

app.get('/', function(req, res) {
	console.log(req.sessionID) ;
	res.send("Session ID assigned is:", req.sessionID);
});

app.listen(3000);

/*
	The session middleware adds a sessionID attribute to the request object and
	sets a cookie header in the response as 
	set-cookie:connect.sid=<sessionID and its hash>
*/