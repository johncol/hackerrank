/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 */
function deleteNode(head, position) {
  if (!head.next) {
    return head;
  }

  if (position === 0) {
    return head.next;
  }

  return {
    data: head.data,
    next: deleteNode(head.next, position - 1)
  };
}
