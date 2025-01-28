const { Stack } = require("./main");

const stack = new Stack();

const obj = {
  "}": "{",
  ")": "(",
  "]": "[",
};

function checkParanthesis(string) {
  const openStack = new Stack();

  if (!string) return true;

  for (let char of string) {
    if (!obj[char]) openStack.push(char);
    else if (obj[char] == openStack.peek()) {
      openStack.pop();
    } else openStack.push(char);
  }
  return openStack.isEmpty();
}

console.log(checkParanthesis("({[({[]})]})"));
