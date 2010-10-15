var View = EventManager.extend({
	init: function(elementId) {
		this.element = document.getElementById(elementId);
	},
	bindElementEvent: function(selector, eventName, f) {
		var elements = this.element.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener(eventName, f);
		}
	}
});
