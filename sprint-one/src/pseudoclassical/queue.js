var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // var queueObj = {};
  this.enqueueCount = 0;
  this.dequeueCount = 0;
  // _.extend(this, queueMethods);
  // queueMethods;
};

// let queueMethods = Object.create(Queue.prototype);


// var queueMethods = {};
Queue.prototype.enqueue = function (value) {
  this['"' + this.enqueueCount + '"'] = value;
  this.enqueueCount -= 1; 
};

Queue.prototype.dequeue = function () {
  if (this.dequeueCount > this.enqueueCount) {
    this.temp = this['"' + this.dequeueCount + '"']; //store data before the delete occurs
    delete this['"' + this.dequeueCount + '"'];
    this.dequeueCount -= 1;
  }
  return this.temp;	
};
Queue.prototype.size = function () {
  if (this.dequeueCount >= this.enqueueCount) { //base case, error protection 
    return Math.abs(this.enqueueCount - this.dequeueCount);// converts neg to counting numbers 
  }
  return this.enqueueCount; // size of the enqueue that are in queue 
};

// var Queue = function () {
//   this._storage = {}
//   this._start = 0;
//   this._end = 0;
// }

// Queue.prototype.enqueue = function (value) {
//   this._storage[this._end++] = value;
// };

// Queue.prototype.dequeue = function () {
//   var result = this._storage[this._start];
//   if (this.size()) {
//     delete this._storage[this._start];
//     this._start++;
//   }
//   result;
// };
// Queue.prototype.size = function () {
//   return this._end-this._start;
// };