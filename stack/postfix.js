const { Stack } = require("./main");

const stack = new Stack();

function evaluatePostfix(str) {
  let result = "";
  for (let char of str) {
    if (Number.isInteger(+char)) stack.push(char);
    else {
      console.log(stack, char);
      const a = stack.pop();
      const b = stack.pop();
      result = eval(b + char + a);
      stack.push(result);
    }
  }
  return result;
}

console.log(evaluatePostfix("51+3*52-/"));
