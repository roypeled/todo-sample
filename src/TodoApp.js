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
	var self = this;
	
	function render(){
		self.render(todoApp);

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

	this.init();
	render();
}

TodoAppView.prototype = new View("todoApp");
TodoAppView.prototype.constructor = TodoAppView;