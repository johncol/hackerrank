/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
  if (!head) {
    return head;
  }

  while (head.next && head.data === head.next.data) {
    head.next = head.next.next;
  }

  return {
    data: head.data,
    next: removeDuplicates(head.next)
  };
}
