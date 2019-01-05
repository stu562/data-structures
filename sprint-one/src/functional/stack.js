var Stack = function(value) {
  var someInstance = {};

  // Use an object with numeric keys to store values
  // var storage = {};

  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[counter] = value;
    counter += 1;
  };

  someInstance.pop = function(value) {
    if (counter > 0){
      counter -= 1;
      var temp = someInstance[counter]
      delete someInstance[counter];
    }
    return temp;
  };

  someInstance.size = function(value) {
    return counter;
  };

  return someInstance;
};

