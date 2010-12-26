var PageController = Controller.extend({
	animate: function(transform, delay) {
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
		var x = this.element.clientWidth;
		//controller.element.style.left = -x+"px";
		this.animate("translate3d(0, 0, 0)", delay);
		controller.animate("translate3d(0, 0, 0)", delay);
	},
	slideDown: function() {
	}
});
