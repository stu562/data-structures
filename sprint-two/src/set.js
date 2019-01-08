var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this['_storage'][item] = item;//why undefined? 
};

setPrototype.contains = function(item) {
	return this['_storage'][item].hasOwnProperty(item);
};

setPrototype.remove = function(item) {
	delete this['_storage'][item]
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
