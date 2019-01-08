var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];// fix me
  //property that contains any number of children 
  _.extend(newTree, treeMethods);
  return newTree;
};

//functional shared style 
var treeMethods = {};
treeMethods.addChild = function(value) {
// input: any value
// sets that as the target of a node
// adds that node as a child of the tree
// method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
  // var newNode = {	value,
		// 	   		children: [],
		// 			};
  this.children.push([value])

  	
};

treeMethods.contains = function(target) {
//any input target value 
//returns a boolean if target exist inside of tree

	
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
