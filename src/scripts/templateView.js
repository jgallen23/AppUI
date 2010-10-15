var TemplateView = View.extend({
	_render: function(templateId, data) {
		var tmp = template(templateId, data);
		this.element.innerHTML = tmp;
	}
});
