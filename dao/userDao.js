
var pg = require('pg');
var client = new pg.Client({
    user: 'nr_db_dieter',
    password: '_-S5RN7MFL10woMr5jKa26TnVaCVWV4T',
    database: 'nr_db_dieter',
    host: 'db1.postgresql.9rum.cc',
    port: 5432
});

function list (callback) {
    client.connect(function(err) {
        if(err) {
            console.error('could not connect to postgres', err);
            return callback(err);
        }
        client.query('SELECT email, password FROM "dt_user"', function(err, result) {
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
        client.query('SELECT email, password FROM "dt_user" WHERE email=$1', [email], function(err, result) {
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
        client.query('INSERT INTO "dt_user"(email, password) VALUES ($1, $2)', [data.email, data.password], function(err, result) {
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

