var TodoItemView = require("./TodoItemView");
var template = require("./TodoList.hb.html");

function TodoListView(todoList){
	var self = this;

	function init(){
		self.html = document.createElement("div");
	}

	function render(){
		self.html.innerHTML = template(todoList);
		var ul = self.html.querySelector("ul");
		renderItems(ul);
	}

	function renderItems(ul){
		for(var i=0; i<todoList.todoItemsList.length; i++){
			var item = todoList.todoItemsList[i];
			var itemView = new TodoItemView(item);
			registerRemove(item, itemView);
			ul.appendChild(itemView.html);
		}
	}

	function registerRemove(item, itemView){
		var removeItem = function(){
			todoList.removeItem(item);
			render();
		};

		itemView.onRemove(removeItem);
	}

	init();
	init();
	render();
}

module.exports = TodoListView;
