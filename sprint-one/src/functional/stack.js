var Stack = function(value) {
  var someInstance = {};

  //in funcitonal instatiation - methods are stored in the newly created object
  // Use an object with numeric keys to store values
  // var storage = {};

  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[counter] = value;
    counter += 1;
  };

  someInstance.pop = function(value) {
    if (counter > 0) {
      counter -= 1;
      var temp = someInstance[counter]; //store data before the delete occurs
      delete someInstance[counter];
    }
    return temp; //get that value 
  };

  someInstance.size = function(value) {
    return counter;
  };

  return someInstance;
};

//var stack;
// stack = Stack(); //institation stored in the var stack
// stack.push('a');
// stack.pop();