var Weight = function (userId, weight, regDateTime, goalWeight) {
	this.userId = userId;
	this.weight = weight;
	this.regDateTime = regDateTime;
	this.goalWeight = goalWeight;
}

Weight.prototype.getUserId = function () {
	return this.userId;
};

Weight.prototype.setUserId = function (userId) {
	this.userId = userId;
};

Weight.prototype.getweight = function () {
	return this.weight;
};

Weight.prototype.setWeight = function (weight) {
	this.weight = weight;
};

Weight.prototype.getRegDateTime = function () {
	return this.regDateTime;
};

Weight.prototype.setRegDateTim = function (regDateTime) {
	this.regDateTime = regDateTime;
};

Weight.prototype.getGoalWeight = function () {
	return this.goalWeight;
};

Weight.prototype.setGoalWeight = function (goalWeight) {
	this.goalWeight = goalWeight;
};