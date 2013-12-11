
/*
 * GET users listing.
 */

var userWeightDao = require('../dao/userWeightDao.js');

exports.index = function(req, res) {
    userWeightDao.list(function callback (err, data) {
        if (err) {
            console.err(err.message);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.render('weight.html', { title: 'weights', weights: data });
    });
};

exports.list = function(req, res) {
    userWeightDao.list(function callback (err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.render("list.html", {weights : data});
        res.json(data);
    });
};

exports.insert = function(req, res){
    var weight = {
        'email' : req.body.email,
        'weight' : req.body.weight
    };

    userWeightDao.insert(weight ,function callback (err, data) {
        if (err) {
            console.err(err.message);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.json(data);
    });
};