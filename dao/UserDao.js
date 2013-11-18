var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	id : String,
	password : String,
	nick_name : String
});

function insert (data, callback) {
	var UserModel = mongoose.model('user', UserSchema),
		user = new UserModel(data);
	
	user.save(function (err) {
		if (!err) {
			callback({
				code : 200,
				message : 'success insert user'
			});
		} else {
			callback({
				code : 500,
				message : 'fail insert user ' + err
			});
		}
	});
}

function findUser (userId, callback) {
	var UserModel = mongoose.model('user', UserSchema);
	
	UserModel.findOne({id : userId}).exec(function (err, userModel) {
		if (!err) {
			callback({
				code : 200,
				message : 'success select user',
				result : userModel
			});
		} else {
			callback({
				code : 500,
				message : 'fail select user ' + err,
				result : null
			});
		}
	});
}

function updateNickName (userId, nickName, callback) {
	var UserModel = mongoose.model('user', UserSchema);
	
	UserModel.update({id : userId}, {nick_name : nickName}, null, function (err, numberAffected, raw) {
		if (!err) {
			callback({
				code : 200,
				message : 'success update nickName'
			});
		} else {
			callback({
				code : 500,
				message 'fail update nickName ' + err
			});
		}
	});
}

exports.insert = insert;
exports.findUser findUser;
exports.updateNickName = updateNickName;