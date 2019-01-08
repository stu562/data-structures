

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  hash;
};


var hash = Object.create(HashTable.prototype);

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?

 insert, retrieve, remove is o(1) or constant. A very favorabble data structure.
 Maintains no memory of the hashing or string input. 
 */


