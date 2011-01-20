ui.PageController = ui.Controller.extend({
	slideIn: function(newController) {
		var delay = .3;
		this.view.animate("translate3d(-100%, 0, 0)", delay);
        newController.previousController = this;
        newController.view.animate("translate3d(0, 0, 0)", delay, function() {
            newController.trigger("visible");
        });
	},
	slideOut: function() {
		var delay = .3;
		this.view.animate("translate3d(100%, 0, 0)", delay);
		var self = this;
		this.previousController.view.animate("translate3d(0, 0, 0)", delay, function() {
            self.previousController.trigger('visible');
		});
	},
	slideDown: function() {
		var delay = .3;
		var y = document.body.clientHeight;
		this.view.element.style.top = -y+"px";
		this.view.animate("translate3d(0, "+y+"px, 0)", delay);
	},
	slideUp: function() {
		var delay = .3;
		var self = this;
		//var y = document.body.clientHeight;
		this.view.animate("translate3d(0, 0, 0)", delay, function() {
			self.view.element.style.top = "-5000px";
		});
	}
});
