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
	}
});
