/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 */
function compareLists(llist1, llist2) {
  if (llist1 === null && llist2 === null) {
    return true;
  }

  if (llist1 === null || llist2 === null) {
    return false;
  }

  if (llist1.data !== llist2.data) {
    return false;
  }

  return compareLists(llist1.next, llist2.next);
}
