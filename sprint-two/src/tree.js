var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;// fix me
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
  if (!this.children) {
    this.children[0] = [];//array storage 
  }

  this.children.push(value); 
  // this.children = value;
};

treeMethods.contains = function(target) {
//any input target value 
//returns a boolean if target exist inside of tree

	
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
