var Browser = function() {
	this.isMobile = (navigator.userAgent.match(/iPad|iPhone/i) != null);
	this.isPhoneGap = (this.isMobile && DeviceInfo && DeviceInfo.uuid != null);
}
browser = new Browser();
