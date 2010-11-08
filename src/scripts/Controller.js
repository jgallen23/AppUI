var Controller = EventManager.extend({
	useLiveClickEvents: true,
	init: function(elementId) {
		this.element = document.getElementById(elementId);
		if (this.useLiveClickEvents) {
            var self = this;
            this.element.addEventListener(INPUT_EVENT, function(e) {
                if (e.target.getAttribute('data-onClick') && self.onClick[e.target.getAttribute("data-onClick")]) {
                    self.onClick[e.target.getAttribute("data-onClick")].call(self, e);
                }
            });
        }
		this.view = new View(this.element);
	},
	preventScrolling: function(e) {
		e.preventDefault(); 
	},
	enableScrolling: function() {
		document.removeEventListener("touchmove", this.preventScrolling, false);
	},
	disableScrolling: function() {
		document.addEventListener("touchmove", this.preventScrolling, false);
	},
	show: function() {
		this.view.show();
	},
	hide: function() {
		this.view.hide();
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
