ui.arr = {};
// Array.indexOf( value, begin, strict ) - Return index of the first element that matches value
/*
ui.arr.indexOf = function( v, b, s ) {
	for( var i = +b || 0, l = this.length; i < l; i++ ) {
		if( this[i]===v || s && this[i]==v ) { return i; }
	}
	return -1;
};
ui.arr.indexOf = function(obj) {
	for (var i = 0; i < this.length; i++) {
		if (obj == this[i])
			return i;
	}
	return -1;
};
*/

// Array.insert( index, value ) - Insert value at index, without overwriting existing keys
ui.arr.insert = function( i, v ) {
	if (this.length == 0)
		return [v];
	if( i>=0 ) {
		var a = this.slice(), b = a.splice( i );
		a[i] = v;
		return a.concat( b );
	}
};

/* Use native forEach
ui.arr.each = function(f) {
	for (var i = 0; i < this.length; i++) {
		f(this[i], i);
	}
};
*/

/*
ui.arr.find = function(f) {
	for (var i = 0; i < this.length; i++) {
		if (f(this[i]))
			return this[i];
	}
};
*/

/*
ui.arr.filter = function(f) {
	var filter = [];
	for (var i = 0; i < this.length; i++) {
		if (f(this[i]))
			filter.push(this[i]);
	}
	return filter;
};
*/

ui.arr.contains = function(obj) {
	for (var i = 0; i < this.length; i++) {
		if (obj == this[i])
			return true;
	}
};

ui.arr.clone = function() {
	var clone = [];
	for (var i = 0; i < this.length; i++) {
		clone.push(this[i]);
	}
	return clone;
};

/* use native splice 
ui.arr.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};
*/

ui.arr.removeItem = function(item) {
	return this.splice(this.indexOf(item), 1);
}

ui.arr.extend = function(array) {
	for (var i = 0; i < array.length; i++) {
		this.push(array[i]);
	}
}

ui.arr.last = function() {
	return this[this.length - 1];
}
