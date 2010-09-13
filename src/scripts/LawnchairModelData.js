var LawnchairData = Class.extend({
	init: function(key) {
		this.data = new Lawnchair(key);
	},
	get: function(cb) {
		this.data.all(cb);		
	},
	getById: function(id, cb) {
		this.data.get(id, cb);
	},
	save: function(obj) {
		this.data.save(obj)
	},
	remove: function(obj, cb) {
		this.data.remove(obj.id, cb)
	},
	removeAll: function() {
		this.data.nuke();
	}
});

