class Queue {
  constructor() { //constructor function explicit 
    this.enqueueCount = 0;
    this.dequeueCount = 0;
  }

  enqueue(value) {
    this['"' + this.enqueueCount + '"'] = value;
    this.enqueueCount -= 1; 
  }
  dequeue() {
    if (this.dequeueCount > this.enqueueCount) {
      this.temp = this['"' + this.dequeueCount + '"']; //store data before the delete occurs
      delete this['"' + this.dequeueCount + '"'];
      this.dequeueCount -= 1;
    }
    return this.temp;	
  }
  size() {
    if (this.dequeueCount >= this.enqueueCount) { //base case, error protection 
      return Math.abs(this.enqueueCount - this.dequeueCount);// converts neg to counting numbers 
    }
    return this.enqueueCount; // size of the enqueue that are in queue 
  }
}