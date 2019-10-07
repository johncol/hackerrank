/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 */
function insertNodeAtHead(head, data) {
  if (!head) {
    return { data };
  } else {
    return { data, next: head };
  }
}
