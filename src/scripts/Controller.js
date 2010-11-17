var Controller = EventManager.extend({
	useLiveClickEvents: true,
	init: function(elementId) {
		this.element = (typeof elementId === "string")?document.getElementById(elementId):elementId;
		if (this.useLiveClickEvents) {
            var self = this;
            var bind = function(e) {
                if (e.target.getAttribute('data-onClick') && self.onClick[e.target.getAttribute("data-onClick")]) {
                    self.onClick[e.target.getAttribute("data-onClick")].call(self, e);
                }
            };
			this.element.addEventListener(INPUT_EVENT, bind); 
			self.bind("destroy", function() { console.log("remove");self.element.removeEventListener(INPUT_EVENT, bind) });
        }
		this.view = new View(this.element);
	},
	destroy: function() {
		this.trigger("destroy");
	},
	show: function() {
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
