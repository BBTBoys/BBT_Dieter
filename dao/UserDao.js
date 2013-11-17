var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	id : Number,
	password : String,
	nick_name : String,
	userWeightId : Number
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
				message : 'fail insert user'
			});
		}
	});
}