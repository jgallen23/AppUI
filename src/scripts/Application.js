var Application = Controller.extend({
	init: function() {
        window.APP = this;
		this._super.apply(arguments);
		this.browser = new Browser();
		var self = this;

        window.addEventListener("load", function() { 
			if (self.browser.isMobile) {
				elem.addClass(document.body, "Mobile");
			}
            if (self.browser.isPhoneGap) {
                document.addEventListener("deviceready", function() { self.ready() }, false);
            } else {
                self.ready() 
            }
        }, false);
		window.addEventListener("resize", function(e) {
			self.resize();
		});
	},
	ready: function() {
		this.trigger("ready");
    },
	resize: function(e) {
		this.trigger("resize", [window.innerWidth, window.innerHeight]);
	},
    preventScrolling: function(e) {
		e.preventDefault(); 
	},
	enableScrolling: function() {
		document.body.style.overflow = "auto";
		document.removeEventListener("touchmove", this.preventScrolling, false);
        this.trigger("enableScrolling");
	},
	disableScrolling: function() {
		document.body.style.overflow = "hidden";
		document.addEventListener("touchmove", this.preventScrolling, false);
        this.trigger("disableScrolling");
    },
    disableScrollingPermanently: function() {
        var self = this;
        this.disableScrolling();
        this.disableScrolling = function() { self.trigger("disableScrolling"); };
        this.enableScrolling = function() { self.trigger("enableScrolling"); };
    }
});
