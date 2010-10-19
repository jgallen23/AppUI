var View = EventManager.extend({
	init: function(elementId) {
		this.element = document.getElementById(elementId);
        if (this.useLiveClickEvents) {
            var self = this;
            this.element.addEventListener("click", function(e) {
                if (self.onClick[e.target.getAttribute("data-click")]) {
                    self.onClick[e.target.getAttribute("data-click")].call(self, e);
                }
            });
        }
	},
	bindViewEvent: function(selector, eventName, f) {
		this.bindElementEvent(this.element, selector, eventName, f);
	},
	bindElementEvent: function(element, selector, eventName, f) {
		var elements = element.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener(eventName, f);
		}
	},
	find: function(selector) {
		return this.element.querySelector(selector);
	},
	findAll: function(selector) {
		return this.element.querySelectorAll(selector);
	},
	remove: function() {
		//TODO: unbind all events
		this.element.innerHTML = "";
    },
    useLiveClickEvents: false
});
