function TodoItem(){
}

TodoItem.prototype.setCompleted = function(isCompleted){
	this.isCompleted = isCompleted;
};

angular.module("app")
	.component("todoItem", {
		template: document.querySelector("#todoItem").innerHTML,
		bindings: {
			onRemove: "&",
			label: "<"
		},
		controller: TodoItem
	});

var label = "This is a test label";
var todoItem = new TodoItem(label);
test("set label", todoItem.label == label);

todoItem.setCompleted(true);
test("setCompleted to true", todoItem.isCompleted == true);

todoItem.setCompleted(false);
test("setCompleted to false", todoItem.isCompleted == false);































