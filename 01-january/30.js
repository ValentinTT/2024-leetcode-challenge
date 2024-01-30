/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let a, b;
  // let res = 0;
  for (let op of tokens) {
    switch (op) {
      case "+":
        a += b;
        break;
      case "-":
        a -= b;
        break;
      case "*":
        a *= b;
      case "/":
        a /= b;
      default: {
        if (a === undefined) a = Number(op);
        else b = Number(op);
      }
    }
  }
  return a;
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
