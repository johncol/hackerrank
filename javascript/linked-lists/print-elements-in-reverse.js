/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 */
function reversePrint(head) {
  if (head.next) {
    reversePrint(head.next);
  }

  console.log(head.data);
}
