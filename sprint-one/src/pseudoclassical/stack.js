var Stack = function(value) {
  this.storage = {};
  this.counter = 0;
  stackMethods;
};

let stackMethods = Object.create(Stack.prototype); //creates stackMethods object with all of Stack constructor prop
Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;//this points to the stacks object in the constructor
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


