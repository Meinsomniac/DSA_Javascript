const { Deque } = require("./main");

function slidingWindowMaximum(items = [], size) {
  if (!Array.isArray(items) && !items?.length) return [];

  const slider = new Deque();
  let result = [];

  for (let i = 0; i < size; i++) {
    if (!slider.isEmpty() && items[slider.front()] <= items[i]) {
      slider.dequeue();
    }
    slider.enqueue(i);
    console.log(slider);
  }
}

slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 2);
