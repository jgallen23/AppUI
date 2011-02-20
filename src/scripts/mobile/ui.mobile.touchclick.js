//Inspired heavily from http://cubiq.org/remove-onclick-delay-on-webkit-for-iphone
//
ui.mobile.TouchClick = function(el) {
    this.element = el;
    if( window.Touch ) this.element.addEventListener('touchstart', this, false);
}

ui.mobile.TouchClick.prototype = {
    handleEvent: function(e) {
        switch(e.type) {
            case 'touchstart': this.onTouchStart(e); break;
            case 'touchmove': this.onTouchMove(e); break;
            case 'touchend': this.onTouchEnd(e); break;
        }
    },

    destroy: function() {
        this.element.removeEventListener('touchstart', this, false);
    },

    onTouchStart: function(e) {
        if (e.target.tagName != "SELECT") {
            e.preventDefault();
            e.stopPropagation();

            this.moved = false;

            this.element.addEventListener('touchmove', this, false);
            this.element.addEventListener('touchend', this, false);
        }

    },

    onTouchMove: function(e) {
        this.moved = true;
    },

    onTouchEnd: function(e) {
        this.element.removeEventListener('touchmove', this, false);
        this.element.removeEventListener('touchend', this, false);

        if( !this.moved ) {
            // Place your code here or use the click simulation below
            var theTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            if(theTarget.nodeType == 3) theTarget = theTarget.parentNode;

            var theEvent = document.createEvent('MouseEvents');
            theEvent.initEvent('click', true, true);
            theTarget.dispatchEvent(theEvent);
            console.log("touch click event fired");
        }
    }
};
