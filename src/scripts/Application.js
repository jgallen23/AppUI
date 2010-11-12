var Application = Controller.extend({
	init: function() {
		this._super.apply(arguments);
		var self = this;

        window.addEventListener("load", function() { 
            if (false && browser.isMobile) {
                document.addEventListener("deviceready", function() { self.ready() }, false);
            } else {
                self.ready() 
            }
        }, false);
	},
	ready: function() {
		this.trigger("ready");
	}
});
