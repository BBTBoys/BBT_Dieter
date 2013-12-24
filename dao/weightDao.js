
var pg = require('pg');
var conString = "postgres://postgres:daumcorp@localhost:5432/dieter";

function list (callback) {
	var client = new pg.Client(conString);
    client.connect(function(err) {
        if(err) {
            console.error('could not connect to postgres', err);
            return callback(err);
        }
        client.query('SELECT * FROM "weight"', function(err, result) {
            if(err) {
                console.error('error running query', err);
                return callback(err);
            }
            callback(null, result.rows);
        });
    });
}

function insert (data, callback) {
	var client = new pg.Client(conString);
    client.connect(function(err) {
        if(err) {
            console.error('could not connect to postgres', err);
            return callback(err);
        }
        client.query('INSERT INTO "weight"(email, weight, regdate) VALUES ($1, $2, $3)', [data.email, data.weight, data.regdate], function(err, result) {
            if(err) {
                console.error('error running query', err);
                return callback(err, {
                    code : 500,
                    message : 'Insert Weight Fail'
                });
            }
            callback(null, {
                code : 200,
                message : 'Insert Weight Success'
            });
        });
    });
}

exports.list = list;
exports.insert = insert;

