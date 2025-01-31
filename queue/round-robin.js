const { Queue } = require("./main");
class Task {
  static #count = 0;
  constructor(id, burstTime) {
    this.id = id;
    this.burstTime = burstTime;
    this.remainingTime = burstTime;
    this.completionTime = 0;
    this.turnAroundTime = this.completionTime - this.arrivalTime;
    this.waitingTime = this.turnAroundTime - this.burstTime;
    this.arrivalTime = Task.#count++;
  }
  isCompleted() {
    return !this.remainingTime;
  }
}

function roundRobinScheduler(tasks = [], timeQuantum) {
  const readyQueue = new Queue();
  let currentTime = 0;

  readyQueue.enqueue(tasks[currentTime]);
  currentTime++;
  while (!readyQueue.isEmpty()) {
    for (let i = timeQuantum; i > 0; i--) {
      if (task[currentTime]) readyQueue.enqueue(task[currentTime]);
      currentTime++;
      const task = readyQueue.front();
      task.remainingTime -= 1;
    }
  }
}

roundRobinScheduler(
  [
    new Task(1, 5),
    new Task(2, 3),
    new Task(3, 1),
    new Task(4, 2),
    new Task(5, 3),
  ],
  2
);
