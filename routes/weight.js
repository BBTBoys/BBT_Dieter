
/*
 * GET weights listing.
 */
var weightDao = require('../dao/weightDao.js');

exports.index = function(req, res) {
    weightDao.list(function callback (err, data) {
        if (err) {
            console.err(err.message);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.render('weight.html', { title: 'weights', weights: data });
    });
};

exports.list = function(req, res) {
    weightDao.list(function callback (err, data) {
        if (err) {
            console.err(err.message);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.json(data);
    });
};

exports.insert = function(req, res){
    var weight = {
        'email' : req.body.email,
        'weight' : req.body.weight
    };

    weightDao.insert(weight ,function callback (err, data) {
        if (err) {
            console.err(err.message);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.json(data);
    });
};

