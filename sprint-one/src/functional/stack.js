var Stack = function(value) {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    counter += 1;
    someInstance[counter] = value;
    
  };

  someInstance.pop = function(value) {
    if (counter > 0){
      counter -= 1;
      delete someInstance[counter];
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
