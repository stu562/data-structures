var Stack = function(value) {
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
//place variable here? 
// var  counter = 0;
// var storage = {};  
// var stackMethods = {};
// call upon methods here:

  var stacks = {};
  stacks.counter = 0;
  stacks.storage = {};
  //use extend  for reference
  extend(stacks, stackMethods);//to prevent duplication  
  return stacks;
};
  
var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};
// var counter = 0;
// var storage = {};  


var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
};

stackMethods.pop = function(value) {
  if (this.counter > 0) {
    this.counter -= 1;
    var temp = this.storage[this.counter]; //store data before the delete occurs
    delete this.storage[this.counter];
  }
  return temp; //get that value 
};

stackMethods.size = function(value) {
  return this.counter;
};



// var stack = Stack() from the test

