//1171. Remove Zero Sum Consecutive Nodes from Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  let preH = { next: head };
  let hm = { 0: preH };
  let s = 0;
  let n = head;

  while (n !== null) {
    s += n.val;
    if (s in hm) {
      let toRemove = hm[s].next;
      let aux = s;
      while (toRemove !== n) {
        aux += toRemove.val;
        toRemove = toRemove.next;
        delete hm[aux];
      }
      hm[s].next = n.next;
    } else {
      hm[s] = n;
    }
    n = n.next;
  }

  return preH.next;
};
