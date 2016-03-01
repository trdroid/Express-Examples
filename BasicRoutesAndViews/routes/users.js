exports.displayUsers = function(req, res) {
	if(!req.query.age) {
		res.send('Display a list of users');
	}	
	else {
		displayUsersOfAge(req, res);
	}
};

exports.getUserByID = function(req, res) {
	//Extract the value of the path parameter from req.params
	res.send('Fetching user with UserID:' + req.params.userID);
};

exports.getOccupation = function(req, res) {
	//pass data to info.jade
	res.render('info', {info: 'Info', occupation: 'Student'});
};

function displayUsersOfAge(req, res) {
	//Get the query string parameter 'age' from req.query
	res.send('Fetching users of age:' + req.query.age);
};