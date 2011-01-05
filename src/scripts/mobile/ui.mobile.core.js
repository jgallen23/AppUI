ui.mobile = {
    preventScrolling: function(e) {
		e.preventDefault(); 
	},
	enableScrolling: function() {
		document.body.style.overflow = "auto";
		document.removeEventListener("touchmove", this.preventScrolling, false);
        ui.notificationCenter.trigger("enableScrolling");
	},
	disableScrolling: function() {
		document.body.style.overflow = "hidden";
		document.addEventListener("touchmove", this.preventScrolling, false);
        ui.notificationCenter.trigger("disableScrolling");
    },
    disableScrollingPermanently: function() {
        this.disableScrolling();
        this.disableScrolling = function() { ui.notificationCenter.trigger("disableScrolling"); };
        this.enableScrolling = function() { ui.notificationCenter.trigger("enableScrolling"); };
    }
}
