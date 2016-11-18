var TodoListView = require("./TodoListView");
var template = require("./TodoApp.hb.html");

function TodoAppView(todoApp){
	var self = this;

	function init(){
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


module.exports = TodoAppView;
