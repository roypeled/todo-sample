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

module.exports = TodoList;
