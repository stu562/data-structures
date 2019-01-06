var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stack = Object.create(stackMethods); 
  //do i need to use prototype or __proto__ ??? 
  stack.storage = {};
  stack.counter = 0;
  return stack;
};

var stackMethods = {};

// Stack.prototype = {};
stackMethods.prototype.push = function(value) {
  this.storage[this.counter] = value;//this points to the stacks object in the constructor
  this.counter += 1;
};

stackMethods.prototype.pop = function(value) {
  if (this.counter > 0) {
    this.counter -= 1;
    var temp = this.storage[this.counter]; //store data before the delete occurs
    delete this.storage[this.counter];
  }
  return temp; //get that value 
};

stackMethods.prototype.size = function(value) {
  return stack.counter;
};