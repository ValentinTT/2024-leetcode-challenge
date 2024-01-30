/**
 * @author: ValentinTT
 * @brief 150. Evaluate Reverse Polish Notation
 * @version 0.1
 * @date 30-01-2023
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let operands = [];
  let operations = ["+", "-", "/", "*"];

  for (let op of tokens) {
    if (!operations.includes(op)) {
      operands.push(Number(op));
    } else {
      let b = operands.pop();
      let a = operands.pop();

      switch (op) {
        case "+":
          operands.push(a + b);
          break;
        case "-":
          operands.push(a - b);
          break;
        case "*":
          operands.push(a * b);
          break;
        case "/":
          operands.push(Math.trunc(a / b));
          break;
      }
    }
  }
  return operands.pop();
};
