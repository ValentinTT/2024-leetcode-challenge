//141. Linked List Cycle
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // let s = new Set();
  // let curr = head;
  // while(curr !== null) {
  //     if(s.has(curr)) return true;
  //     s.add(curr);
  //     curr = curr.next;
  // }
  // return false;
  if (head === null) return false;
  let f = head;
  let s = head;
  while (f !== null && f.next !== null) {
    s = s.next;
    f = f.next.next;

    if (s === f) return true;
  }
  return false;
};
