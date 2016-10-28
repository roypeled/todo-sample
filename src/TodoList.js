function TodoList(list){
	this.todoItemsList = list || [];
}

TodoList.prototype.addItem = function(todoItem){
	this.todoItemsList.push(todoItem);
};

TodoList.prototype.removeItem = function(todoItem){
	for(var i=0; i<this.todoItemsList.length; i++) {
		if (this.todoItemsList[i] == todoItem)
			break;
	}

	this.todoItemsList.splice(i, 1);
};

TodoList.prototype.getCompletedCount = function(){
	var count = 0;
	for(var i=0; i<this.todoItemsList.length; i++){
		if(this.todoItemsList[i].isCompleted)
			count++;
	}

	return count;
};

TodoList.prototype.getUncompletedCount = function(){
	return this.todoItemsList.length - this.getCompletedCount();
};

TodoList.prototype.clearCompleted = function(){
	this.todoItemsList = this.todoItemsList.filter(function(item){
		return !item.isCompleted;
	});
};



function TodoListView(todoList){
	var template,
		self = this;

	function init(){
		var source = document.getElementById("todoList").innerHTML;
		template = Handlebars.compile(source);
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
		itemView.onRemove(function(){
			todoList.removeItem(item);
			render();
		});
	}

	init();
	render();
}






// Tests
/*
var todoListTest = new TodoList();

test("Empty list", todoListTest.todoItemsList.length == 0);

var testItem = new TodoItem("testA");
todoListTest.addItem(testItem);
test("Add item", todoListTest.todoItemsList.length == 1);
test("completed count", todoListTest.getCompletedCount() == 0);
test("uncompleted count", todoListTest.getUncompletedCount() == 1);

todoListTest.clearCompleted();
test("clear completed", todoListTest.todoItemsList.length == 1);
test("completed count after clear", todoListTest.getCompletedCount() == 0);
test("uncompleted count after clear", todoListTest.getUncompletedCount() == 1);

testItem.setCompleted(true);
test("completed count after complete", todoListTest.getCompletedCount() == 1);
test("uncompleted count after complete", todoListTest.getUncompletedCount() == 0);

var testBItem = new TodoItem("testB");
todoListTest.addItem(testBItem);
test("add another item", todoListTest.todoItemsList.length == 2);

todoListTest.clearCompleted();
test("clear completed", todoListTest.todoItemsList.length == 1);

todoListTest.removeItem(testBItem);
test("remove item", todoListTest.todoItemsList.length == 0);
*/
