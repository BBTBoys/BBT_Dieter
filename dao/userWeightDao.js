var pg = require('pg');
var client = new pg.Client({
    user: 'postgres',
    password: '9988',
    database: 'bbt_dieter',
    host: 'localhost',
    port: 5432
});

function list (callback) {
    client.connect(function(err) {
        if(err) {
            console.error('could not connect to postgres', err);
            return callback(err);
        }

        client.query('SELECT email, weight, date FROM "weight"', function(err, result) {
            if(err) {
                console.error('error running query', err);
                return callback(err);
            }
            console.log(result.rows);
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
        client.query('INSERT INTO "weight"(email, weight) VALUES ($1, $2)', [data.email, data.weight], function(err, result) {
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