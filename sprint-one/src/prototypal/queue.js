var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObj = Object.create(queueMethods);
  queueObj.enqueueCount = 0;
  queueObj.dequeueCount = 0;
  return queueObj;

};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this['"' + this.enqueueCount + '"'] = value;
  this.enqueueCount -= 1; 
};

queueMethods.dequeue = function () {
  if (this.dequeueCount > this.enqueueCount) {
    var temp = this['"' + this.dequeueCount + '"']; //store data before the delete occurs
    delete this['"' + this.dequeueCount + '"'];
    this.dequeueCount -= 1;
  }
  return temp;	
};
queueMethods.size = function () {
  if (this.dequeueCount >= this.enqueueCount) { //base case, error protection 
    return Math.abs(this.enqueueCount - this.dequeueCount);// converts neg to counting numbers 
  }
  return this.enqueueCount; // size of the enqueue that are in queue 
};


