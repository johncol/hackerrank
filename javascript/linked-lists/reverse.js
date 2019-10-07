/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 */
function reverse(head, nodeBefore) {
  if (!head.next) {
    return {
      data: head.data,
      next: nodeBefore
    };
  }

  const reversed = reverse(head.next, head);
  head.next = nodeBefore;
  return reversed;
}
