if (browser.isMobile) {
	INPUT_EVENT = "click";
	INPUT_START_EVENT = "touchstart";
	INPUT_MOVE_EVENT = "touchmove";
	INPUT_END_EVENT = "touchend";
} else {
	INPUT_EVENT = "click";
	INPUT_START_EVENT = "mousedown";
	INPUT_MOVE_EVENT = "mousemove";
	INPUT_END_EVENT = "mouseup";
}
