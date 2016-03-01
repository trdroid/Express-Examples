var express = require('express'),
	cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/', function(req, res) {
	if(req.cookies.hasVisited === 'true') {
		res.send('You have visited before');
	}

	res.cookie('hasVisited', 'true');
	res.send('Welcome!!');
});

app.get('/reset', function(req, res) {
	res.clearCookie('hasVisited');
	res.send('Cookie cleared');
})

app.listen(3000);

/*
	Visting localhost:3000 the first time displays "Welcome!!". 
	Any subsequent time, it displays "You have already visited", even in a different browser tab/window.
*/
