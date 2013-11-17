var User = function (id, password, nickName, userWeightId) {
	this.id = id;
	this.password = password;
	this.nickName = nickName;
	this.userWeightId = userWeightId;
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

User.prototype.setNickname = function (nickName) {
	this.nickName = nickName;
};

User.prototype.getUserWeightId = function () {
	return this.userWeightId;
};

User.prototype.setUserWeightId = function (userWeightId) {
	this.userWeightId = userWeightId;
};