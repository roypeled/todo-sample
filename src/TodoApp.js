function TodoApp(){

	this.list = new TodoList();
	this.newItemLabel;

}

TodoApp.prototype.addItem = function(){
	var newItem = new TodoItem(this.newItemLabel);
	this.list.addItem(newItem);
	this.newItemLabel = null;
};


function TodoAppView(todoApp){
	var self = this,
		template;

	function init(){
		var source = document.getElementById("todoApp").innerHTML;
		template = Handlebars.compile(source);
		self.html = document.createElement("div");
	}
	
	function render(){
		self.html.innerHTML = template(todoApp);
		var list = self.html.querySelector(".list");
		var todoListView = new TodoListView(todoApp.list);
		list.appendChild(todoListView.html);
		
		var input = self.html.querySelector("input");
		input.addEventListener("change", onInputChanged);

		var addButton = self.html.querySelector('button');
		addButton.addEventListener("click", onAddClick);
	}
	
	function onInputChanged(){
		todoApp.newItemLabel = this.value;
	}

	function onAddClick(){
		todoApp.addItem();
		render();
	}

	init();
	render();
}