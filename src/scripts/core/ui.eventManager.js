var EventManager = Class.extend({
	init: function() {

	},
	destroy: function() {
		this.callbacks = null;
	},
	bind: function(event, callback) {
		if (typeof event === "object") {
			for (var key in event) {
				this.bind(key, event[key]);
			}
		} else {
			this.callbacks = this.callbacks || {}
			this.callbacks[event] = this.callbacks[event] || [];
			this.callbacks[event].push(callback);
		}
		return this;
	},
	trigger: function(name, data) {
		this.callbacks = this.callbacks || {}

		var callbacks = this.callbacks[name];

		if (callbacks) {
			for (var i = 0; i < callbacks.length; i++) {
				callbacks[i].apply(this, data || []);
			}
		}

		return this;
	},
	unbind: function(event, callback) {
		this.callbacks = this.callbacks || {}

		if (callback) {
			var callbacks = this.callbacks[event] || [];

			for (var i = 0; i < callbacks.length; i++) {
				if (callbacks[i] === callback) {
					this.callbacks[event].splice(i, 1);
				}
			}
		} else {
			delete this.callbacks[event];
		}
	
		return this;
    },
    handleEvent: function(e) {

    }
});
