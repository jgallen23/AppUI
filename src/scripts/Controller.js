var Controller = Class.extend({
	init: function(element) {
		this.element = element;
	},
	bindClickEvents: function(obj) {
		var self = this;
		var $element = x$(this.element);
		for (var key in obj) {
			x$(key).on(INPUT_EVENT, self._clickEvent(obj[key]));
		}
	},
	_clickEvent: function(f) {
		var self = this;
		return function() {
			f.call(self);
		}
	},
	hide: function() {
		this.element.setStyle("display", "none");
	},
	show: function() {
		this.element.setStyle("display", "block");
	},
    animate: function(properties, cb) {
		var self = this;
		var endAnimate = function(event) {
            console.log("end animation");
			self.element[0].removeEventListener("webkitTransitionEnd", endAnimate, false);
            return;
			if (cb)
				cb();
		}


		for (prop in properties) {
			this.element.setStyle(prop, properties[prop]);
		}
		this.element[0].addEventListener("webkitTransitionEnd", endAnimate, false);
    },
	animateWithClass: function(className, properties, cb) {

        this.animate(properties, cb);
	}
});
