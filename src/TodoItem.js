function TodoItem(label){
	this.label = label;
}

TodoItem.prototype.setCompleted = function(isCompleted){
	this.isCompleted = isCompleted;
};


var label = "This is a test label";
var todoItem = new TodoItem(label);
test("set label", todoItem.label == label);

todoItem.setCompleted(true);
test("setCompleted to true", todoItem.isCompleted == true);

todoItem.setCompleted(false);
test("setCompleted to false", todoItem.isCompleted == false);



