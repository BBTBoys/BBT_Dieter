
/*
 * GET users listing.
 */

var userDao = require('../dao/userDao.js');

exports.index = function(req, res) {
    userDao.list(function callback (err, data) {
        if (err) {
            console.err(err.message);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.render('user.html', { title: 'users', users: data });
    });
};

exports.list = function(req, res) {
    userDao.list(function callback (err, data) {
        if (err) {
            console.err(err.message);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.json(data);
    });
};

exports.find = function(req, res) {
    userDao.find(req.params.email ,function callback (err, data) {
        if (err) {
            console.err(err.message);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.json(data);
    });
};

exports.insert = function(req, res){
    var user = {
        'email' : req.body.email,
        'password' : req.body.password
    };

    userDao.insert(user ,function callback (err, data) {
        if (err) {
            console.err(err.message);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.json(data);
    });
};