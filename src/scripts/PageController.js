var PageController = Controller.extend({
	animate: function(transform, delay, cb) {
		var self = this;
		if (cb) {
			var end = function() {
				console.log("animation end");
				cb();
				self.element.removeEventListener("webkitTransitionEnd", end, false);
			}
			this.element.addEventListener("webkitTransitionEnd", end, false);
		}
		this.element.style.webkitTransition = "-webkit-transform "+(delay||.5)+"s ease-in-out";
		this.element.style.webkitTransform = transform;
	},
	slideIn: function(newController) {
		var delay = .3;
		var x = this.element.clientWidth;
		newController.element.style.left = x+"px";
		//newController.show();
		this.animate("translate3d(-"+x+"px, 0, 0)", delay);
		newController.animate("translate3d(-"+x+"px, 0, 0)", delay);
	},
	slideOut: function(controller) {
		var delay = .3;
		//var x = this.element.clientWidth;
		//controller.element.style.left = -x+"px";
		this.animate("translate3d(0, 0, 0)", delay);
		var self = this;
		controller.animate("translate3d(0, 0, 0)", delay, function() {
			self.element.style.left = "5000px";
		});
	},
	slideDown: function() {
		var delay = .3;
		var y = document.body.clientHeight;
		this.element.style.top = -y+"px";
		this.animate("translate3d(0, "+y+"px, 0)", delay);
	},
	slideUp: function() {
		var delay = .3;
		//var y = document.body.clientHeight;
		this.animate("translate3d(0, 0, 0)", delay);
	}
});
