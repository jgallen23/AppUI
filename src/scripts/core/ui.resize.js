(function() {
    var onResize = function() {
        ui.notificationCenter.trigger("resize", [window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", onResize);
    ui.resize = function(f) {
        ui.notificationCenter.bind("resize", f);
    };
    ui.ready(onResize);
}());
