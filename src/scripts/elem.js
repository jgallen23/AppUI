var elem = {
	classRE: function(name) { return new RegExp("(^|\\s)"+name+"(\\s|$)") },
	hasClass: function(el, name){
		return this.classRE(name).test(el.className);
	},
	addClass: function(el, name){
		return !this.hasClass(el, name) && (el.className += (el.className ? ' ' : '') + name);
	},
	removeClass: function(el, name){
		return el.className = el.className.replace(this.classRE(name), '');
	}
}
