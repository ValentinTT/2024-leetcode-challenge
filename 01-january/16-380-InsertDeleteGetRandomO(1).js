/**
 * @author: ValentinTT
 * @brief 380. Insert Delete GetRandom O(1)
 * @version 0.1
 * @date 16-01-2023
 */
var RandomizedSet = function () {
  this.set = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.map.set(val, this.set.length);
  this.set.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  let idxToRemove = this.map.get(val);
  this.map.set(this.set[this.set.length - 1], idxToRemove);
  this.map.delete(val);
  this.set[idxToRemove] = this.set[this.set.length - 1];
  this.set.pop();
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.set[Math.floor(Math.random() * this.set.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
