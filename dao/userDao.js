
var pg = require('pg');
var conString = "postgres://postgres:daumcorp@localhost:5432/dieter";

function list (callback) {
	var client = new pg.Client(conString);
    client.connect(function(err) {
        if(err) {
            console.error('could not connect to postgres', err);
            return callback(err);
        }
        client.query('SELECT * FROM "users"', function(err, result) {
            if(err) {
                console.error('error running query', err);
                return callback(err);
            }
            callback(null, result.rows);
        });
    });
}

function find (email, callback) {
	var client = new pg.Client(conString);
    client.connect(function(err) {
        if(err) {
            console.error('could not connect to postgres', err);
            return callback(err);
        }
        client.query('SELECT * FROM "users" WHERE email=$1', [email], function(err, result) {
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
        client.query('INSERT INTO "users"(userid, email, password) VALUES ($1, $2, $3)', [data.userId, data.email, data.password], function(err, result) {
            if(err) {
                console.error('error running query', err);
                return callback(err, {
                    code : 500,
                    message : 'Sign Up Fail'
                });
            }
            callback(null, {
                code : 200,
                message : 'Sign Up Success'
            });
        });
    });
}

exports.list = list;
exports.find = find;
exports.insert = insert;

