ui.PageController = ui.Controller.extend({
	animate: function(transform, delay, cb) {
        ui.anim.transform(this.view.element, transform, delay, cb);
	},
	slideIn: function(newController) {
		var delay = .3;
		this.animate("translate3d(-100%, 0, 0)", delay);
        newController.previousController = this;
        newController.animate("translate3d(0, 0, 0)", delay, function() {
            newController.trigger("visible");
        });
	},
	slideOut: function() {
		var delay = .3;
		this.animate("translate3d(100%, 0, 0)", delay);
		var self = this;
		this.previousController.animate("translate3d(0, 0, 0)", delay, function() {
            self.previousController.trigger('visible');
		});
	},
	slideDown: function() {
		var delay = .3;
		var y = document.body.clientHeight;
		this.view.element.style.top = -y+"px";
		this.animate("translate3d(0, "+y+"px, 0)", delay);
	},
	slideUp: function() {
		var delay = .3;
		var self = this;
		//var y = document.body.clientHeight;
		this.animate("translate3d(0, 0, 0)", delay, function() {
			self.view.element.style.top = "-5000px";
		});
	}
});
