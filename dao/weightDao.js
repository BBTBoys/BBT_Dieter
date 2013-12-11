
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
        client.query('SELECT email, weight, regdate FROM "dt_weight"', function(err, result) {
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
        console.log(data);
        client.query('INSERT INTO "dt_weight"(email, weight) VALUES ($1, $2)', [data.email, data.weight], function(err, result) {
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
            client.end();
        });
    });
}

exports.list = list;
exports.insert = insert;

