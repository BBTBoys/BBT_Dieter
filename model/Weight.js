var Weight = {
	userId : '',
	weight : '',
	regDateTime : '',
	goalWeight : ''
}

var setWeight = function (userId, weight, regDateTime, goalWeight) {
	this.userId = userId;
	this.weight = weight;
	this.regDateTime = regDateTime;
	this.goalWeight = goalWeight;
};

exports.Weight = Weight;
exports.setWeight = setWeight;