
var pg = require('pg');
//var client = new pg.Client({
//    user: 'postgres',
//    password: 'rlaengud2',
//    database: 'bbt_dieter',
//    host: 'localhost',
//    port: 5432
//});

var conString = "postgres://postgres:rlaengud2@localhost/bbt_dieter";

function list (callback) {
    pg.connect(conString, function(err, client, done) {
        if(err) {
            console.error('could not connect to postgres', err);
            return callback(err);
        }
        client.query('SELECT email, password FROM "user"', function(err, result) {
            if(err) {
                console.error('error running query', err);
                return callback(err);
            }
            callback(null, result.rows);
            client.end();
        });
    });
}

function find (email, callback) {
    client.connect(function(err) {
        if(err) {
            console.error('could not connect to postgres', err);
            return callback(err);
        }
        client.query('SELECT email, password FROM "user" WHERE email=$1', [email], function(err, result) {
            if(err) {
                console.error('error running query', err);
                return callback(err);
            }
            callback(null, result.rows);
            client.end();
        });
    });
}

function insert (data, callback) {
    client.connect(function(err) {
        if(err) {
            console.error('could not connect to postgres', err);
            return callback(err);
        }
        client.query('INSERT INTO "user"(email, password) VALUES ($1, $2)', [data.email, data.password], function(err, result) {
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
            client.end();
        });
    });
}

exports.list = list;
exports.find = find;
exports.insert = insert;

