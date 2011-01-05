(function() {
	if (ui.browser.isPhoneGap) {
		document.addEventListener("deviceready", function() { 
			ui.notificationCenter.trigger("ready");
		}, false);
	} else {
		window.addEventListener("load", function() { 
			ui.notificationCenter.trigger("ready");
		}, false);
	}
	ui.ready = function(f) {
		ui.notificationCenter.bind("ready", f);
	}
}());
