/**
 * @author: ValentinTT
 * @brief 2610. Convert an Array Into a 2D Array With Conditions
 * @version 0.1
 * @date 02-01-2023
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  let counter = new Array(nums.length + 1).fill(0);
  nums.map((number) => counter[number]++);

  let max = Math.max(...counter);
  let result = new Array(max);
  for (let i = 0; i < max; i++) {
    result[i] = [];
  }

  counter.forEach((count, number) => {
    if (count === 0) return;
    for (let i = 0; i < count; i++) {
      result[i].push(number);
    }
  });

  return result;
};

var findMatrix2 = function (nums) {
  //nums = [1,3,4,1,2,3,1]  length=7
  //freq = [0, 0, 0, 0, 0, 0, 0, 0] length=8
  const freq = new Array(nums.length + 1).fill(0);
  const ans = [];

  // Cuento y creo la respuesta en la misma pasada
  // En cada vuelta voy contando y aumentando freq
  // Si frequ >= ans.length ese número ya se cargó en todos los arr dentro de la matriz, tengo que agregar otra fila y agregarlo ahí
  for (const c of nums) {
    if (freq[c] >= ans.length) {
      ans.push([]);
    }

    ans[freq[c]].push(c);
    freq[c]++;
  }

  return ans;
};
