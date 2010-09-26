
var extendObj = function(target, obj1, obj2) {
	for (var item in obj1) {
		target[item] = obj1[item];
	}
	return (obj2)?extendObj(target, obj2):target;
}

var extendObjStrict = function(target, obj1, obj2) {
	for (var item in obj1) {
		if (target[item] !== undefined)
			target[item] = obj1[item];
	}
	return (obj2)?extendObj(target, obj2):target;
}


