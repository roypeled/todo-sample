function TodoApp(){

	this.list = [];
	this.newItemLabel;

}

TodoApp.prototype.addItem = function(){
	var newItem = this.newItemLabel;
	this.list.push(newItem);
	this.newItemLabel = null;
};

angular.module("app", [])
	.component("todoApp", {
		template: document.querySelector("#todoApp").innerHTML,
		controller: TodoApp
	});