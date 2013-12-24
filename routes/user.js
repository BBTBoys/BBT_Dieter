
/*
 * GET users listing.
 */
var userDao = require('../dao/userDao.js');
var crypto = require('crypto');

exports.index = function(req, res) {
    userDao.list(function callback (err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.render('user.html', { title: 'users', users: data });
    });
};

exports.list = function(req, res) {
    userDao.list(function callback (err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.json(data);
    });
};

exports.find = function(req, res) {
    userDao.find(req.params.email ,function callback (err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.json(data);
    });
};

exports.insert = function(req, res){
    var user = {
    	'userId' : '',
        'email' : req.body.email,
        'password' : req.body.password
    };
    
    user.userId = encrypt(user.email, 'encrypt_user_id');

    userDao.insert(user ,function callback (err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.json(data);
    });
};

exports.authenticate = function(req, res) {
    var email = req.body.email || '',
        password = req.body.password || '',
        returnUrl = req.body.returnUrl || '';

    userDao.find(email ,function callback (err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        
        if(true) {
        	res.cookie('bbt_user_email', email);
        	res.json({"code": 200, "message": "Login Success"});
        } else {
        	res.json({"code": 500, "message": "Login Fail"});
        }
        
    });
    
};


function encrypt (text, key) {
	var cipher = crypto.createCipher('aes-256-cbc',key),
		encipheredContent = cipher.update(text,'utf8','hex');
	
	encipheredContent += cipher.final('hex');
	
	return encipheredContent;
};

function decrypt (text, key) {
	var decipher = crypto.createDecipher('aes-256-cbc',key),
    	decipheredPlaintext = decipher.update(text,'hex','utf8');

    decipheredPlaintext += decipher.final('utf8');

    return decipheredPlaintext;
};
