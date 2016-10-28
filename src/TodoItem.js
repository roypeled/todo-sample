function TodoItem(label){
	this.label = label;
}

TodoItem.prototype.setCompleted = function(isCompleted){
	this.isCompleted = isCompleted;
};

function TodoItemView(todoItem){
	var template,
		self = this;

	function init(){
		var source = document.getElementById("todoItem").innerHTML;
		template = Handlebars.compile(source);
		self.html = document.createElement("div");
	}

	function render(){
		self.html.innerHTML = template(todoItem);
		
		self.html.querySelector(".toggle-completed")
			.addEventListener("click", onSetCompletedClick);
	}

	function onSetCompletedClick(){
		todoItem.setCompleted( !todoItem.isCompleted );
		render();
	}

	init();
	render();
}


var label = "This is a test label";
var todoItem = new TodoItem(label);
test("set label", todoItem.label == label);

todoItem.setCompleted(true);
test("setCompleted to true", todoItem.isCompleted == true);

todoItem.setCompleted(false);
test("setCompleted to false", todoItem.isCompleted == false);



