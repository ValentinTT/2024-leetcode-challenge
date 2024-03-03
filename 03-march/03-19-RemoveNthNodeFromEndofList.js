// 19. Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.next === null && n === 1) return null;
  // let f = head;
  // let size = 1;
  // while(f.next !== null) {
  //     size ++;
  //     f = f.next;
  // }
  // f = head;
  // let pos = 1;
  // while(f.next !== null) {
  //     if(pos === size - n) {
  //         f.next = f.next.next;
  //         return head;
  //     }
  //     else {
  //         pos++;
  //         f = f.next;
  //     }
  // }
  // return head.next;
  let f = head;
  let b = head;
  let gap = 0;
  while (f.next !== null) {
    if (gap === n) {
      f = f.next;
      b = b.next;
    } else {
      gap++;
      f = f.next;
    }
  }
  if (gap === n) {
    b.next = b.next.next;
    return head;
  }
  return head.next;
};
