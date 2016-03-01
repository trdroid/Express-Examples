var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	console.log(req.headers["accept"]);	

	res.format({
		text: function() {
			res.send('Welcome in text');			
		},

		html: function() {
			res.render('index');			
		},

		json: function() {
			res.json(JSON.stringify({"message" : "Welcome in JSON"}));
		}
	});
});

var errorHandler = function(err, req, res, next) {
	res.send('Something went wrong');
};

app.use(errorHandler);

app.listen(3000);

/*
Test:
	curl --header "Accept: application/json" http://localhost:3000
	curl --header "Accept: text/plain" http://localhost:3000
	curl --header "Accept: text/html" http://localhost:3000

Test:
	curl --header "Accept: blah/blah" http://localhost:3000

	Without the errorHandler, this request would cause an exception that would reveal a lot about the program to the clients
*/