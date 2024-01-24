/**
 * @author: ValentinTT
 * @brief 1457. Pseudo-Palindromic Paths in a Binary Tree
 * @version 0.1
 * @date 24-01-2023
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
  //   too slow
  //   const rec = (node) => {
  //     if (node === null) return null;
  //     let l = rec(node.left);
  //     let r = rec(node.right);

  //     if (l === null && r === null) return [[node.val]];

  //     let res = [];
  //     if (l !== null) {
  //       for (let i of l) {
  //         res.push([node.val, ...i]);
  //       }
  //     }
  //     if (r !== null) {
  //       for (let i of r) {
  //         res.push([node.val, ...i]);
  //       }
  //     }
  //     return res;
  //   };

  //   const isPseudoPalindromic = (arr) => {
  //     let counter = new Array(10).fill(0);
  //     for (let i of arr) counter[i]++;
  //     return counter.filter((c) => c % 2 !== 0).length <= 1;
  //   };

  //   let paths = rec(root);

  //   return paths.filter((path) => isPseudoPalindromic(path)).length;
  let count = 0;
  let stack = [[root, 0]];
  while (stack.length !== 0) {
    let [curr, path] = stack.pop();
    // leave
    if (curr === null) continue;
    path ^= 1 << curr.val;
    if (curr.left === null && curr.right === null) {
      if ((path & (path - 1)) === 0) count += 1;
    } else {
      stack.push([curr.left, path]);
      stack.push([curr.right, path]);
    }
  }
  return count;
};
