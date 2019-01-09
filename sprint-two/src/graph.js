
// Instantiate a new graph
var Graph = function() {
	this.vertices = [];
	this.edges = []; // storage 
	this.edgeCount = 0;

	// graphMethods;
};

// let graphMethods = Object.create(Graph.prototype)
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	//method that takes a new node and adds it to the graph
	this.vertices.push(node);
	this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

	//needs recursive call to look through entire graph 
	for (var i = 0; i < this.vertices.length; i++) {
    	(if this.vertices[i] === node) {
    		return true;
    	}
	}

	console.log('yeah got out of the loop')
	return false; 


};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	if ()
};

// Returns a boolean indicating whether two specified nodes are connected.  
//Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return (Graph.prototype.contains(fromNode) && Graph.prototype.contains(toNode))
	//can we do this??? 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	// method that creates a edge (connection) between two nodes 
	//if they both are present within the graph

	this.edges[fromNode].push(toNode);
	this.edges[toNode].push(fromNode);
	this.edgeCount++; //keep count 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	//delete both nodes 

	this.edgeCount--;//decrement 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	// for (var i = 0; i < this.vertices.length; i++) {
	// 	this.vertices[cb];
	// }
	//each taken from underbar 
	if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */