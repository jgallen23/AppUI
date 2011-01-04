ui.elem = {
	classRE: function(name) { return new RegExp("(^|\\s)"+name+"(\\s|$)") },
	hasClass: function(el, name){
		return this.classRE(name).test(el.className);
	},
	addClass: function(el, name){
		if (!el.length)
			return !this.hasClass(el, name) && (el.className += (el.className ? ' ' : '') + name);
		else {
			for (var i = 0, c = el.length; i < c; i++) {
				this.addClass(el[i], name);
			}
			return el;
		}

	},
	removeClass: function(el, name){
		if (!el.length)
			return el.className = el.className.replace(this.classRE(name), '');
		else {
			for (var i = 0, c = el.length; i < c; i++) {
				this.removeClass(el[i], name);
			}
			return el;
		}
	}
};
