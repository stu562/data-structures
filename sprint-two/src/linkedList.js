var LinkedList = function(value) {
  var list = {};

  list.value = value; 
  list.head = null;
  list.tail = null;//why? - because no node exist 
  // list.length = 0;//need to keep track of length of list

  list.addToTail = function(value) {
    //adds to end of list
    // var newNode = new Node(value, null, this.tail); 
    //instantiate the new node where node (value, next, prev)

    if (!list.tail) {
      list.tail = value;
    } else {
      list.head = value;
    }

    list.tail = value;
  };

  list.removeHead = function() {
    //removes first node
    if (!list.head) { //if head is null; don't do anything 
      return null;
    }

    let value = list.head.value;
    list.head = list.head;

    if (list.head) {
      list.head = null;
    } else {
      list.tail = null;
    }
    return value;
  };

  list.contains = function(target) {
    //return bool if value is in linked list
    let currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return currentNode;
      }
      currentNode = currentNode.next; // change current to the next 
    }
    return null;
  };

  return list;
};

// var Node = function(value, next, prev) {
//   var node = {};//create obj

//   node.value = value; // store
//   node.next = null; // curently not linked 
//   node.prev = null;// prev node

//   return node;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */