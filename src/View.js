function View(templateId){
	var self = this,
		template;
	
	function init(){
		var source = document.getElementById(templateId).innerHTML;
		template = Handlebars.compile(source);
		self.html = document.createElement("div");
	}
	
	function render(data){
		self.html.innerHTML = template(data);
	}
	
	this.init = init;
	this.render = render;
	
}