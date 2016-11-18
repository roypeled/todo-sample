var TodoList = require("./TodoList");
var TodoItem = require("./TodoItem");

function TodoApp(){
	this.list = new TodoList();
	this.newItemLabel;
}

TodoApp.prototype.addItem = function(){
	var newItem = new TodoItem(this.newItemLabel);
	this.list.addItem(newItem);
	this.newItemLabel = null;
};

module.exports = TodoApp;
