(function() {
var Browser = function() {
	this.isMobile = (navigator.userAgent.match(/iPad|iPhone/i) != null);
	this.isPhoneGap = (typeof PhoneGap !== 'undefined'); 
};
ui.browser = new Browser();
}());
