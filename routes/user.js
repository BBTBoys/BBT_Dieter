
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
        res.render('user', { title: 'users', users: data });
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
    userDao.find(req.params.id ,function callback (err, data) {
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
        'id' : req.body.id,
        'pw' : req.body.pw
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

