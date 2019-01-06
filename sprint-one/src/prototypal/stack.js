var Stack = function(value) {
  var stacks = Object.create(Stack.prototype);
   
  stacks.storage = {};
  stacks.counter = 0;
  return stacks;
};

var stackMethods = {};


Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;//this points to the sta cks object in the constructor
  this.counter += 1;
};

Stack.prototype.pop = function(value) {
  if (this.counter > 0) {
    this.counter -= 1;
    var temp = this.storage[this.counter]; //store data before the delete occurs
    delete this.storage[this.counter];
  }
  return temp; //get that value 
};

Stack.prototype.size = function(value) {
  return this.counter;
};


