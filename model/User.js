var User = {
	id : '',
	password : '',
	nickName : ''
};

var setUser = function (id, password, nickName) {
	this.id = id;
	this.password = password;
	this.nickName = nickName;
};

exports.User = User;
exports.setUser = setUser;