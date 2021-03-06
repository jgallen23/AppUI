var Controller = EventManager.extend({
	useLiveClickEvents: true,
	init: function(element) {
		this.view = new View(element);
		this.element = this.view.element;
		this._eventsEnabled = true;
		if (this.useLiveClickEvents) {
            var self = this;
			this.element.addEventListener(INPUT_EVENT, this); 
        }
	},
	handleEvent: function(e) {
		if (!this._eventsEnabled)
			return;
		var self = this;
		if (e.type == "click" || e.type == "touchdown") {
			if (e.target.getAttribute('data-action') && self.actions[e.target.getAttribute("data-action")]) {
				self.actions[e.target.getAttribute("data-action")].call(self, e);
			}
		}
	},
	disableEvents: function() {
		this._eventsEnabled = false;
	},
	enableEvents: function() {
		this._eventsEnabled = true;
	},
	destroy: function() {
		if (this.useLiveClickEvents) {
			this.element.removeEventListener(INPUT_EVENT, this);
		}
		this._super();
		this.trigger("destroy");
	},
	show: function() {
		if (APP)
			APP.currentController = this;
		this.view.show();
		this.trigger("show");
	},
	hide: function() {
		this.view.hide();
		this.trigger("hide");
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
