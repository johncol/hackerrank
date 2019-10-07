/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 */
function insertNodeAtTail(head, data) {
  if (!head) {
    return { data };
  } else {
    return {
      data: head.data,
      next: insertNodeAtTail(head.next, data)
    };
  }
}
