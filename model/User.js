var User = function (id, password, nickName) {
	this.id = id;
	this.password = password;
	this.nickName = nickName;
};

User.prototype.getId = function () {
	return this.id;
};

User.prototype.setId = function (id) {
	this.id = id;
};

User.prototype.getPassword = function () {
	return this.password;
};

User.prototype.setPassword = function (password) {
	this.password = password;
};

User.prototype.getNickName = function () {
	return this.nickName;
};

User.prototype.setNickName = function (nickName) {
	this.nickName = nickName;
};