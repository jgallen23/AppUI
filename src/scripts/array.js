// Array.indexOf( value, begin, strict ) - Return index of the first element that matches value
Array.prototype.indexOf = function( v, b, s ) {
	for( var i = +b || 0, l = this.length; i < l; i++ ) {
		if( this[i]===v || s && this[i]==v ) { return i; }
	}
	return -1;
};

// Array.insert( index, value ) - Insert value at index, without overwriting existing keys
Array.prototype.insert = function( i, v ) {
	if (this.length == 0)
		return [v];
	if( i>=0 ) {
		var a = this.slice(), b = a.splice( i );
		a[i] = v;
		return a.concat( b );
	}
};

Array.prototype.indexOf = function(obj) {
	for (var i = 0; i < this.length; i++) {
		if (obj == this[i])
			return i;
	}
	return -1;
};

Array.prototype.each = function(f) {
	for (var i = 0; i < this.length; i++) {
		f(this[i]);
	}
};

Array.prototype.find = function(f) {
	for (var i = 0; i < this.length; i++) {
		if (f(this[i]))
			return this[i];
	}
};

Array.prototype.filter = function(f) {
	var filter = [];
	for (var i = 0; i < this.length; i++) {
		if (f(this[i]))
			filter.push(this[i]);
	}
	return filter;
};
Array.prototype.contains = function(obj) {
	for (var i = 0; i < this.length; i++) {
		if (obj == this[i])
			return true;
	}
};

Array.prototype.clone = function() {
	var clone = [];
	for (var i = 0; i < this.length; i++) {
		clone.push(this[i]);
	}
	return clone;
};

Array.prototype.remove = function(from, to) {
  this.splice(from, (to || from || 1) + (from < 0 ? this.length : 0));
  return this.length;
};

Array.prototype.removeItem = function(item) {
	return this.remove(this.indexOf(item));
}

Array.prototype.extend = function(array) {
	for (var i = 0; i < array.length; i++) {
		this.push(array[i]);
	}
}

Array.prototype.last = function() {
	return this[this.length - 1];
}
