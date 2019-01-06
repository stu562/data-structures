var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stacks = Object.create(stackMethods);
   
  stacks.storage = {};
  stacks.counter = 0;
  return stacks;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;//this points to the sta cks object in the constructor
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