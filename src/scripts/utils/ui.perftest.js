ui.utils.PerfTest = ui.Class.extend({
	init: function(name) {
		this.name = name;
	},
	start: function() {
		this.startTime = new Date().getTime();
		return this;
	},
	end: function() {
		this.endTime = new Date().getTime();
		console.log(String.format("PerfTest {0}: {1}", this.name, this.endTime - this.startTime));
		return this;
	}
});
