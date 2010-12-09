var Application = Controller.extend({
	init: function(phoneGap) {
        window.APP = this;
		this._super.apply(arguments);
		this.browser = new Browser();
		var self = this;
		this.data = {};

		if (typeof phoneGap !== "undefined") {
			self.browser.isPhoneGap = phoneGap;
		}

		if (self.browser.isPhoneGap) {
			document.addEventListener("deviceready", function() { self.ready() }, false);
		} else {
			window.addEventListener("load", function() { 
				self.ready();
			}, false);
		}
		window.addEventListener("resize", function(e) {
			self.resize(window.innerWidth, window.innerHeight);
		});
	},
	ready: function() {
		if (this.browser.isMobile)
			elem.addClass(document.body, "Mobile");
		this.trigger("ready");
    },
	resize: function(width, height) {
		this.trigger("resize", [width, height]);
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
