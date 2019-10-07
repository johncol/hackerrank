/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function hasCycle(head) {
  if (!head || !head.next) {
    return false;
  }
  let pointerA, pointerB;

  pointerA = head;
  while (pointerA) {
    pointerB = pointerA.next;
    while (pointerB) {
      if (pointerA === pointerB) {
        return true;
      }
      pointerB = pointerB.next;
    }
    pointerA = pointerA.next;
  }

  return false;
}
