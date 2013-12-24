
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
        'weight' : req.body.weight,
        'regdate' : ''
    };

    var date = new Date();
    var month = (parseInt(date.getMonth()+1,10) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    var dates = (parseInt(date.getDate(),10) < 10) ? '0' + (date.getDate()) : (date.getDate());
    var hours = (parseInt(date.getHours(),10) < 10) ? '0' + (date.getHours()) : (date.getHours());
    var minutes = (parseInt(date.getMinutes(),10) < 10) ? '0' + (date.getMinutes()) : (date.getMinutes());
    var seconds = (parseInt(date.getSeconds(),10) < 10) ? '0' + (date.getSeconds()) : (date.getSeconds());
    var regDate = date.getFullYear().toString() + month.toString() + dates.toString() + hours.toString() + minutes.toString() + seconds.toString();
    
    weight.regdate = regDate;
    
    weightDao.insert(weight ,function callback (err, data) {
        if (err) {
            console.err(err.message);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
        }
        res.json(data);
    });
};

