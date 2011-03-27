(function() {
    var onOrientationChange = function(e) {
        ui.notificationCenter.trigger("orientationChanged", e.orientation);
    };
    window.addEventListener("orientationChanged", onOrientationChange);
    ui.orientationChanged = function(f) {
        ui.notificationCenter.bind("orientationChanged", f);
    };
	/*ui.ready(onOrientationChange);*/
}());
