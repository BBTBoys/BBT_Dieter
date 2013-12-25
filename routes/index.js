
/*
 * GET home page.
 */
var userDao = require('../dao/userDao.js');

exports.index = function(req, res){
  res.render('index.html', { title: 'Express' });
};

exports.login = function(req, res){
    res.render('login.html', { title: 'login'});
};

exports.logout = function (req, res) {
	req.session.destroy(function(){
        res.redirect('/login');
    });
}

exports.checkAccess = function(req, res, next) {
	if (req.session.user) {
		next();
	} else {
		req.session.error = 'Access denied!';
		res.redirect('/login' + '?returnUrl=' + req.url);
	}
//    if(!req.cookies || !req.cookies.bbt_user_email) {
//        res.redirect('/login' + '?returnUrl=' + req.url);
//        next();
//    } else {
//        next();
//    }
};

exports.authenticate = function(req, res, next) {
    var email = req.body.email || '',
        password = req.body.password || '',
        returnUrl = req.body.returnUrl || '';

    userDao.find(email ,function callback (err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        
        req.session.regenerate(function(){
        	req.session.user = email;
        	if (req.session.user) {
        		res.json({"code": 200, "message": "Login Success"});
        	} else {
        	    req.session.error = 'Access denied!';
        	    res.json({"code": 500, "message": "Login Fail"});
        	}
        });
        
//        if(true) {
//        	res.cookie('bbt_user_email', email);
//        	res.json({"code": 200, "message": "Login Success"});
//        } else {
//        	res.json({"code": 500, "message": "Login Fail"});
//        }
        
    });
};
