var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var counter = 0;

  this.pop();
  this.push();
  this.size();

};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;//this points to the stacks object in the constructor
  this.counter += 1;
};

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    this.counter -= 1;
    var temp = this.storage[this.counter]; //store data before the delete occurs
    delete this.storage[this.counter];
  }
  return temp;
};

Stack.prototype.size = function() {
  return counter;
};