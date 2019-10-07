/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 */
function insertNodeAtPosition(head, data, position) {
  if (!head) {
    return { data };
  }

  if (position === 0) {
    return { data, next: head };
  }

  return {
    data: head.data,
    next: insertNodeAtPosition(head.next, data, position - 1)
  };
}
