/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 */
function mergeLists(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  const pointers = {
    list1: head1,
    list2: head2
  };
  let newList = {};
  const nodeBeforeHead = newList;

  while (pointers.list1 && pointers.list2) {
    const listKey = pointers.list1.data < pointers.list2.data ? 'list1' : 'list2';
    newList.next = pointers[listKey];
    pointers[listKey] = pointers[listKey].next;
    newList = newList.next;
  }

  if (pointers.list1) {
    newList.next = pointers.list1;
  }
  if (pointers.list2) {
    newList.next = pointers.list2;
  }

  return nodeBeforeHead.next;
}
