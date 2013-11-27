
/*
 * GET home page.
 */

exports.signup = function(req, res){
	console.log(req.body);
	res.render("list");
};

exports.login = function(req, res){
	console.log("api login");  
};

exports.add = function(req, res){
	console.log("api add");
};

exports.list = function(req, res){
	console.log("api list");  
};