(function() {
if (ui.browser.isMobile) {
    ui.INPUT_EVENT = "click";
	ui.INPUT_START_EVENT = "touchstart";
	ui.INPUT_MOVE_EVENT = "touchmove";
	ui.INPUT_END_EVENT = "touchend";
} else {
	ui.INPUT_EVENT = "click";
	ui.INPUT_START_EVENT = "mousedown";
	ui.INPUT_MOVE_EVENT = "mousemove";
	ui.INPUT_END_EVENT = "mouseup";
}
}());
