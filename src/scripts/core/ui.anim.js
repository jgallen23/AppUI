ui.anim = {
    _bindAnimationCallback: function(element, cb) {
        if (cb) {
			var end = function() {
				cb();
				element.removeEventListener("webkitTransitionEnd", end, false);
			}
			element.addEventListener("webkitTransitionEnd", end, false);
		}
    },
    transform: function(element, transform, delay, cb) {
		var self = this;
	    this._bindAnimationCallback();	
		element.style.webkitTransition = "-webkit-transform "+(delay||.5)+"s ease-in-out";
		element.style.webkitTransform = transform;

    },
    fade: function(element, opacity, delay, cb) {
	    this._bindAnimationCallback();	
		element.style.webkitTransition = "opacity "+(delay||.5)+"s ease-in-out";
        element.style.opacity = opacity;
    }
}
