const { Queue } = require("./main");

function hotPotato(peoples = [], passes) {
  const peopleQueue = new Queue();

  peoples.forEach((people) => peopleQueue.enqueue(people));

  while (peopleQueue.getSize() > 1) {
    for (let i = 0; i < passes; i++) {
      peopleQueue.enqueue(peopleQueue.dequeue());
    }
    const eliminated = peopleQueue.dequeue();
    console.log({ eliminated });
  }

  //return winner
  return peopleQueue.dequeue();
}

const winner = hotPotato(
  ["harry", "Hermiony", "Ron", "Hagrid", "Sevrus", "Dumbledore"],
  25
);
console.log({ winner });
