class Stack {
  constructor() {
    this.list = [];
    this.size = 0;
  }
  push(elem) {
    this.size += 1;
    return this.list.push(elem);
  }

  pop() {
    this.size -= 1;
    return this.list.pop();
  }

  peek() {
    if (!this.size) return null;
    return this.list[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.list = [];
    this.size = 0;
  }
}

module.exports = { Stack };
