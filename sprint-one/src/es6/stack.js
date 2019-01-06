class Stack {
  constructor() { //constructor function explicit 
    this.storage = {}; // prop's of newly created objects when made 
    this.counter = 0;
  }
  //each newlycreated objects will have a push, pop, size method 
  push(value) {
    this.storage[this.counter] = value;//this points to the stacks object in the constructor
    this.counter += 1;
  }

  pop() {
    if (this.counter > 0) {
      this.counter -= 1;
      var temp = this.storage[this.counter]; //store data before the delete occurs
      delete this.storage[this.counter];
    }
    return temp; //get that value 
  }

  size() {
    return this.counter;
  }
}


// var someStack = new Stack();