function test(name, value){
	console.log("Testing:", name, "[", value, "]");
	if(value == false)
		throw new Error("Test failed!");
}