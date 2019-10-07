/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
  let tailReached = false;
  let currentPosition = 0;

  const traverseAndGet = pointer => {
    if (pointer) {
      const value = traverseAndGet(pointer.next);
      if (value !== undefined) {
        return value;
      }
    } else if (!tailReached) {
      tailReached = true;
      return;
    }

    if (currentPosition === positionFromTail) {
      return pointer.data;
    }

    currentPosition++;
    return;
  };

  return traverseAndGet(head);
}
