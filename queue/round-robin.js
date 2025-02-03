const { Queue } = require("./main");

class Task {
  static #count = 0;
  static #list = [];
  constructor(id, burstTime) {
    this.id = id;
    this.arrivalTime = Task.#count++;
    this.burstTime = burstTime;
    this.remainingTime = burstTime;
    this.completionTime = 0;
    Task.#list.push(this);
  }
  isCompleted() {
    return !this.remainingTime;
  }
  static isEveryTaskCompleted() {
    return Task.#list.every((task) => task.isCompleted());
  }
}

function roundRobinScheduler(tasks = [], timeQuantum) {
  const readyQueue = new Queue();
  let currentTime = 0;

  //on time 0 first process will be ready for execution in ready queue
  readyQueue.enqueue(tasks[currentTime]);

  //Check untill every process is completed
  while (!Task.isEveryTaskCompleted()) {
    const task = readyQueue.dequeue();
    for (let i = timeQuantum; i > 0; i--) {
      currentTime++;
      tasks[currentTime] && readyQueue.enqueue(tasks[currentTime]);
      task.remainingTime -= 1;
      if (task.isCompleted()) {
        task.completionTime = currentTime;
        task.turnAroundTime = task.completionTime - task.arrivalTime;
        task.waitingTime = task.turnAroundTime - task.burstTime;
        break;
      }
    }
    if (!task.isCompleted()) {
      readyQueue.enqueue(task);
    }
  }

  return {
    averageTurnAroundTime:
      tasks.reduce((acc, task) => {
        acc += task.turnAroundTime;
        return acc;
      }, 0) / tasks.length,
    averageWaitingTime:
      tasks.reduce((acc, task) => {
        acc += task.waitingTime;
        return acc;
      }, 0) / tasks.length,
  };
}

console.log(
  roundRobinScheduler(
    [
      new Task(1, 5),
      new Task(2, 3),
      new Task(3, 1),
      new Task(4, 2),
      new Task(5, 3),
    ],
    2
  )
);
