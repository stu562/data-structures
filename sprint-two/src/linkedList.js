var LinkedList = function(value) {
  var list = {};

  list.value = value; 
  list.head = null;
  list.tail = null;//why? - because no node exist 
  // list.length = 0;//need to keep track of length of list
  list.length = 0;

  list.addToTail = function(value) {
    //adds to end of list
    var newNode = new Node(value); 
    //instantiate the new node where node 
    // var newNode = { value }; 
    newNode.next = list.tail; 
    list.tail = newNode;       
    list.length++;
    list.head = value;
  };

  list.removeHead = function() {
    if (list.length === 0) {
        return undefined;
    }
        
    var value = list.tail.value;
    list.tail.next = list.head; // repoints head
    list.length--;
        
    return value;
  };

  list.contains = function(target) {
    //return bool if value is in linked list
    let currentNode = list.tail;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next; // change current to the next 
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */