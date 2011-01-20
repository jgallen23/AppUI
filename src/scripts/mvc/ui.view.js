ui.View = ui.EventManager.extend({
	init: function(element) {
		this.element = (typeof element === "string")?document.getElementById(element):element;
	},
	renderAt: function(element, templateId, data) {
		element = (typeof element === "string")?this.find(element):element;
		var tmp = ui.template(templateId, data);
		element.innerHTML = tmp;
	},
	render: function(templateId, data) {
		this.renderAt(this.element, templateId, data);
	},
	find: function(selector) {
		return this.element.querySelector(selector);
	},
	findAll: function(selector, f) {
		var items = this.element.querySelectorAll(selector);
		if (f) {
			for (var i = 0, c = items.length; i < c; i++) {
				f(items[i], i);
			}
		}
		return items;
	},
	animate: function(transform, delay, cb) {
        ui.anim.transform(this.element, transform, delay, cb);
	},
	remove: function() {
		//TODO: unbind all events
		this.element.innerHTML = "";
    },
	show: function() {
		this.element.style.display = "block";
		this.trigger("show");
	},
	hide: function() {
		this.element.style.display = "none";
		this.trigger("hide");
	},
	findParentWithAttribute: function(element, attribute) {
		do {
			if (element.getAttribute(attribute)) 
				return element;
			element = element.parentNode;
		} while (element)
	}
});
