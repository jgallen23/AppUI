ui.Controller = ui.EventManager.extend({
	useLiveClickEvents: true,
	init: function(element) {
		this.view = new ui.View(element);
		this.element = this.view.element;
		if (this.useLiveClickEvents) {
            var self = this;
			this.element.addEventListener(ui.INPUT_EVENT, this); 
        }
	},
	handleEvent: function(e) {
		var self = this;
		if (e.type == "click" || e.type == "touchdown") {
			if (e.target.getAttribute('data-action') && self.actions[e.target.getAttribute("data-action")]) {
				self.actions[e.target.getAttribute("data-action")].call(self, e);
			}
		}
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
	}
});
