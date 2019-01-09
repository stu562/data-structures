var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
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
// method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
// var newNode = {	value,
//children: [],
  //need to check if root
  if (this.children === null) {
  	this.children = [];
  }
  var node = Tree (value);
  this.children.push(node)// push into the array 
};

treeMethods.contains = function(target) {
//any input target value 
//returns a boolean if target exist inside of tree
//recursion? 
// if (n === target) {
//   return target;
// } else {
//   go further into the tree 
// }

  //base case - check a tree with one node first 

  //recursive case 
  //[{…}, {…}, null] where each object is another child 

  if (this.value === target) {
    return true;
  } 

  if (this.children === null) {
    return false;
  }
  //if the root has no children 

  for (var i = 0; i < this.children.length; i++) {
    // if (this.children[i].value === target) {
    //   //look for the value and match the target 
    //   return true; 
      // recursion
      //if target does not match
   // if (Array.isArray(this.children[i].children)) {
    // return this.children[i].contains(target) === true;
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false; 
}
// };

/* complexity 

*/
 // * Complexity: What is the time complexity of the above functions?
 //  addChild - o(n) - linear - meaning speed depends linearlly on data size 
 //  contains - o(n)
 // */
