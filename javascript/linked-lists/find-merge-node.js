/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.
function findMergeNode(headA, headB) {
  let pointerA, pointerB;

  pointerA = headA;
  while (pointerA) {
    pointerB = headB;
    while (pointerB) {
      if (pointerA === pointerB) {
        return pointerA.data;
      }
      pointerB = pointerB.next;
    }
    pointerA = pointerA.next;
  }
}
