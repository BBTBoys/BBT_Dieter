var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dieter');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	id : String,
	password : String,
	nickName : String
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

function findUser (userId, password, callback) {
	var UserModel = mongoose.model('user', UserSchema);
	
	UserModel.findOne({id : userId, password : password}, function (err, userModel) {
		console.log(typeof userModel);
		if (!err) {
			if (userModel) {
				callback({
					code : 200,
					message : 'success select user',
					result : userModel
				});
			} else {
				callback({
					code : 404,
					message : 'user is not exists',
					result : null
				});
			}
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
				message : 'fail update nickName ' + err
			});
		}
	});
}

exports.insert = insert;
exports.findUser = findUser;
exports.updateNickName = updateNickName;