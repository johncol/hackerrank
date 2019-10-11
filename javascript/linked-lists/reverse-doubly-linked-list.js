/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 */
function reverse(head) {
  if (!head || !head.next) {
    return head;
  }

  let pointer = head;

  while (pointer.next) {
    let { next } = pointer;
    pointer.next = pointer.prev;
    pointer.prev = next;
    pointer = next;
  }

  head = pointer;
  head.next = head.prev;
  delete head.prev;

  return head;
}
