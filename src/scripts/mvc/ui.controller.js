ui.Controller = ui.EventManager.extend({
	useLiveClickEvents: true,
	init: function(element) {
        if (!this.view)
            this.view = new ui.View(element);
		this._processEvents = true;
		if (this.useLiveClickEvents) {
            var self = this;
			this.view.element.addEventListener(ui.INPUT_EVENT, this, false); 
        }
	},
	handleEvent: function(e) {
		if (!this._processEvents)
			return;
		var self = this;
		setTimeout(function() {
			self._processEvents = true;
		}, 100);
		self._processEvents = false;
		if (e.type == ui.INPUT_EVENT) {
			var target = (e.target.nodeType == 1)?e.target:e.target.parentNode;
			if (target.getAttribute('data-action') && self[target.getAttribute("data-action")]) {
				self[target.getAttribute("data-action")].call(self, e, target);
			}
		}
	},
	enableEvents: function() {
		this._processEvents = true;
	},
	disableEvents: function() {
		this._processEvents = false;
	},
	destroy: function() {
		if (this.useLiveClickEvents) {
			this.view.element.removeEventListener(ui.INPUT_EVENT, this, false);
		}
		this._super();
		this.trigger("destroy");
	},
	show: function() {
		this.view.show();
		this.trigger("show");
	},
	hide: function() {
		this.view.hide();
		this.trigger("hide");
	}
});
