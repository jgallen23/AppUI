var View = EventManager.extend({
	init: function(element) {
		this.element = (typeof element === "string")?document.getElementById(element):element;
	},
	render: function(templateId, data) {
		var tmp = template(templateId, data);
		this.element.innerHTML = tmp;
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
	show: function() {
		this.element.style.display = "block";
	},
	hide: function() {
		this.element.style.display = "none";
	},
	findParentWithAttribute: function(element, attribute) {
		do {
			if (element.getAttribute(attribute)) 
				return element;
			element = element.parentNode;
		} while (element)
	}
});
