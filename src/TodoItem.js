function TodoItem(label){
	this.label = label;
}

TodoItem.prototype.setCompleted = function(isCompleted){
	this.isCompleted = isCompleted;
};

module.exports = TodoItem;






















