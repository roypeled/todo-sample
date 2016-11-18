module.exports = {
	entry: {
		app: "./index.js"
	},

	output: {
		filename: "app.js",
		path: "dist"
	},

	module: {
		loaders: [
			{ test: /hb.html$/, loader: "handlebars-loader" }
		]
	},

	devtool: "source-map"
};
