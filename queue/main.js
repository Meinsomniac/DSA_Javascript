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

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list[0];
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.list = [];
    this.size = 0;
  }
}

module.exports = { Queue };
