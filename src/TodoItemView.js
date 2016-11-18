var template = require("./TodoItem.hb.html");

function TodoItemView(todoItem){
	var self = this,
		onRemoveHandler;

	function init(){
		self.html = document.createElement("div");
	}

	function render(){
		self.html.innerHTML = template(todoItem);

		self.html.querySelector(".toggle-completed")
			.addEventListener("click", onSetCompletedClick);

		self.html.querySelector(".remove")
			.addEventListener("click", onRemoveClick);
	}

	function onSetCompletedClick(){
		todoItem.setCompleted( !todoItem.isCompleted );
		render();
	}

	function onRemoveClick(){
		if(onRemoveHandler)
			onRemoveHandler();
	}

	function onRemove(handler){
		onRemoveHandler = handler
	}

	this.onRemove = onRemove;

	init();
	render();
}

module.exports = TodoItemView;
