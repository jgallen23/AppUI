var View = EventManager.extend({
	init: function(elementId) {
		this.element = document.getElementById(elementId);
	},
	bindViewEvent: function(selector, eventName, f) {
		this.bindElementEvent(this.element, selector, eventName, f);
	},
	bindElementEvent: function(element, selector, eventName, f) {
		var elements = element.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener(eventName, f);
		}
	}
});
