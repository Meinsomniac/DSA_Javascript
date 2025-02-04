class Queue {
  constructor(list) {
    this.list = list?.length && Array.isArray(list) ? list : [];
    this.size = Array.isArray(list) ? list.length : 0;
  }

  //add element at the end of the queue
  enqueue(elem) {
    this.list.push(elem);
    this.size++;
    return this.size;
  }

  //removes element at the start of the array
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    this.size--;
    return this.list.shift();
  }

  //returns first element from the queue
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list[0];
  }

  //Checks whether queue is empty or not
  isEmpty() {
    return this.size == 0;
  }

  //returns the size of the queue
  getSize() {
    return this.size;
  }

  //resets the queue
  clear() {
    this.list = [];
    this.size = 0;
  }
}

class Deque extends Queue {
  constructor(...args) {
    super(...args);
  }

  enqueueFront(elem) {
    this.list.unshift(elem);
    this.size++;
    return this.size;
  }

  dequeueRear() {
    if (this.isEmpty()) return null;
    this.size--;
    return this.list.pop();
  }

  rear() {
    return this.list[this.size - 1];
  }
}

module.exports = { Queue, Deque };
