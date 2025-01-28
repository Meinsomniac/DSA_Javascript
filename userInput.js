const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an array", (data) => {
  console.log(typeof data, data);
  rl.close();
});
