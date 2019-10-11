/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 */
function sortedInsertRecursive(head, data) {
  if (!head) {
    return { data };
  }

  if (data < head.data) {
    const node = { data, prev: head.prev, next: head };
    if (head.prev) {
      head.prev.next = node;
    }
    head.prev = node;
    return node;
  }

  if (!head.next) {
    head.next = { data, prev: head };
    return head;
  }

  return {
    ...head,
    next: sortedInsert(head.next, data)
  };
}

function sortedInsert(head, data) {
  if (!head) {
    return { data };
  }

  if (data < head.data) {
    const newHead = {
      data,
      next: head
    };
    head.prev = newHead;
    return newHead;
  }

  let pointer = head;
  while (data > pointer.data && pointer.next) {
    pointer = pointer.next;
  }

  const shouldBeInsertedBeforePointer = data <= pointer.data;

  if (shouldBeInsertedBeforePointer) {
    const node = {
      data,
      prev: pointer.prev,
      next: pointer
    };
    pointer.prev.next = node;
    pointer.prev = node;
  } else {
    const node = {
      data,
      prev: pointer
    };
    pointer.next = node;
  }

  return head;
}
