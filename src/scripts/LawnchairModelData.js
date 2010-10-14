var LawnchairData = DataProvider.extend({
	init: function(key) {
		this.data = new Lawnchair(key);
	},
	find: function(cb) {
		this.data.all(cb);		
	},
	findById: function(id, cb) {
		this.data.get(id, cb);
	},
	save: function(obj, cb) {
		this.data.save(obj, cb)
	},
	remove: function(obj, cb) {
		this.data.remove(obj.id, cb)
	},
	removeAll: function() {
		this.data.nuke();
	}
});

