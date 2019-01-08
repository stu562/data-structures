

// Instantiate a new graph
var Graph = function() {
	this.addObj = {};



};
var graphMethods = Object.create(Graph.prototype);

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	//method that takes a new node and adds it to the graph
	this.addObj[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.addObj[node] === node;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this.addObj[node];
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
	if (Graph.prototype.hasEdge) {
      this.addObj[fromNode].push(toNode);
	};
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	//delete both nodes 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


