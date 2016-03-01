var express = require('express'),
//Organize routes under './routes' directory
	main = require('./routes/main.js'),
	users = require('./routes/users.js');

var app = express();

//configure the view engine
app.set('view engine', 'jade');

//configure the view directory
app.set('views', __dirname + '/views');

app.get('/', main.index);

app.get('/users', users.displayUsers);

// :userID is a path parameter 
app.get('/user/:userID', users.getUserByID);

app.get('/user/info/occupation', users.getOccupation);

app.listen(3000);

//a catchall handler
app.use(function(req, res) {
	res.render('errors/404');
});