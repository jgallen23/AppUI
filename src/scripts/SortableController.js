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
	enableSorting: function(target, e) {
		var self = this;
		/*this.startY = (e.touches)?e.touches[0].clientY:e.clientY;*/
		this.disableScrolling();
		console.log(target);
		this.selectedItem = target.parentNode;
		this.itemHeight = this.selectedItem.clientHeight;
		this.element.style.webkitUserSelect = "none";	
		var move = function(e) {
			self._mouseMove(target, e);
		};
		var up = function(e) {
			self.enableScrolling();
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
		if (itemOffset != this._itemOffset) {
			this._moved = true;
			var offsetNode = this.view.findAll('li')[itemOffset];
			var item = target.parentNode;
			this.element.insertBefore(this.selectedItem, offsetNode);
			this._itemOffset = itemOffset;
		}
	}
});

