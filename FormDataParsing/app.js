var express = require('express'),
	registration = require('./routes/registration.js');

var app = express();

//configure the view engine
app.set('view engine', 'jade');

//configure the view directory
app.set('views', __dirname + '/views');

app.get('/registration', registration.register);

//a catchall handler
app.use(function(req, res) {
	res.render('errors/404');
});

app.listen(3000);