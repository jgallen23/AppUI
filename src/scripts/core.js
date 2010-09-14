Array.prototype.remove = function(from, to) {
  this.splice(from, (to || from || 1) + (from < 0 ? this.length : 0));
  return this.length;
};


