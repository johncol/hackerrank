/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 */
function printLinkedList(head) {
  console.log(head.data);

  if (head.next) {
    printLinkedList(head.next);
  }
}
