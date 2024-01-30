/**
 * @author: ValentinTT
 * @brief 232. Implement Queue using Stacks
 * @version 0.1
 * @date 29-01-2023
 */
var MyQueue = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let last = this.queue[0];

  this.queue = this.queue.slice(1);

  return last;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.queue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
