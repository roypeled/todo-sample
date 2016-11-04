function TodoItem(label){
	this.label = label;
}

TodoItem.prototype.setCompleted = function(isCompleted){
	this.isCompleted = isCompleted;
};

function TodoItemView(todoItem){
	var self = this,
		onRemoveHandler;

	function render(){
		self.render(todoItem);

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

	this.init();
	render();
}

TodoItemView.prototype = new View("todoItem");
TodoItemView.prototype.constructor = TodoItemView;

var label = "This is a test label";
var todoItem = new TodoItem(label);
test("set label", todoItem.label == label);

todoItem.setCompleted(true);
test("setCompleted to true", todoItem.isCompleted == true);

todoItem.setCompleted(false);
test("setCompleted to false", todoItem.isCompleted == false);































