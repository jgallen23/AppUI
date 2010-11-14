var SortableController = Controller.extend({
	useLiveClickEvents: false,
	init: function(elementId) {
		this._super(elementId);
		this._moved = false;
		this._itemOffset = 0;
		this.startY = this.element.offsetTop;
		this.bindTriggers();	
	},
	bindTriggers: function() {
		var triggers = this.view.findAll('[data-onClick=trigger]');
		var self = this;
		for (var i = 0; i < triggers.length; i++) {
			(function(trigger) {
				trigger.addEventListener(INPUT_START_EVENT, function(e) {
					self.enableSorting(trigger, e);
				});
			})(triggers[i])
		}
	},
    _findIndex: function(node) {
        var items = this.view.findAll("li");
        for (var i = 0; i < items.length; i++) {
            if (items[i] == node) {
                return i;
            }
        };
        return -1;
    },
	enableSorting: function(target, e) {
		var self = this;
		/*this.startY = (e.touches)?e.touches[0].clientY:e.clientY;*/
		APP.disableScrolling();
        self.trigger("start");
		this.selectedItem = target.parentNode;
        this._itemOffset = this._findIndex(this.selectedItem); 
		this.itemHeight = this.selectedItem.clientHeight;
		this.element.style.webkitUserSelect = "none";	
		var move = function(e) {
			self._mouseMove(target, e);
		};
		var up = function(e) {
			APP.enableScrolling();
            self.trigger('end');
			if (self._moved)
				self.trigger('sorted');
			elem.removeClass(self.selectedItem, 'sorting');
			self.element.removeEventListener(INPUT_MOVE_EVENT, move);
			self.element.removeEventListener(INPUT_END_EVENT, up);
		}
		this.element.addEventListener(INPUT_MOVE_EVENT, move);
		this.element.addEventListener(INPUT_END_EVENT, up);
		elem.addClass(self.selectedItem, 'sorting');
	},
	_mouseMove: function(target, e) {
		var clientY = (e.touches)?e.touches[0].clientY:e.clientY;
		var offset = clientY - this.startY;
		var itemOffset = Math.floor(offset/this.itemHeight);
        var up = (clientY < (this.startY + (this._itemOffset * this.itemHeight)));
        //console.log(offset, itemOffset, this._itemOffset, up);
		if (itemOffset != this._itemOffset) {
			this._moved = true;
			var offsetNode = this.view.findAll('li')[(up)?itemOffset:itemOffset+1];
            if (up)
                this.element.insertBefore(this.selectedItem, offsetNode);
            else
                this.element.insertBefore(this.selectedItem, offsetNode);
			this._itemOffset = itemOffset;
		}
	}
});

