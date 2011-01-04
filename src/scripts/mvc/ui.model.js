ui.Model = ui.EventManager.extend({
	init: function(initial) {
		if (!this._data) this._data = {};
		if (initial) {
			extendObjStrict(this._data, initial);
		}
		this.id = '';

		var self = this;
		for (var prop in this._data) {
			var get = function(p) {
				return function() { return self._getProperty(p); }
			}(prop);
			var set = function(p) {
				return function(value) { self._setProperty(p, value); }
			}(prop);
			this.__defineGetter__(prop, get);
			this.__defineSetter__(prop, set);
		}
	},
	_getProperty: function(prop) {
		return this._data[prop];
	},
	_setProperty: function(prop, value) {
		this._propertySet(prop, value, this._data[prop]);
		this._data[prop] = value;
	},
	_propertySet: function(prop, value, oldValue) {
		this.trigger("propertySet", [prop, value, oldValue]);
	},
	__defineProperty__: function(key, getter, setter) {
		this.__defineGetter__(key, getter);
		if (setter) this.__defineSetter__(key, setter);
	}
});
