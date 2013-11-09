
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    id : String,
    pw : String
});

function list (callback) {
    var User = mongoose.model('User', UserSchema),
        query = User.find();

    query.sort({name : 'asc'}).exec(function (err, docs) {
        if (err) {
            callback(err);
        }
        callback(null, docs);
    });
}

function find (id, callback) {
    var User = mongoose.model('User', UserSchema),
        query = User.findOne({'id' : id});

    query.sort({name : 'asc'}).exec(function (err, docs) {
        if (err) {
            callback(err);
        }
        callback(null, docs);
    });
}

function insert (data, callback) {
    var User = mongoose.model('User', UserSchema),
        user = new User(data);

    user.save(function (err) {
        if (err) {
            callback(err, {
                code : 500,
                message : 'Sign Up Fail'
            });
        }
        callback(null, {
            code : 200,
            message :'Sign Up Success'
        });
    });
}

exports.list = list;
exports.find = find;
exports.insert = insert;

