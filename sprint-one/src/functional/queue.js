var Queue = function() {
  // Use an object with numeric keys to store values
  // var storage = {};
  var someInstance = {};
  var enqueueCount = 0;
  var dequeueCount = 0;
  // Implement the methods below
  //enqueue - mimics enqueue - unshifts adds to begining and increase stack size 
  //dequee - pop the last 
  someInstance.enqueue = function(value) {
    someInstance['"' + enqueueCount + '"'] = value;
    enqueueCount -= 1; 
    //add a string to the back of the queue, no return
  };

  someInstance.dequeue = function() {
    if (dequeueCount > enqueueCount) {
      var temp = someInstance['"' + dequeueCount + '"']; //store data before the delete occurs
      delete someInstance['"' + dequeueCount + '"'];
      dequeueCount -= 1;
    }
    return temp;
  };

  someInstance.size = function() {
    if (dequeueCount >= enqueueCount) { //base case, error protection 
      return Math.abs(enqueueCount - dequeueCount);// converts neg to counting numbers 
    }
  };

  return someInstance;
};
