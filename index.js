var TodoApp = require("./src/TodoApp");
var TodoAppView = require("./src/TodoAppView");

var app = new TodoApp();
var view = new TodoAppView(app);
document.body.appendChild(view.html);
