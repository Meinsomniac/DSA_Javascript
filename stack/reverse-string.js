const { Stack } = require("./main");

function stringReverse(string) {
  const stack = new Stack();
  let reversedString = "";

  for (let char of string) {
    stack.push(char);
  }

  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }
  return reversedString;
}

function reverseWords(string) {
  return string
    .split(" ")
    ?.map((str) => stringReverse(str))
    ?.join(" ");
}

console.log(reverseWords("Hello World!"));
